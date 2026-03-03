import type { AppointmentStatus } from "../../../../domain";
import style from "./style.module.css";

type Props = {
    status: AppointmentStatus;
};

export default function AppointmentStatusIndicator({ status }: Props) {
    return (
        <span className={`${style.badge} ${style[status.name]}`}>
            {status.name}
        </span>
    );
}