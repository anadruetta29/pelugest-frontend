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

        isFormOpen,
        clientToEdit,
        onEditClient,
        onNewClient,
        closeForm,
        onSubmitClient,
    } = ViewModel();

    return (
        <Layout withSidebar>
            <ClientsList
                clients={clients}

                isDeleteOpen={isDeleteOpen}
                clientToDelete={clientToDelete}
                onDeleteClient={onDeleteClient}
                onConfirmDelete={proceedDelete}
                onCancelDelete={cancelDelete}

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
