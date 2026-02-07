import { RecordStatus } from "../../../../domain";
import style from "./style.module.css";

type Props = {
    status: RecordStatus;
};

export default function StatusIndicator({ status }: Props) {
    const isActive = status.name === RecordStatus.ACTIVE;
    const isInactive = status.name === RecordStatus.INACTIVE;
    const isDeleted = status.name === RecordStatus.DELETED;

    return (
        <span className={style.container}>
        <span
            className={`${style.dot} 
            ${isActive ? style.active : ""} 
            ${isInactive ? style.inactive : ""} 
            ${isDeleted ? style.deleted : ""}
            `}
        />
        <span className={style.label}>
            {isActive && "Activo"}
            {isInactive && "Inactivo"}
            {isDeleted && "Eliminado"}
        </span>
        </span>
    );
}
