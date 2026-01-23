import style from "./style.module.css";

type Props = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
        <div className={style.container}>
            <div className={style.brand}>
                {/* icon */}
            </div>

            <div className={style.formContainer}>
                {children}
            </div>
        </div>
  );
}
