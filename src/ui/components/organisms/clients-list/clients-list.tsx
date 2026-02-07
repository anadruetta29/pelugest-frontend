import type { Client } from "../../../../domain";
import MainButton from "../../atoms/main-button/main-button";
import ClientsTable from "../../molecules/clients-table/clients-table";
import addIcon from "../../../assets/icons/add-new.svg";
import style from "./style.module.css";
import ConfirmModal from "../../molecules/confirm-modal/confirm-modal";
import { ClientsForm } from "../../molecules/clients-form/clients-form";

type Props = {
    clients: Client[];

    isFormOpen: boolean;
    clientToEdit: Client | null;
    onNewClient: () => void;
    onEditClient: (client: Client) => void;
    onCloseForm: () => void;
    onSubmitClient: (e: React.FormEvent<HTMLFormElement>) => void;
};



export default function ClientsList({
    clients,
    
    onEditClient,
    onNewClient,

    isFormOpen,
    clientToEdit,
    onCloseForm,
    onSubmitClient,
}: Props) {
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
                    onEditClient={onEditClient}
                />
                
                {isFormOpen && (
                    <ClientsForm
                        client={clientToEdit ?? undefined}
                        onSubmit={onSubmitClient}
                        onCancel={onCloseForm}
                    />
                )}
            </div>
        </div>
    )
}