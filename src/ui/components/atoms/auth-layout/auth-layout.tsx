import LargeTitle from "../large-title/large-title";
import style from "./style.module.css";

type Props = {
  	children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
    return (
        <div className={style.layoutContainer}> {/* Nombre actualizado */}
          <div className={style.brand}>
            <LargeTitle text="PeluGest" />
          </div>
          <div className={style.formContainer}>
            {children}
          </div>
        </div>
    );
}
