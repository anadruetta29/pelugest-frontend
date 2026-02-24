import Loader from "../../components/atoms/loader/loader";
import ClientsList from "../../components/organisms/clients-list/clients-list";
import Layout from "../../layout/layout";
import { ViewModel } from "./viewmodel";

export default function ClientsRoute() {
    const {
        isLoading,
        displayedClients,
        isFormOpen,
        clientToEdit,
        onEditClient,
        onNewClient,
        closeForm,
        onSubmitClient,
        search,
        handleSearchChange,
        handleSearch,
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
                clients={displayedClients} 
                isFormOpen={isFormOpen}
                clientToEdit={clientToEdit}
                onEditClient={onEditClient}
                onNewClient={onNewClient}
                onCloseForm={closeForm}
                onSubmitClient={onSubmitClient}
                search={search}
                onSearchChange={handleSearchChange}
                onSearch={handleSearch}
            />
        </Layout>
    );
}