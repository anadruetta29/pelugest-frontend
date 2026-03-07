import type { Client } from "../../../../domain";
import NoResults from "../../atoms/no-results/no-results";
import SecondaryButton from "../../atoms/secondary-button/secondary-button";
import RecordStatusIndicator from "../../atoms/record-status-indicator/record-status-indicator";
import Table from "../../atoms/table/table";
import style from "./style.module.css";

type Props = {
    clients: Client[] | undefined;
    onEditClient: (client: Client) => void;
};

export default function ClientsTable({
    clients,
    onEditClient,
}: Props) {
    if (!clients || clients.length === 0) {
      return <NoResults message="No se encontraron clientes" />;
    }

	return (
		<Table
			headers={[
				"Nombre",
				"Apellido",
				"Celular",
				"Teléfono",
				"Estado",
				"Acciones",
			]}
		>
			{clients.map((client) => (
				<tr key={client.id}>
					<td className={style.tableContent}>{client.name}</td>
					<td className={style.tableContent}>{client.surname}</td>
					<td className={style.tableContent}>
						{client.mobilePhoneNumber}
					</td>
					<td className={style.tableContent}>
						{client.landlinePhoneNumber ? (
							client.landlinePhoneNumber
						) : (
							<span className={style.notAvailable}>N/A</span>
						)}
					</td>
					<td className={style.tableContent}>
						<RecordStatusIndicator status={client.status} />
					</td>
					<td className={style.actions}>
						<SecondaryButton
						enabled
						text="Modificar"
						type="button"
						modifier={style.actionButtons}
						onClick={() => onEditClient(client)}
						/>
					</td>
				</tr>
			))}
		</Table>
	);
}
