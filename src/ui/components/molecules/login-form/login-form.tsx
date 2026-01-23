import { Link } from "react-router-dom";
import MainButton from "../../atoms/main-button/main-button";
import InputLabel from "../../atoms/input-label/input-label";
import MediumTitle from "../../atoms/medium-title/medium-title";
import AuthLayout from "../../atoms/auth-layout/auth-layout";
import style from "./style.module.css";

type Props = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function LoginForm({ onSubmit }: Props) {
    return (
        <AuthLayout>
            <form onSubmit={onSubmit} className={style.container}>
                <MediumTitle text="Iniciar sesión"/>
                <div className={style.inputDelimiter}>
                    <InputLabel id="email" placeholder="Email" required type="text" />
                </div>
                <div className={style.inputDelimiter}>
                    <InputLabel id="password" placeholder="Contraseña" required type="password" />
                </div>
                <div className={style.inputDelimiter}>
                    <MainButton onClick={() => {}} text="Iniciar sesión" type="submit" enabled={true}/>           
                </div>
                <div className={style.registerText}>
                    <p>¿Primera vez?</p>
                    <Link to="/register" aria-label="Crear una cuenta">Regístrate</Link>
                </div>
            </form>
        </AuthLayout>
    )
}