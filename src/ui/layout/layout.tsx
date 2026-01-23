import Header from "../components/organisms/header/header";
import Sidebar from "../components/organisms/side-bar/side-bar";
import style from "./style.module.css";

type Props = {
    children: React.ReactNode;
    withHeader?: boolean;
    withSidebar?: boolean;
};

export default function Layout({
    children,
    withHeader,
    withSidebar,
}: Props) {
    return (
        <div className={style.container}>
        {withHeader && <Header />}

        <div className={style.body}>
            {withSidebar && <Sidebar />}

            <main className={style.main}>
            {children}
            </main>

        </div>
        </div>
    );
}
