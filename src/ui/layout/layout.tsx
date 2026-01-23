import Sidebar from "../components/organisms/side-bar/side-bar";
import style from "./style.module.css";

type Props = {
    children: React.ReactNode;
    withSidebar?: boolean;
};

export default function Layout({
    children,
    withSidebar,
}: Props) {
    return (
        <div className={style.container}>

        <div className={style.body}>
            {withSidebar && <Sidebar />}

            <main className={style.main}>
            {children}
            </main>

        </div>
        </div>
    );
}
