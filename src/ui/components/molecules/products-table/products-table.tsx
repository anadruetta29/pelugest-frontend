import { RecordStatus, type Product } from "../../../../domain";
import MainButton from "../../atoms/main-button/main-button";
import NoResults from "../../atoms/no-results/no-results";
import SecondaryButton from "../../atoms/secondary-button/secondary-button";
import StatusIndicator from "../../atoms/status-indicator/status-indicator";
import Table from "../../atoms/table/table";
import style from "./style.module.css";

type Props = {
    products: Product[] | undefined;
    onEditProduct: (product: Product) => void;
    onUpdateStockProduct: (product: Product) => void;
}

export default function ProductsTable({
    products,
    onEditProduct,
    onUpdateStockProduct

}: Props) {
    if (!products || products.length === 0) {
        return <NoResults message="No se encontraron productos" />;
    }

    return (
        <Table
            headers={[
                "Nombre",
                "Precio",
                "Cantidad actual",
                "Stock mínimo",
                "Estado",
                "Acciones",
            ]}
        >
            {products.map((product) => (
                <tr key={product.id}>
                    <td className={style.tableContent}>{product.name}</td>

                    <td className={style.tableContent}>
                        ${product.price}
                    </td>

                    <td className={style.tableContent}>
                        ${product.stock?.currentAmountMl ?? 0}
                    </td>

                    <td className={style.tableContent}>
                        ${product.stock?.minimumStockMl ?? 0}
                    </td>

                    <td className={style.tableContent}>
                        <StatusIndicator status={product.status} />
                    </td>

                    <td className={style.actions}>
                        <SecondaryButton
                            enabled
                            text="Modificar"
                            type="button"
                            modifier={style.actionButtons}
                            onClick={() => onEditProduct(product)}
                        />
                        <SecondaryButton
                            enabled
                            text="Actualizar stock"
                            type="button"
                            modifier={style.actionButtons}
                            onClick={() => onUpdateStockProduct(product)}
                        />
                    </td>

                </tr>
            ))}
        </Table>
    );
}
