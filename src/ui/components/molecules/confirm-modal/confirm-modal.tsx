import Modal from "../../atoms/modal/modal";
import MainButton from "../../atoms/main-button/main-button";
import SecondaryButton from "../../atoms/secondary-button/secondary-button";
import style from "./style.module.css";

type Props = {
    title: string;
    description: string;
    confirmText?: string;
    cancelText?: string;
    destructive?: boolean;
    onConfirm: () => void;
    onCancel: () => void;
};

export default function ConfirmModal({
    title,
    description,
    confirmText,
    cancelText,
    destructive,
    onConfirm,
    onCancel,
}: Props) {
    return (
        <Modal onClose={onCancel}>
        <div className={style.container}>
            <h3 className={style.title}>{title}</h3>
            <p className={style.description}>{description}</p>
            <div className={style.actions}>
            <SecondaryButton
                text={cancelText}
                type="button"
                enabled
                onClick={onCancel}
            />
            <MainButton
                text={confirmText}
                type="button"
                enabled
                modifier={destructive ? style.destructive : ""}
                onClick={onConfirm}
            />
            </div>
        </div>
        </Modal>
    );
    }

