import type { Service } from "../../../../domain";
import DestructiveButton from "../../atoms/destructive-button/destructive-button";
import InputLabel from "../../atoms/input-label/input-label";
import MainButton from "../../atoms/main-button/main-button";
import style from "./style.module.css";

type Props = {
    service: Service;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onCancel: () => void;
};

export function ServicesForm({ service, onSubmit, onCancel }: Props) {
    return (
        <div className={style.backdrop}>
            <form onSubmit={onSubmit} className={style.card}>
                <h2 className={style.title}>
                    {service ? "Editar servicio" : "Nuevo servicio"}
                </h2>

                <InputLabel
                    label="Nombre"
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Nombre"
                    defaultValue={service?.name || ""}
                    required
                />

                <InputLabel
                    label="Descripción"
                    name="description"
                    id="description"
                    type="text"
                    placeholder="Descripción"
                    defaultValue={service?.description || ""}
                    required
                />

                <InputLabel
                    label="Duración estimada (min)"
                    name="estimatedDuration"
                    id="estimatedDuration"
                    type="text"
                    placeholder="Duración estimada"
                    defaultValue={service?.estimatedDurationMin || ""}
                    required
                />
                
                <InputLabel
                    label="Precio base (ARS)"
                    name="basePrice"
                    id="basePrice"
                    type="text"
                    placeholder="Precio base"
                    defaultValue={service?.basePrice || ""}
                    required
                />

                {service && (
                    <div className={style.formGroup}>
                        <label htmlFor="status">Estado</label>
                        <select
                            id="status"
                            name="status"
                            defaultValue={service.status?.name}
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
                        text={service ? "Guardar cambios" : "Crear servicio"}
                        type="submit"
                    />
                </div>
            </form>
        </div>
    );
}