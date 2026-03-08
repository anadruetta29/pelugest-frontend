import type { Client } from "../../../../domain";
import MainButton from "../../atoms/main-button/main-button";
import ClientsTable from "../../molecules/clients-table/clients-table";
import addIcon from "../../../assets/icons/add-new.svg";
import { ClientsForm } from "../../molecules/clients-form/clients-form";
import SearchBar from "../../molecules/search-bar/search-bar";
import style from "./style.module.css";

type Props = {
    clients: Client[];

    isFormOpen: boolean;
    clientToEdit: Client | null;
    onNewClient: () => void;
    onEditClient: (client: Client) => void;
    onCloseForm: () => void;
    onSubmitClient: (e: React.FormEvent<HTMLFormElement>) => void;

    search: string;
    onSearchChange: (value: string) => void;
    onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
};



export default function ClientsList({
    clients,
    
    onEditClient,
    onNewClient,

    isFormOpen,
    clientToEdit,
    onCloseForm,
    onSubmitClient,

    onSearch,
    onSearchChange,
    search
}: Props) {
    return(
        <div className={style.container}>
            <div className={style.header}>
                <SearchBar 
                    value={search}
                    onChange={onSearchChange}
                    onSearch={onSearch}
                    entityName="cliente"
                />
                <MainButton
                    enabled
                    text="Nuevo Cliente"
                    type="button"
                    onClick={onNewClient}
                    icon={addIcon}
                    iconAlt="Nuevo cliente"
                    iconPosition="left"
                    modifier={style.newClientButton}
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