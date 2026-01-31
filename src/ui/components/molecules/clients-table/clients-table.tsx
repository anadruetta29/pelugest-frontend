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
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Celular</th>
                    <th>Fijo</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {clients.map((client) => (
                    <tr key={client.id}>
                        <td>{client.name}</td>
                        <td>{client.surname}</td>
                        <td>{client.mobilePhoneNumber}</td>
                        <td>{client.landlinePhoneNumber}</td>
                        <td>{client.status.name}</td>
                        <td className={style.actions}>
                            <SecondaryButton
                                enabled
                                text="Modificar"
                                type="button"
                                onClick={() => onEditClient(client)}
                            />
                            <SecondaryButton
                                enabled
                                text="Desactivar"
                                type="button"
                                onClick={() => onDeleteClient(client)}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
