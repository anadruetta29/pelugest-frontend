import type { Appointment, Client, Service, User } from "../../../../domain";
import DestructiveButton from "../../atoms/destructive-button/destructive-button";
import InputLabel from "../../atoms/input-label/input-label";
import MainButton from "../../atoms/main-button/main-button";
import style from "./style.module.css";

type Props = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onCancel: () => void;

    clients: Client[];
    hairdressers: User[];

    services: Service[];
    onAddService: (serviceId: string) => void;
};

export function NewAppointmentForm({ onSubmit, onCancel, clients, hairdressers, onAddService, services }: Props) {
    return (
        <div className={style.backdrop}>
            <form onSubmit={onSubmit} className={style.card}>
                <h2 className={style.title}>
                    Nuevo turno
                </h2>

                <div className={style.formGroup}>
                    <InputLabel
                    label="Hora de inicio: "
                    name="startDateTime"
                    id="startDateTime"
                    type="datetime-local"
                    placeholder="Hora de inicio"
                    required
                />
                </div>
                
                <div className={style.formGroup}>
                    <label htmlFor="clientId">Cliente:</label>
                    <select
                        id="clientId"
                        name="clientId"
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
                        required
                    >
                        <option value="">Seleccionar peluquero: </option>
                        {hairdressers.map((hairdresser) => (
                        <option key={hairdresser.id} value={hairdresser.id}>
                            {hairdresser.name}
                        </option>
                        ))}
                    </select>
                </div>
                
                <div className={style.formGroup}>
                    <label htmlFor="serviceId">Servicio:</label>
                    <select
                        defaultValue=""
                        onChange={(e) => {
                            if (!e.target.value) return;
                            onAddService(e.target.value);
                            e.target.value = "";
                        }}
                    >
                        <option value="">Seleccionar servicio: </option>

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
                        text="Crear turno"
                        type="submit"
                    />
                </div>
            </form>
        </div>
    );
}