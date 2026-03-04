import type { Service } from "../../../../domain";
import style from "./style.module.css";

type Props = {
    services: Service[];
    selectedServiceIds: string[];
    onRemoveService: (serviceId: string) => void;
}

export default function SelectedServicesList( {
    onRemoveService,
    selectedServiceIds,
    services
 }: Props ) {
    return (
        <div className={style.selectedServices}>
            <h4>Servicios seleccionados:</h4>
            <ul>
                {selectedServiceIds.map((id) => {
                    const service = services.find(s => s.id === id);
                    if (!service) return null;
                    return (
                        <li key={id}>
                            {service.name}{" "}
                            <button
                                type="button"
                                onClick={() => onRemoveService(id)}
                            >
                                ❌
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}