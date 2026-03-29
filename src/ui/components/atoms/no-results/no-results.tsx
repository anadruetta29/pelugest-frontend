import noResults from "../../../assets/icons/no-results.svg";
import style from "./style.module.css";

type Props = {
    message: string
}

export default function NoResults( { message }: Props) {
    return(
        <div className={style.container}>
            <img src={noResults} alt="No results" />
            <p>{message}</p>
        </div>
    )
}