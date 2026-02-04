import type { Client } from "../../../../domain";
import DestructiveButton from "../../atoms/destructive-button/destructive-button";
import InputLabel from "../../atoms/input-label/input-label";
import MainButton from "../../atoms/main-button/main-button";
import style from "./style.module.css";

type Props = {
    client?: Client;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onCancel: () => void;
};

export function ClientForm({ client, onSubmit, onCancel }: Props) {
    return (
        <div className={style.backdrop}>
            <form onSubmit={onSubmit} className={style.card}>
                <h2 className={style.title}>
                    {client ? "Editar cliente" : "Nuevo cliente"}
                </h2>

                <InputLabel
                    label="Nombre"
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Nombre"
                    required
                />

                <InputLabel
                    label="Apellido"
                    name="surname"
                    id="surname"
                    type="text"
                    placeholder="Apellido"
                    required
                />

                <InputLabel
                    label="Teléfono móvil"
                    name="mobilePhoneNumber"
                    id="mobilePhoneNumber"
                    type="text"
                    placeholder="Ej: 3511234567"
                    required
                />

                <InputLabel
                    label="Teléfono fijo"
                    name="landlinePhoneNumber"
                    id="landlinePhoneNumber"
                    type="text"
                    placeholder="Opcional"
                />

                {client && (
                    <div className={style.formGroup}>
                        <label htmlFor="status">Estado</label>
                        <select
                            id="status"
                            name="status"
                            defaultValue={client.status?.name}
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
                        text={client ? "Guardar cambios" : "Crear cliente"}
                        type="submit"
                    />
                </div>
            </form>
        </div>
    );
}