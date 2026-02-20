import { useNavigate, useParams } from "react-router-dom";
import useSession from "../../hooks/useSession";
import { useRepositories } from "../../../core";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import type { GetAllStockMovementsReq } from "../../../domain/dto/stock-movement/request/GetAllStockMovementsReq";
import { Errors, type CreateStockMovementReq, type StockMovement } from "../../../domain";
import type { UpdateStockMovementReq } from "../../../domain/dto/stock-movement/request/UpdateStockMovementReq";

export function ViewModel() {

    const { session, logged, userId } = useSession();

    const { id } = useParams();

    const { stockMovementRepository } = useRepositories();

    const [isLoading, setIsLoading] = useState(true);

    const [stockMovements, setStockMovements] = useState<StockMovement[]>([]);
    const [stockMovement, setStockMovement] = useState<StockMovement | null>(null);

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formMode, setFormMode] = useState<"create" | "edit">("create");

    const [stockMovementToEdit, setStockMovementToEdit] = useState<StockMovement | null>(null);

    useEffect(() => {
        if (logged === true && session) {
            fetchStockMovements();
        }
    }, [logged, session]);

    /* feature: show stock movements */    

    const fetchStockMovements = async () => {
        if (!session) return;

        setIsLoading(true);

        try {
            const response = await stockMovementRepository.getAll({
                session
            } as GetAllStockMovementsReq);

            setStockMovements(response.movements);

        } 
        catch (error) {
            toast.error(error instanceof Error ? error.message : Errors.UNKNOWN_ERROR);
        }
        finally {
            setIsLoading(false);
        }
    };

    /* feature: create and update stock movement */ 

    const onEditStockMovement = (movement: StockMovement) => {
        setFormMode("edit");
        setStockMovementToEdit(movement);
        setIsFormOpen(true);
    };

    const onNewStockMovement = () => {
        setFormMode("create");
        setStockMovementToEdit(null);
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
        setStockMovementToEdit(null);
    };

    const onSubmitStockMovement = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        if (!session) return;

        const formData = new FormData(e.currentTarget);

        try {
            if (formMode === "create") {
                await stockMovementRepository.create({
                    quantityMl: Number(formData.get("quantityMl")),
                    type: String(formData.get("type")),
                    productId: id,
                    userId: userId, 
                    session,
                } as CreateStockMovementReq);

                toast.success("Movimiento de stock creado correctamente");
            }

            if (formMode === "edit" && stockMovementToEdit) {

                await stockMovementRepository.update({
                    id: stockMovementToEdit.id,
                    quantityMl: Number(formData.get("quantityMl")),
                    type: formData.get("type") as "IN" | "OUT" | "ADJUSTMENT",
                    productId: id,
                    userId: userId, 
                    session
                } as UpdateStockMovementReq);

                toast.success("Movimiento de stock actualizado correctamente");
            }

            setIsFormOpen(false);
            setStockMovementToEdit(null);
            fetchStockMovements();
        } 
        catch (error) {
            toast.error(
                error instanceof Error ? error.message : Errors.UNKNOWN_ERROR
            );
        }
    };


    return {
        isLoading,
        
        stockMovements,

        isFormOpen,
        stockMovementToEdit,
        onEditStockMovement,
        onNewStockMovement,
        closeForm,
        onSubmitStockMovement,
    };
}