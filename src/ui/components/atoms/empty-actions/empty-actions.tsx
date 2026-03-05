import style from "./style.module.css";

type Props = {
    message: string;
};

export default function EmptyActions({ message }: Props) {
    return (
        <div className={style.container}>
            <span className={style.message}>{message}</span>
        </div>
    );
}