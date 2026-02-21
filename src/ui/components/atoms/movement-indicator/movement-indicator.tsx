import style from "./style.module.css";

type Props = {
    type: string;
};

export default function MovementIndicator({ type }: Props) {
    const isIn = type === "IN";
    const isOut = type === "OUT";
    const isAdjustment = type === "ADJUSTMENT";

    return (
        <span className={style.container}>
            <span
                className={`${style.icon} 
                ${isIn ? style.in : ""} 
                ${isOut ? style.out : ""} 
                ${isAdjustment ? style.adjustment : ""}
                `}
            >
                {isIn && "↑"}
                {isOut && "↓"}
                {isAdjustment && "—"}
            </span>
            <span className={style.label}>
                {isIn && "Ingreso"}
                {isOut && "Egreso"}
                {isAdjustment && "Ajuste"}
            </span>
        </span>
    );
}