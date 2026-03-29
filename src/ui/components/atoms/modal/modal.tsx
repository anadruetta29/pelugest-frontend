import style from "./style.module.css";

type Props = {
    children: React.ReactNode;
    onClose?: () => void;
};

export default function Modal({ children, onClose }: Props) {
    return (
        <div className={style.backdrop} onClick={onClose}>
            <div
                className={style.modal}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
  );
}
