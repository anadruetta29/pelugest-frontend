import { AppointmentStatus } from "../../../../domain";
import style from "./style.module.css";

type Props = {
    status: AppointmentStatus;
};

export default function AppointmentStatusIndicator({ status }: Props) {

    const isReserved = status.name === AppointmentStatus.RESERVED;
    const isMissed = status.name === AppointmentStatus.MISSED;
    const isInProgress = status.name === AppointmentStatus.INPROGRESS;
    const isAttended = status.name === AppointmentStatus.ATTENDED;
    const isCancelled = status.name === AppointmentStatus.CANCELLED;

    return (
        <span className={style.badge}>
            <span className={`${style.dot} ${style[status.name]}`} />
            <span>
                {isReserved && "Reservado"}
                {isMissed && "Ausente"}
                {isInProgress && "En progreso"}
                {isAttended && "Atendido"}
                {isCancelled && "Cancelado"}
            </span>
        </span>
    );
}