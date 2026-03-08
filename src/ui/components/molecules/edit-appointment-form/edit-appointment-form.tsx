import type { Appointment, AppointmentDetail, Client, Service, User } from "../../../../domain";
import DestructiveButton from "../../atoms/destructive-button/destructive-button";
import InputLabel from "../../atoms/input-label/input-label";
import MainButton from "../../atoms/main-button/main-button";
import SelectedServicesList from "../../atoms/selected-services-list/selected-services-list";
import Selector from "../../atoms/selector/selector";
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
                
                <Selector
                    label="Cliente:"
                    name="clientId"
                    id="clientId"
                    required
                    defaultValue={appointment?.client?.id}
                    placeholder="Seleccionar cliente"
                    options={clients.map(client => ({
                        value: client.id,
                        label: client.name
                    }))}
                />

                <Selector
                    label="Peluquero:"
                    name="hairdresserId"
                    id="hairdresserId"
                    required
                    defaultValue={appointment?.hairdresser?.id}
                    placeholder="Seleccionar peluquero"
                    options={hairdressers.map(h => ({
                        value: h.id,
                        label: h.name
                    }))}
                />
                
                <Selector
                    label="Agregar servicio:"
                    placeholder="Seleccionar servicio"
                    options={services.map(service => ({
                        value: service.id,
                        label: service.name
                    }))}
                    onChange={(value) => {
                        if (!value) return;
                        onAddService(value);
                    }}
                />

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