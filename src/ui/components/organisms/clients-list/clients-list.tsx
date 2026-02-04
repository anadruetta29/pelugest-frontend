import type { Client } from "../../../../domain";
import MainButton from "../../atoms/main-button/main-button";
import ClientsTable from "../../molecules/clients-table/clients-table";
import addIcon from "../../../assets/icons/add-new.svg";
import style from "./style.module.css";
import ConfirmModal from "../../molecules/confirm-modal/confirm-modal";

type Props = {
    clients: Client[];

    isDeleteOpen: boolean;
    clientToDelete: Client | null;

    onNewClient: () => void;
    onEditClient: (client: Client) => void;
    onDeleteClient: (client: Client) => void;
    onConfirmDelete: () => void;
    onCancelDelete: () => void;
};


export default function ClientsList( { 
    clients, onDeleteClient, onEditClient, onNewClient, clientToDelete, isDeleteOpen, onCancelDelete, onConfirmDelete
}: Props ) {
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
                
                {isDeleteOpen && (
                    <ConfirmModal
                        title="Desactivar cliente"
                        description={
                            clientToDelete
                                ? `¿Estás seguro que querés desactivar a ${clientToDelete.name} ${clientToDelete.surname}?`
                                : ""
                        }
                        confirmText="Desactivar"
                        cancelText="Cancelar"
                        onConfirm={onConfirmDelete}
                        onCancel={onCancelDelete}
                    />
                )}
            </div>
        </div>
    )
}