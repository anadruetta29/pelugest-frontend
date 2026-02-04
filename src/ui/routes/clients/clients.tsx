import ClientsList from "../../components/organisms/clients-list/clients-list";
import Layout from "../../layout/layout";
import { ViewModel } from "./viewmodel";

export default function ClientsRoute() {

    const { 
        clients,
        isDeleteOpen,
        clientToDelete,
        onDeleteClient,
        cancelDelete,
        proceedDelete,
        onEditClient,
        onNewClient,
    } = ViewModel();

    return (
        <Layout withSidebar={true}>
            <ClientsList
                clients={clients}
                isDeleteOpen={isDeleteOpen}
                clientToDelete={clientToDelete}
                onDeleteClient={onDeleteClient}
                onConfirmDelete={proceedDelete}
                onCancelDelete={cancelDelete}
                onEditClient={onEditClient}
                onNewClient={onNewClient}
            />
        </Layout>
    )
}