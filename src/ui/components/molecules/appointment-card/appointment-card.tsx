import type { Appointment } from "../../../../domain";
import { ActionButton } from "../../atoms/action-button/action-button";
import AppointmentStatusIndicator from "../../atoms/appointment-status-indicator/appointment-status-indicator";
import SmallTitle from "../../atoms/small-title/small-title";
import editIcon from "../../../assets/icons/edit.svg";
import style from "./style.module.css";
import SecondaryButton from "../../atoms/secondary-button/secondary-button";

type Props = {
    appointment: Appointment;
    onStart?: (id: string) => void;
    onAttend?: (id: string) => void;
    onMiss?: (id: string) => void;
    onCancel?: (id: string) => void;
    onViewDetail?: (id: string) => void;
    appointmentNumber: number;

    onEditAppointment: () => void;
}

export default function AppointmentCard( { appointment,
    appointmentNumber,
    onAttend,
    onCancel,
    onMiss,
    onStart,
    onViewDetail,
    onEditAppointment
 }: Props) {
    return (
        <div className={style.container}>

            <div className={style.header}>
                <SmallTitle text={`Turno n° ${appointmentNumber}`} />
                <img src={editIcon} alt="Edit icon" onClick={onEditAppointment} className={style.editIcon}/>
            </div>

            <p className={style.date}>
                {new Date(appointment.startDateTime).toLocaleString()} -{" "}
                {new Date(appointment.estimatedEndDateTime).toLocaleString()}
            </p>

            <p className={style.person}> Cliente: {appointment.client.name}</p>
            <p className={style.person}> Peluquero: {appointment.hairdresser.name}</p>

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
                <SecondaryButton
                    enabled
                    text="Ver detalle"
                    type="button"
                    onClick={() => onViewDetail?.(appointment.id)}
                />
            </div>
        </div>
    )
}