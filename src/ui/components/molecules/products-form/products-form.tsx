import type { Client, Product } from "../../../../domain";
import DestructiveButton from "../../atoms/destructive-button/destructive-button";
import InputLabel from "../../atoms/input-label/input-label";
import MainButton from "../../atoms/main-button/main-button";
import style from "./style.module.css";

type Props = {
    product: Product;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onCancel: () => void;
};

export function ProductsForm({ product, onSubmit, onCancel }: Props) {
    return (
        <div className={style.backdrop}>
            <form onSubmit={onSubmit} className={style.card}>
                <h2 className={style.title}>
                    {product ? "Editar producto" : "Nuevo producto"}
                </h2>

                <InputLabel
                    label="Nombre"
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Nombre"
                    defaultValue={product?.name || ""}
                    required
                />

                <InputLabel
                    label="Precio"
                    name="price"
                    id="price"
                    type="text"
                    placeholder="Precio"
                    defaultValue={product?.price || ""}
                    required
                />
                
                <div className={style.stock}>
                    <InputLabel
                        label="Cantidad actual"
                        name="currentAmountMl"
                        id="currentAmountMl"
                        type="text"
                        placeholder="Cantidad actual"
                        defaultValue={product?.stock?.currentAmountMl ?? 0}
                        required
                    />

                    <InputLabel
                        label="Stock mínimo"
                        name="minimumStockMl"
                        id="minimumStockMl"
                        type="text"
                        placeholder="Stock mínimo"
                        defaultValue={product?.stock?.minimumStockMl ?? 0}
                        required
                    />
                </div>
                

                {product && (
                    <div className={style.formGroup}>
                        <label htmlFor="status">Estado</label>
                        <select
                            id="status"
                            name="status"
                            defaultValue={product.status?.name}
                        >
                            <option value="ACTIVE">Activo</option>
                            <option value="INACTIVE">Inactivo</option>
                        </select>
                    </div>
                )}

                <div className={style.actions}>
                    <DestructiveButton
                        text="Cancelar"
                        type="button"
                        onClick={onCancel}
                    />
                    <MainButton
                        enabled
                        text={product ? "Guardar cambios" : "Crear producto"}
                        type="submit"
                    />
                </div>
            </form>
        </div>
    );
}