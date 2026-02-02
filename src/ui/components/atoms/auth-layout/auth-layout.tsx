import logo from "../../../assets/LOGO.svg";
import style from "./style.module.css";

type Props = {
  	children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
    return (
        <div className={style.layoutContainer}> 
          <div className={style.brand}>
            <img src={logo} alt="logo" />
          </div>
          <div className={style.formContainer}>
            {children}
          </div>
        </div>
    );
}
