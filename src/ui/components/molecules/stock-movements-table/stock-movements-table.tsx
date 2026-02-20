import { RecordStatus, StockMovement, type Product } from "../../../../domain";
import MainButton from "../../atoms/main-button/main-button";
import NoResults from "../../atoms/no-results/no-results";
import SecondaryButton from "../../atoms/secondary-button/secondary-button";
import StatusIndicator from "../../atoms/status-indicator/status-indicator";
import Table from "../../atoms/table/table";
import style from "./style.module.css";

type Props = {
    stockMovements: StockMovement[] | undefined;
    onEditStockMovement: (stockMovement: StockMovement) => void;
}

export default function StockMovementsTable({
    stockMovements,
    onEditStockMovement,

}: Props) {
    if (!stockMovements || stockMovements.length === 0) {
        return <NoResults message="No se encontraron movimientos de stock" />;
    }

    return (
        <Table
            headers={[
                "Producto",
                "Tipo de movimiento",
                "Cantidad",
                "Profesional",
                "Fecha",
                "Acciones",
            ]}
        >
            {stockMovements.map((stockMovement) => (
                <tr key={stockMovement.id}>
                    <td className={style.tableContent}>{stockMovement.product.name}</td>

                    <td className={style.tableContent}>
                        {stockMovement.type.name}
                    </td>

                    <td className={style.tableContent}>
                        {stockMovement.quantityMl ?? 0}
                    </td>

                    <td className={style.tableContent}>
                        {stockMovement.user.name}
                    </td>
                    
                    <td className={style.tableContent}>
                        {stockMovement.createdAt.getDate()}
                    </td>

                    <td className={style.actions}>
                        <SecondaryButton
                            enabled
                            text="Modificar"
                            type="button"
                            modifier={style.actionButtons}
                            onClick={() => onEditStockMovement(stockMovement)}
                        />
                    </td>

                </tr>
            ))}
        </Table>
    );
}
