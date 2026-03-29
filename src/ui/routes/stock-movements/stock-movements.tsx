import Loader from "../../components/atoms/loader/loader";
import ClientsList from "../../components/organisms/clients-list/clients-list";
import StockMovementsList from "../../components/organisms/stock-movements-list/stock-movements-list";
import Layout from "../../layout/layout";
import { ViewModel } from "./viewmodel";

export default function StockMovementsRoute() {
    const {
        isLoading,
        stockMovements,
        isFormOpen,
        stockMovementToEdit,
        onEditStockMovement,
        onNewStockMovement,
        closeForm,
        onSubmitStockMovement,
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
            <StockMovementsList
                stockMovements={stockMovements}
                isFormOpen={isFormOpen}
                stockMovementToEdit={stockMovementToEdit}
                onEditStockMovement={onEditStockMovement}
                onNewStockMovement={onNewStockMovement}
                onCloseForm={closeForm}
                onSubmitStockMovement={onSubmitStockMovement}
            />
        </Layout>
    );
}
