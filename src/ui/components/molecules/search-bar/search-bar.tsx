import searchIcon from "../../../assets/icons/search.svg"; 
import InputLabel from "../../atoms/input-label/input-label";
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
            <InputLabel
                id="search"
                name="search"
                placeholder="Ingrese el nombre del cliente"
                type="text"
                value={value}
                onChange={onChange}
            />

            <button type="submit" className={style.searchButton}>
                <img src={searchIcon} alt="Buscar" />
            </button>
        </form>
    );
}