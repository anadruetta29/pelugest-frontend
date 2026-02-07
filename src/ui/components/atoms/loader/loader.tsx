import loadingGif from "../../../assets/gifs/loader.gif";
import style from "./style.module.css";

export default function Loader() {
    return (
        <div className={style.container}>
            <img
                src={loadingGif}
                alt="Cargando..."
                className={style.image}
            />
        </div>
    );
}
