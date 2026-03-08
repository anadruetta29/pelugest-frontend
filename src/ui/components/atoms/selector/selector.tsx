import style from "./style.module.css";

type Option = {
    value: string;
    label: string;
};

type Props = {
    label: string;
    name?: string;
    id?: string;
    options: Option[];
    placeholder?: string;
    defaultValue?: string;
    required?: boolean;
    onChange?: (value: string) => void;
};

export default function Selector({
    label,
    name,
    id,
    options,
    placeholder = "Seleccionar",
    defaultValue = "",
    required = false,
    onChange
}: Props) {

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    return (
        <div className={style.formGroup}>
            <label htmlFor={id}>{label}</label>

            <select
                id={id}
                name={name}
                defaultValue={defaultValue}
                required={required}
                onChange={handleChange}
            >
                <option value="">{placeholder}</option>

                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}