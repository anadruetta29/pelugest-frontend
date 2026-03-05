import type { AppointmentStatus } from "../../../../domain";
import style from "./style.module.css";

type Props = {
    status: AppointmentStatus;
};

export default function AppointmentStatusIndicator({ status }: Props) {

    return (
        <span className={style.badge}>
            <span className={`${style.dot} ${style[status.name]}`} />
            {status?.name
                    .toLowerCase()
                    .replace("_", " ")
                    .replace(/\b\w/g, l => l.toUpperCase())
            }
        </span>
    );
}