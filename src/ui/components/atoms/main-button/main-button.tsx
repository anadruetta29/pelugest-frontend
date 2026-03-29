import style from "./style.module.css"

type Props = {
    text: string;
    type: "submit" | "button";
    enabled: boolean; 
    onClick?: () => void;
    modifier?: string;  
    icon?: string;
    iconAlt?: string;
    iconPosition?: "left" | "right";
}

export default function MainButton({ text, type, enabled, onClick, modifier, icon, iconAlt, iconPosition }: Props) {
	return (
		<button
			className={`${enabled ? style.container : style.containerDisabled} ${modifier}`}
			type={type}
			disabled={!enabled}
			onClick={onClick}
		>
		{icon && iconPosition === "left" && (
			<img src={icon} alt={iconAlt} className={style.icon} />
		)}

		<span>{text}</span>

		{icon && iconPosition === "right" && (
			<img src={icon} alt={iconAlt} className={style.icon} />
		)}
		</button>
	);
}