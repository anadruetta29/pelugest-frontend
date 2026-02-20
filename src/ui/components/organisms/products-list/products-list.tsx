import type { Product } from "../../../../domain";
import MainButton from "../../atoms/main-button/main-button";
import ProductsTable from "../../molecules/products-table/products-table";
import addIcon from "../../../assets/icons/add-new.svg";
import style from "./style.module.css";
import ConfirmModal from "../../molecules/confirm-modal/confirm-modal";
import { ProductsForm } from "../../molecules/products-form/products-form";

type Props = {
    products: Product[];
    
    isFormOpen: boolean;
    productToEdit: Product | null;
    onNewProduct: () => void;
    onEditProduct: (product: Product) => void;
    onUpdateStockProduct: (product: Product) => void;
    onCloseForm: () => void;
    onSubmitProduct: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function ProductsList({
    products,

    onEditProduct,
    onNewProduct,
    onUpdateStockProduct,

    isFormOpen,
    productToEdit,
    onCloseForm,
    onSubmitProduct,
}: Props) {
    return (
        <div className={style.container}>
            <div className={style.newProductButton}>
                <MainButton
                    enabled
                    text="Nuevo Producto"
                    type="button"
                    onClick={onNewProduct}
                    icon={addIcon}
                    iconAlt="Nuevo producto"
                    iconPosition="left"
                />
            </div>

            <div>
                <ProductsTable
                    products={products}
                    onEditProduct={onEditProduct}
                    onUpdateStockProduct={onUpdateStockProduct}
                />

                {isFormOpen && (
                    <ProductsForm
                        product={productToEdit ?? undefined}
                        onSubmit={onSubmitProduct}
                        onCancel={onCloseForm}
                    />
                )}
            </div>
        </div>
    );
}
