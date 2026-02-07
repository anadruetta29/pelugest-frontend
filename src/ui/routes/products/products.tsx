import ProductsList from "../../components/organisms/products-list/products-list";
import Layout from "../../layout/layout";
import { ViewModel } from "./viewmodel";
import Loader from "../../components/atoms/loader/loader";

export default function ProductsRoute() {
    const {
        isLoading,
        products,

        isFormOpen,
        productToEdit,
        onEditProduct,
        onNewProduct,
        closeForm,
        onSubmitProduct,
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
                products={products}
                isFormOpen={isFormOpen}
                productToEdit={productToEdit}
                onEditProduct={onEditProduct}
                onNewProduct={onNewProduct}
                onCloseForm={closeForm}
                onSubmitProduct={onSubmitProduct}
            />
        </Layout>
    );
}
