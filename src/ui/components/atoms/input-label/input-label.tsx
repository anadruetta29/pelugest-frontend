import { useState } from "react";
import style from "./style.module.css"

type Props = {
    id: string;
    name: string;
    type: "text" | "number" | "password" | "date" | "datetime-local";
    placeholder:string;
    defaultValue?: string | number | undefined;
    required?: boolean;
    label?: string;
    value?: string | undefined;
    onChange?: (value: string) => void;
    min?: number;
    max?: number; 
}

export default function InputLabel({label, name, type, placeholder, defaultValue, id, required, value, onChange, min, max}: Props) {
    const [self, setSelf] = useState<string | number | undefined>(value ?? defaultValue ?? "");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelf(e.target.value);
        if (onChange) {
            onChange(e.target.value);
        }
    }

    return(
        <div className={style.container}>
            {label && <label htmlFor={id}>{label}</label>}
		    <input 
                type={type} 
                placeholder={placeholder} 
                name={name} 
                id={id} 
                value={self} 
                onChange={handleChange} 
                required={required} 
                onWheel={(e: React.WheelEvent<HTMLInputElement>) => e.currentTarget.blur()} 
                min={min}
                max={max}
            />
        </div>
    )

}