import type { Client } from "../../../../domain";
import NoResults from "../../atoms/no-results/no-results";
import SecondaryButton from "../../atoms/secondary-button/secondary-button";
import style from "./style.module.css";

type Props = {
    clients: Client[] | undefined;
    onEditClient: (client: Client) => void;
    onDeleteClient: (client: Client) => void;
}

export default function ClientsTable({ clients, onEditClient, onDeleteClient }: Props) {
    if (!clients || clients.length === 0) {
        return <NoResults message="No se encontraron clientes" />;
    }

    return (
        <table className={style.table}>
            <thead>
                <tr>
                    <th className={style.tableHeader}>Nombre</th>
                    <th className={style.tableHeader}>Apellido</th>
                    <th className={style.tableHeader}>Celular</th>
                    <th className={style.tableHeader}>Teléfono</th>
                    <th className={style.tableHeader}>Estado</th>
                    <th className={style.tableHeader}>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {clients.map((client) => (
                    <tr key={client.id}>
                        <td className={style.tableContent}>{client.name}</td>
                        <td className={style.tableContent}>{client.surname}</td>
                        <td className={style.tableContent}>{client.mobilePhoneNumber}</td>
                        <td className={style.tableContent}>{client.landlinePhoneNumber}</td>
                        <td className={style.tableContent}>{client.status.name}</td>
                        <td className={style.actions}>
                            <SecondaryButton
                                enabled
                                text="Modificar"
                                type="button"
                                modifier={style.actionButtons}
                                onClick={() => onEditClient(client)}
                            />
                            <SecondaryButton
                                enabled
                                text="Desactivar"
                                type="button"
                                modifier={style.actionButtons}
                                onClick={() => onDeleteClient(client)}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
