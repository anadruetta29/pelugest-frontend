import style from "./style.module.css";

type Props = { 
    label: string;
    variant: "primary" | "danger" | "success" | "secondary";
    onClick: () => void;
    iconSrc?: string;
    iconAlt?: string;
};

export const ActionButton = ({
  label,
  variant,
  onClick,
  iconSrc,
  iconAlt
}: Props) => {
    return (
        <button
            className={`${style.btn} ${style[variant]}`}
            onClick={onClick}
        >
        {iconSrc && (
            <img
                src={iconSrc}
                alt={iconAlt ?? "button icon"}
                className={style.icon}
            />
        )}
        <span>{label}</span>
        </button>
    );
};