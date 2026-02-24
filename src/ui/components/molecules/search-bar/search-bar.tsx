import searchIcon from "../../../assets/icons/search.svg";
import InputLabel from "../../atoms/input-label/input-label";
import MainButton from "../../atoms/main-button/main-button";
import style from "./style.module.css";

type Props = {
    value: string;
    onChange: (value: string) => void;
    onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function SearchBar({
    value,
    onChange,
    onSearch,
}: Props) {
    return (
        <form className={style.container} onSubmit={onSearch}>
            <div className={style.inputWrapper}>
                <img
                    src={searchIcon}
                    alt="Buscar"
                    className={style.leadingIcon}
                />

                <InputLabel
                    id="name"
                    name="name"
                    placeholder="Ingrese el nombre del cliente"
                    type="text"
                    value={value}
                    onChange={onChange}
                />
            </div>

            <div className={style.buttonContainer}>
                <MainButton
                    enabled
                    text="Buscar"
                    type="submit"
                    modifier={style.searchButton}
                />
            </div>
        </form>
    );
}