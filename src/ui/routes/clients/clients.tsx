import ClientsList from "../../components/organisms/clients-list/clients-list";
import Layout from "../../layout/layout";
import { ViewModel } from "./viewmodel";

export default function ClientsRoute() {

    const {  } = ViewModel();

    return (
        <Layout withSidebar={false}>
            <ClientsList
                clients={clients}
                onDeleteClient={onDeleteClient}
                onEditClient={onEditClient}
                onNewClient={onNewClient}
            />
        </Layout>
    )
}