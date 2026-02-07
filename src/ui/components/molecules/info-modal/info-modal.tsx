import style from "./style.module.css";

type Props = {
    title: string;
    children: React.ReactNode;
    onClose: () => void;
};

export default function InfoModal({
    title,
    children,
    onClose
}: Props) {
    return (
        <div className={style.overlay}>
        <div className={style.modal}>
            <header>
                <h3>{title}</h3>
                <button onClick={onClose}>✕</button>
            </header>

            <div className={style.content}>
                {children}
            </div>
        </div>
        </div>
    );
}
