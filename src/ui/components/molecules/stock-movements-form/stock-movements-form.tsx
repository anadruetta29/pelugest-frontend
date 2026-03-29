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
                    label="Cantidad"
                    name="quantityMl"
                    id="quantityMl"
                    type="number"
                    placeholder="Cantidad"
                    defaultValue={stockMovement?.quantityMl ?? 0}
                    required
                />

                <div className={style.formGroup}>
                    <label htmlFor="stockMovementType">Tipo de movimiento</label>
                    <select
                        id="type"
                        name="type"
                        defaultValue={stockMovement?.type ?? "IN"} 
                    >
                        <option value="IN">INGRESO</option>
                        <option value="OUT">EGRESO</option>
                        <option value="ADJUSTMENT">AJUSTE</option>
                    </select>
                </div>

                <div className={style.actions}>
                    <DestructiveButton
                        text="Cancelar"
                        type="button"
                        onClick={onCancel}
                    />
                    <MainButton
                        enabled
                        text={stockMovement ? "Guardar cambios" : "Crear movimiento"}
                        type="submit"
                    />
                </div>
            </form>
        </div>
    );
}