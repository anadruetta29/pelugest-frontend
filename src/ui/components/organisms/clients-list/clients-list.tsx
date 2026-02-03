import type { Client } from "../../../../domain";
import MainButton from "../../atoms/main-button/main-button";
import ClientsTable from "../../molecules/clients-table/clients-table";
import addIcon from "../../../assets/icons/add-new.svg";
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
                    icon={addIcon}
                    iconAlt="Nuevo cliente"
                    iconPosition="left"
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