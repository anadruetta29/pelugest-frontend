import type { AppointmentDetail, Service } from "../../../../domain";
import crossIcon from "../../../assets/icons/cross.svg";
import style from "./style.module.css";

type Props = {
    services: Service[];
    selectedServiceIds: string[];
    details?: AppointmentDetail[];
    onRemoveService: (serviceId: string, detailId?: string) => void;
}

export default function SelectedServicesList( {
    onRemoveService,
    selectedServiceIds,
    details,
    services
 }: Props ) {
    return (
        <div className={style.selectedServices}>
            <h4>Servicios seleccionados:</h4>
            <ul>
                {selectedServiceIds.map((id) => {
                    const service = services.find(s => s.id === id);
                    const detail = details?.find(d => d.service.id === id);

                    if (!service) return null;

                    return (
                        <li key={id}>
                            {service.name}{" "}
                            <button
                                type="button"
                                onClick={() => onRemoveService(id, detail?.id)}
                            >
                                <img src={crossIcon} alt="Borrar servicio" />
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}