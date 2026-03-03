import type { Appointment, AppointmentStatus } from "../../../../domain";
import { ActionButton } from "../../atoms/action-button/action-button";
import AppointmentStatusIndicator from "../../atoms/appointment-status-indicator/appointment-status-indicator";
import SmallTitle from "../../atoms/small-title/small-title";
import style from "./style.module.css";

type Props = {
    appointment: Appointment;
    onStart?: (id: string) => void;
    onAttend?: (id: string) => void;
    onMiss?: (id: string) => void;
    onCancel?: (id: string) => void;
    onViewDetail?: (id: string) => void;
    appointmentNumber: number;
}

export default function AppointmentCard( { appointment,
    appointmentNumber,
    onAttend,
    onCancel,
    onMiss,
    onStart,
    onViewDetail
 }: Props) {
    return (
        <div className={style.container}>
            <SmallTitle text={`Turno n° ${appointmentNumber}`} />

            <p className={style.date}>
                {new Date(appointment.startDateTime).toLocaleString()} -{" "}
                {new Date(appointment.estimatedEndDateTime).toLocaleString()}
            </p>

            <p className={style.person} >Cliente: {appointment.client.name}</p>
            <p className={style.person} >Peluquero: {appointment.hairdresser.name}</p>

            <span className={style.statusWrapper}>
                <AppointmentStatusIndicator status={appointment.status} />
            </span>
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
            </div>

            <div className={style.detailButtonWrapper}>
                <ActionButton
                    label="Ver detalle"
                    variant="secondary"
                    onClick={() => onViewDetail?.(appointment.id)}
                />
            </div>
        </div>
    )
}