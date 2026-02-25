import type { Product } from "../../../../domain";
import MainButton from "../../atoms/main-button/main-button";
import ProductsTable from "../../molecules/products-table/products-table";
import addIcon from "../../../assets/icons/add-new.svg";
import style from "./style.module.css";
import ConfirmModal from "../../molecules/confirm-modal/confirm-modal";
import { ProductsForm } from "../../molecules/products-form/products-form";
import SearchBar from "../../molecules/search-bar/search-bar";

type Props = {
    products: Product[];
    
    isFormOpen: boolean;
    productToEdit: Product | null;
    onNewProduct: () => void;
    onEditProduct: (product: Product) => void;
    onUpdateStockProduct: (product: Product) => void;
    onCloseForm: () => void;
    onSubmitProduct: (e: React.FormEvent<HTMLFormElement>) => void;

    search: string;
    onSearchChange: (value: string) => void;
    onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
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

    onSearch,
    onSearchChange,
    search
}: Props) {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <SearchBar 
                    value={search}
                    onChange={onSearchChange}
                    onSearch={onSearch}
                 />
                <MainButton
                    enabled
                    text="Nuevo Producto"
                    type="button"
                    onClick={onNewProduct}
                    icon={addIcon}
                    iconAlt="Nuevo producto"
                    iconPosition="left"
                    modifier={style.newProductButton}
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
