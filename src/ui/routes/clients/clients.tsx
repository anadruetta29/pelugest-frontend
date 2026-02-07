import Loader from "../../components/atoms/loader/loader";
import ClientsList from "../../components/organisms/clients-list/clients-list";
import Layout from "../../layout/layout";
import { ViewModel } from "./viewmodel";

export default function ClientsRoute() {
    const {
        isLoading,
        clients,
        isFormOpen,
        clientToEdit,
        onEditClient,
        onNewClient,
        closeForm,
        onSubmitClient,
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
            <ClientsList
                clients={clients}
                isFormOpen={isFormOpen}
                clientToEdit={clientToEdit}
                onEditClient={onEditClient}
                onNewClient={onNewClient}
                onCloseForm={closeForm}
                onSubmitClient={onSubmitClient}
            />
        </Layout>
    );
}
