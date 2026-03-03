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
        <button className={`btn btn-${variant}`} onClick={onClick}>
        {iconSrc && (
            <img
            src={iconSrc}
            alt={iconAlt ?? "button icon"}
            className="btn-icon"
            />
        )}
        <span>{label}</span>
        </button>
    );
};