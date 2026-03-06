import type { Appointment, AppointmentDetail, Client, Service, User } from "../../../../domain";
import DestructiveButton from "../../atoms/destructive-button/destructive-button";
import InputLabel from "../../atoms/input-label/input-label";
import MainButton from "../../atoms/main-button/main-button";
import SelectedServicesList from "../../atoms/selected-services-list/selected-services-list";
import style from "./style.module.css";

type Props = {
    appointment: Appointment;
    
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onCancel: () => void;

    clients: Client[];
    hairdressers: User[];

    services: Service[];
    onAddService: (serviceId: string) => void;

    selectedServiceIds: string[];
    onRemoveService: (serviceId: string) => void;

    details: AppointmentDetail[];
};

export function EditAppointmentForm({ appointment, onSubmit, onCancel, clients, hairdressers, onAddService, services, 
    selectedServiceIds, onRemoveService, details
 }: Props) {
    return (
        <div className={style.backdrop}>
            <form onSubmit={onSubmit} className={style.card}>
                <h2 className={style.title}>
                    Editar turno
                </h2>

                <div className={style.formGroup}>
                    <InputLabel
                        label="Hora de inicio: "
                        name="startDateTime"
                        id="startDateTime"
                        type="datetime-local"
                        placeholder="Hora de inicio"
                        defaultValue={appointment?.startDateTime ? new Date(appointment.startDateTime).toISOString().slice(0, 16) : ""}
                        required
                    />
                </div>

                <div className={style.formGroup}>
                    <InputLabel
                        label="Hora de fin (estimación): "
                        name="estimatedEndDateTime"
                        id="estimatedEndDateTime"
                        type="datetime-local"
                        placeholder="Hora de fin (estimación)"
                        defaultValue={appointment?.estimatedEndDateTime ? new Date(appointment.estimatedEndDateTime).toISOString().slice(0, 16) : ""}
                        required
                    />
                </div>
                
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
                    <label htmlFor="serviceId">Agregar servicio:</label>
                    <select
                        defaultValue=""
                        onChange={(e) => {
                            if (!e.target.value) return;
                            onAddService(e.target.value);
                            e.target.value = "";
                        }}
                    >
                        <option value="">Seleccionar servicio</option>
                        {services.map((service) => (
                            <option key={service.id} value={service.id}>
                                {service.name}
                            </option>
                        ))}
                    </select>
                </div>

                {selectedServiceIds.length > 0 && (
                    <SelectedServicesList
                        onRemoveService={onRemoveService}
                        selectedServiceIds={selectedServiceIds}
                        services={services}
                        details={details}
                    />
                )}

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