import type { Appointment } from "../../../../domain";
import { ActionButton } from "../../atoms/action-button/action-button";
import AppointmentStatusIndicator from "../../atoms/appointment-status-indicator/appointment-status-indicator";
import SmallTitle from "../../atoms/small-title/small-title";
import editIcon from "../../../assets/icons/edit.svg";
import style from "./style.module.css";
import EmptyActions from "../../atoms/empty-actions/empty-actions";

type Props = {
    appointment: Appointment;
    onStart?: (id: string) => void;
    onAttend?: (id: string) => void;
    onMiss?: (id: string) => void;
    onCancel?: (id: string) => void;
    onViewDetail?: (id: string) => void;
    appointmentNumber: number;
    onEditAppointment: () => void;
};

export default function AppointmentCard({
    appointment,
    appointmentNumber,
    onAttend,
    onCancel,
    onMiss,
    onStart,
    onViewDetail,
    onEditAppointment
}: Props) {

    const start = new Date(appointment.startDateTime);
    const end = new Date(appointment.estimatedEndDateTime);


    return (
        <div className={style.container}>

            <div className={style.header}>
                <SmallTitle text={`Turno n° ${appointmentNumber}`} />
                { appointment.status.name === "RESERVED" && ( 
                    <img
                        src={editIcon}
                        alt="Edit icon"
                        onClick={onEditAppointment}
                        className={style.editIcon}
                    /> )
                }
            </div>

            <div className={style.info}>
                
                <p className={style.person}>
                    <span className={style.label}>Cliente</span>
                    <span className={style.value}>{appointment.client.name}</span>
                </p>

                <p className={style.person}>
                    <span className={style.label}>Peluquero</span>
                    <span className={style.value}>{appointment.hairdresser.name}</span>
                </p>

                <p className={style.date}>
                    {start.toLocaleDateString("es-AR", {
                        day: "numeric",
                        month: "short",
                        })
                    } · {start.toLocaleTimeString("es-AR", {
                        hour: "2-digit",
                        minute: "2-digit",
                        })
                    } - {end.toLocaleTimeString("es-AR", {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                </p>

                <div className={style.statusWrapper}>
                    <AppointmentStatusIndicator status={appointment.status} />
                </div>
            </div>

            <div className={style.actions}>
                {appointment.status.name === "RESERVED" && (
                    <>
                        <ActionButton
                            label="Iniciar"
                            variant="primary"
                            onClick={() => onStart?.(appointment.id)}
                        />

                        <ActionButton
                            label="Cancelar"
                            variant="danger"
                            onClick={() => onCancel?.(appointment.id)}
                        />
                    </>
                )}

                {appointment.status.name === "IN_PROGRESS" && (
                    <>
                        <ActionButton
                            label="Finalizar"
                            variant="success"
                            onClick={() => onAttend?.(appointment.id)}
                        />

                        <ActionButton
                            label="Ausente"
                            variant="secondary"
                            onClick={() => onMiss?.(appointment.id)}
                        />
                    </>
                )}

                {(  appointment.status.name === "MISSED" || 
                    appointment.status.name === "ATTENDED" || 
                    appointment.status.name === "CANCELLED" ) && (
                    <EmptyActions message="No hay acciones disponibles en este momento" />
                )}
            </div>

            <div className={style.detailButtonWrapper}>
                <button
                    type="button"
                    className={style.viewDetailButton}
                    onClick={() => onViewDetail?.(appointment.id)}
                >
                    Ver detalle →
                </button>
            </div>
        </div>
    );
}