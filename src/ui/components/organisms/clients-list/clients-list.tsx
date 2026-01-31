import type { Client } from "../../../../domain";
import MainButton from "../../atoms/main-button/main-button";
import ClientsTable from "../../molecules/clients-table/clients-table";
import style from "./style.module.css";

type Props = {
    clients: Client[];
    onNewClient: () => {};
    onEditClient: () => {};
    onDeleteClient: () => {};

}

export default function ClientsList( { clients, onDeleteClient, onEditClient, onNewClient}: Props ) {
    return(
        <div className={style.container}>
            <div className={style.newClientButton}>
                <MainButton
                    enabled
                    text="Nuevo Cliente"
                    type="button"
                    onClick={onNewClient}
                />
            </div>
            <div>
                <ClientsTable
                    clients={clients}
                    onDeleteClient={onDeleteClient}
                    onEditClient={onEditClient}
                />
            </div>
        </div>
    )
}