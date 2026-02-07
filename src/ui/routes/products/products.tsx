import ProductsList from "../../components/organisms/products-list/products-list";
import Layout from "../../layout/layout";
import { ViewModel } from "./viewmodel";

export default function ProductsRoute() {
    const {
        products,

        isDeleteOpen,
        productToDelete,
        onDeleteProduct,
        cancelDelete,
        proceedDelete,

        isFormOpen,
        productToEdit,
        onEditProduct,
        onNewProduct,
        closeForm,
        onSubmitProduct,
    } = ViewModel();

    return (
        <Layout withSidebar>
            <ProductsList
                products={products}

                isDeleteOpen={isDeleteOpen}
                productToDelete={productToDelete}
                onDeleteProduct={onDeleteProduct}
                onConfirmDelete={proceedDelete}
                onCancelDelete={cancelDelete}

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
