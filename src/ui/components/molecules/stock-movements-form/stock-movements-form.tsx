import type { Client, Product, StockMovement } from "../../../../domain";
import DestructiveButton from "../../atoms/destructive-button/destructive-button";
import InputLabel from "../../atoms/input-label/input-label";
import MainButton from "../../atoms/main-button/main-button";
import style from "./style.module.css";

type Props = {
    stockMovement: StockMovement;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onCancel: () => void;
};

export function StockMovementsForm({ stockMovement, onSubmit, onCancel }: Props) {
    return (
        <div className={style.backdrop}>
            <form onSubmit={onSubmit} className={style.card}>
                <h2 className={style.title}>
                    {stockMovement ? "Editar movimiento de stock" : "Nuevo movimiento de stock"}
                </h2>

                <InputLabel
                    label="Producto"
                    name="product"
                    id="product"
                    type="text"
                    placeholder="Producto"
                    defaultValue={stockMovement?.product.name || ""}
                    required
                />

                <InputLabel
                    label="Tipo de movimiento"
                    name="type"
                    id="type"
                    type="text"
                    placeholder="Tipo de movimiento"
                    defaultValue={stockMovement?.type.name || ""}
                    required
                />
                
                <InputLabel
                    label="Cantidad"
                    name="quantityMl"
                    id="quantityMl"
                    type="text"
                    placeholder="Cantidad"
                    defaultValue={stockMovement?.quantityMl ?? 0}
                    required
                />

                <div className={style.actions}>
                    <DestructiveButton
                        text="Cancelar"
                        type="button"
                        onClick={onCancel}
                    />
                    <MainButton
                        enabled
                        text={stockMovement ? "Guardar cambios" : "Crear movimiento de stock"}
                        type="submit"
                    />
                </div>
            </form>
        </div>
    );
}