import type { Product, StockMovement } from "../../../../domain";
import MainButton from "../../atoms/main-button/main-button";
import ProductsTable from "../../molecules/products-table/products-table";
import addIcon from "../../../assets/icons/add-new.svg";
import style from "./style.module.css";
import ConfirmModal from "../../molecules/confirm-modal/confirm-modal";
import { ProductsForm } from "../../molecules/products-form/products-form";
import StockMovementsTable from "../../molecules/stock-movements-table/stock-movements-table";
import { StockMovementsForm } from "../../molecules/stock-movements-form/stock-movements-form";

type Props = {
    stockMovements: StockMovement[];
    
    isFormOpen: boolean;
    stockMovementToEdit: StockMovement | null;
    onNewStockMovement: () => void;
    onEditStockMovement: (stockMovement: StockMovement) => void;
    onCloseForm: () => void;
    onSubmitStockMovement: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function StockMovementsList({
    stockMovements,

    onEditStockMovement,
    onNewStockMovement,

    isFormOpen,
    stockMovementToEdit,
    onCloseForm,
    onSubmitStockMovement,
}: Props) {
    return (
        <div className={style.container}>
            <div className={style.newStockMovementButton}>
                <MainButton
                    enabled
                    text="Agregar"
                    type="button"
                    onClick={onNewStockMovement}
                    icon={addIcon}
                    iconAlt="Nuevo"
                    iconPosition="left"
                />
            </div>

            <div>
                <StockMovementsTable
                    stockMovements={stockMovements}
                    onEditStockMovement={onEditStockMovement}
                />

                {isFormOpen && (
                    <StockMovementsForm
                        stockMovement={stockMovementToEdit ?? undefined}
                        onSubmit={onSubmitStockMovement}
                        onCancel={onCloseForm}
                    />
                )}
            </div>
        </div>
    );
}
