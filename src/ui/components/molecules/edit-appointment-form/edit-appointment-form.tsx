import type { Appointment, Client, Service, User } from "../../../../domain";
import DestructiveButton from "../../atoms/destructive-button/destructive-button";
import InputLabel from "../../atoms/input-label/input-label";
import MainButton from "../../atoms/main-button/main-button";
import style from "./style.module.css";

type Props = {
    appointment: Appointment;
    
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onCancel: () => void;

    clients: Client[];
    hairdressers: User[];

    services: Service[];
    onAddService: (serviceId: string) => void;
};

export function EditAppointmentForm({ appointment, onSubmit, onCancel, clients, hairdressers, onAddService, services }: Props) {
    return (
        <div className={style.backdrop}>
            <form onSubmit={onSubmit} className={style.card}>
                <h2 className={style.title}>
                    Editar turno
                </h2>

                <InputLabel
                    label="Hora de inicio: "
                    name="startDateTime"
                    id="startDateTime"
                    type="date"
                    placeholder="Hora de inicio"
                    defaultValue={appointment?.startDateTime.toDateString() || ""}
                    required
                />

                <InputLabel
                    label="Hora de fin (estimación): "
                    name="estimatedEndDateTime"
                    id="estimatedEndDateTime"
                    type="date"
                    placeholder="Hora de fin (estimación)"
                    defaultValue={appointment?.startDateTime.toDateString() || ""}
                    required
                />

                <div className={style.formGroup}>
                    <label htmlFor="clientId">Cliente:</label>
                    <select
                        id="clientId"
                        name="clientId"
                        defaultValue={appointment?.client?.id || ""}
                        required
                    >
                        <option value="">Seleccionar cliente</option>
                        {clients.map((client) => (
                        <option key={client.id} value={client.id}>
                            {client.name}
                        </option>
                        ))}
                    </select>
                </div>

                <div className={style.formGroup}>
                    <label htmlFor="hairdresserId">Peluquero:</label>
                    <select
                        id="hairdresserId"
                        name="hairdresserId"
                        defaultValue={appointment?.hairdresser?.id || ""}
                        required
                    >
                        <option value="">Seleccionar peluquero</option>
                        {hairdressers.map((hairdresser) => (
                        <option key={hairdresser.id} value={hairdresser.id}>
                            {hairdresser.name}
                        </option>
                        ))}
                    </select>
                </div>
                
                <div className={style.formGroup}>
                    <select
                        defaultValue=""
                        onChange={(e) => {
                            if (!e.target.value) return;
                            onAddService(e.target.value);
                            e.target.value = "";
                        }}
                    >
                        <option value="" disabled>
                            Seleccionar servicio
                        </option>

                        {services.map((service) => (
                            <option key={service.id} value={service.id}>
                            {service.name}
                            </option>
                        ))}
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
                        text="Guardar cambios"
                        type="submit"
                    />
                </div>
            </form>
        </div>
    );
}