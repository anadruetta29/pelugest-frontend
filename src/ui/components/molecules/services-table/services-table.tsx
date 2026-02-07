import truncateWords from "../../../../core/utils/truncate-words";
import type { Service } from "../../../../domain";
import NoResults from "../../atoms/no-results/no-results";
import SecondaryButton from "../../atoms/secondary-button/secondary-button";
import StatusIndicator from "../../atoms/status-indicator/status-indicator";
import Table from "../../atoms/table/table";
import style from "./style.module.css";

type Props = {
    services: Service[] | undefined;
    onEditService: (service: Service) => void;
    onDeleteService: (service: Service) => void;
    onViewDescription: (service: Service) => void;
};

export default function ServicesTable({
    services,
    onDeleteService,
    onEditService,
    onViewDescription
}: Props) {
    if (!services || services.length === 0) {
      return <NoResults message="No se encontraron servicios" />;
    }

	return (
		<Table
			headers={[
				"Nombre",
				"Descripción",
                "Duración estimada",
                "Precio base",
                "Estado",
                "Acciones"
			]}
		>
			{services.map((service) => (
				<tr key={service.id}>
					<td className={style.tableContent}>{service.name}</td>
					<td>
						{truncateWords(service.description, 30).text}
						{truncateWords(service.description, 30).truncated && (
							<button
								className={style.viewMore}
								onClick={() => onViewDescription(service)}
							>
								+ Ver más
							</button>
						)}
					</td>
					<td className={style.tableContent}>{service.estimatedDurationMin}</td>
					<td className={style.tableContent}>{service.basePrice}</td>
					<td className={style.tableContent}>
						<StatusIndicator status={service.status} />
					</td>
					<td className={style.actions}>
						<SecondaryButton
							enabled
							text="Modificar"
							type="button"
							modifier={style.actionButtons}
							onClick={() => onEditService(service)}
						/>
						<SecondaryButton
							enabled
							text="Desactivar"
							type="button"
							modifier={style.actionButtons}
							onClick={() => onDeleteService(service)}
						/>
					</td>
				</tr>
			))}
		</Table>
		
	);
}
