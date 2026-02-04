import style from "./style.module.css";

type Props = {
    headers: string[];
    children: React.ReactNode;
};

export default function Table({ headers, children }: Props) {
    return (
        <table className={style.table}>
            <thead>
                <tr>
                {headers.map((header) => (
                    <th key={header} className={style.tableHeader}>
                    {header}
                    </th>
                ))}
                </tr>
            </thead>
            <tbody>{children}</tbody>
        </table>
    );
}
