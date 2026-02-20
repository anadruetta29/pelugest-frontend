import { useNavigate } from "react-router-dom";
import useSession from "../../hooks/useSession";
import { useRepositories } from "../../../core";
import { useState, useEffect } from "react";
import {
    Errors,
    RecordStatus,
    type Product,
    type FindRecordStatusByNameReq,
} from "../../../domain";
import toast from "react-hot-toast";
import type { DeactivateProductReq } from "../../../domain/dto/product/request/DeactivateProductReq";
import type { GetAllProductsReq } from "../../../domain/dto/product/request/GetAllProductsReq";
import type { CreateProducttReq } from "../../../domain/dto/product/request/CreateProductReq";
import type { UpdateProductReq } from "../../../domain/dto/product/request/UpdateProductReq";

export function ViewModel() {

    const { session, logged } = useSession();

    const { productRepository, recordStatusRepository } = useRepositories();

    const [isLoading, setIsLoading] = useState(true);

    const [products, setProducts] = useState<Product[]>([]);

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formMode, setFormMode] = useState<"create" | "edit">("create");

    const [productToEdit, setProductToEdit] = useState<Product | null>(null);

    useEffect(() => {
        if (logged && session) {
            fetchProducts();
        }
    }, [logged, session]);

    /* feature: show products */

    const fetchProducts = async () => {
        if (!session) return;

        setIsLoading(true);

        try {
            const response = await productRepository.getAll({
                session,
            } as GetAllProductsReq);

            setProducts(response.products);
        } 
        catch (error) {
            toast.error(
                error instanceof Error ? error.message : Errors.UNKNOWN_ERROR
            );
        }
        finally {
            setIsLoading(false);
        }
    };


    /* feature: create and update product */

    const onEditProduct = (product: Product) => {
        setFormMode("edit");
        setProductToEdit(product);
        setIsFormOpen(true);
    };

    const onUpdateStockProduct = (product: Product) => {

    }

    const onNewProduct = () => {
        setFormMode("create");
        setProductToEdit(null);
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
        setProductToEdit(null);
    };

    const onSubmitProduct = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!session) return;

        const formData = new FormData(e.currentTarget);

        try {
            if (formMode === "create") {
                await productRepository.create({
                    name: formData.get("name") as string,
                    price: Number(formData.get("price")),
                    session,
                } as CreateProducttReq);

                toast.success("Producto creado correctamente");
            }

            if (formMode === "edit" && productToEdit) {
                const statusName = formData.get("status") as string;

                const statusResponse =
                    await recordStatusRepository.findByName({
                        name: statusName,
                        session,
                    } as FindRecordStatusByNameReq);

                const status = RecordStatus.fromObject(
                    statusResponse.recordStatus
                );

                await productRepository.update({
                    id: productToEdit.id,
                    name: formData.get("name") as string,
                    price: Number(formData.get("price")),
                    status,
                    session,
                } as UpdateProductReq);

                toast.success("Producto actualizado correctamente");
            }

            setIsFormOpen(false);
            setProductToEdit(null);
            fetchProducts();
        } catch (error) {
            toast.error(
                error instanceof Error ? error.message : Errors.UNKNOWN_ERROR
            );
        }
    };

    return {
        isLoading,
        
        products,

        isFormOpen,
        productToEdit,
        onEditProduct,
        onNewProduct,
        closeForm,
        onSubmitProduct,
        onUpdateStockProduct
    };
}
