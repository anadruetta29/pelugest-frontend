import ProductsList from "../../components/organisms/products-list/products-list";
import Layout from "../../layout/layout";
import { ViewModel } from "./viewmodel";
import Loader from "../../components/atoms/loader/loader";

export default function ProductsRoute() {
    const {
        isLoading,

        isFormOpen,
        productToEdit,
        onEditProduct,
        onNewProduct,
        closeForm,
        onSubmitProduct,
        onUpdateStockProduct,
        search,
        handleSearchChange,
        handleSearch,
        displayedProducts
    } = ViewModel();

    if (isLoading) {
        return (
            <Layout withSidebar>
                <Loader />
            </Layout>
        );
    }

    return (
        <Layout withSidebar>
            <ProductsList
                products={displayedProducts}
                isFormOpen={isFormOpen}
                productToEdit={productToEdit}
                onEditProduct={onEditProduct}
                onNewProduct={onNewProduct}
                onCloseForm={closeForm}
                onSubmitProduct={onSubmitProduct}
                onUpdateStockProduct={onUpdateStockProduct}
                search={search}
                onSearchChange={handleSearchChange}
                onSearch={handleSearch}
            />
        </Layout>
    );
}
