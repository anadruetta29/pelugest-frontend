import type { Appointment, AppointmentDetail, Client, Service, User } from "../../../../domain";
import MainButton from "../../atoms/main-button/main-button";
import { EditAppointmentForm } from "../../molecules/edit-appointment-form/edit-appointment-form";
import { NewAppointmentForm } from "../../molecules/new-appointment-form/new-appointment-form";
import AppointmentsList from "../appointments-list/appointments-list";
import style from "./style.module.css";

type Props = {
    appointments: Appointment[];

    isNewOpen: boolean;
    editingAppointment: Appointment | null;

    clients: Client[];
    hairdressers: User[];
    services: Service[];

    onNewAppointment: () => void;
    onCloseForm: () => void;

    onCreateAppointment: (e: React.FormEvent<HTMLFormElement>) => void;

    onUpdateAppointment: (e: React.FormEvent<HTMLFormElement>) => void;
    onOpenEditAppointment: (appointment: Appointment) => void;

    onAddService: (serviceId: string) => void;

    onAttendAppointment?: (id: string) => void;
    onCancelAppointment?: (id: string) => void;
    onMissAppointment?: (id: string) => void;
    onStartAppointment?: (id: string) => void;

    onViewDetail?: (id: string) => void;
    selectedAppointment: Appointment | null;
    onCloseDetail: () => void;
    selectedAppointmentDetails: AppointmentDetail[];

    selectedServiceIds: string[];
    onRemoveService: (serviceId: string) => void;
};

export default function AppointmentsPage({
    appointments,
    isNewOpen,
    editingAppointment,
    clients,
    hairdressers,
    services,
    onNewAppointment,
    onCloseForm,
    onCreateAppointment,
    onOpenEditAppointment,
    onUpdateAppointment,
    onAddService,
    onAttendAppointment,
    onCancelAppointment,
    onMissAppointment,
    onStartAppointment,
    onViewDetail,
    onRemoveService,
    selectedServiceIds,
    onCloseDetail,
    selectedAppointment,
    selectedAppointmentDetails
}: Props) {
    return (
        <div className={style.container}>
            
            <div className={style.header}>
                <MainButton
                    enabled
                    text="Nuevo turno"
                    type="button"
                    onClick={onNewAppointment}
                    iconAlt="Nuevo turno"
                    iconPosition="left"
                    modifier={style.newAppointmentButton}
                />
            </div>

            <div className={style.list}>
                <AppointmentsList 
                    appointments={appointments}
                    onAttend={onAttendAppointment}
                    onCancel={onCancelAppointment}
                    onMiss={onMissAppointment}
                    onStart={onStartAppointment}
                    onViewDetail={onViewDetail}
                    onEdit={onOpenEditAppointment}
                    selectedAppointment={selectedAppointment}
                    onCloseDetail={onCloseDetail}
                    selectedAppointmentDetails={selectedAppointmentDetails}
                />
            </div>

            {isNewOpen &&  clients?.length > 0 && 
                hairdressers?.length > 0 && 
                services?.length > 0 && (
                    <NewAppointmentForm
                        onSubmit={onCreateAppointment}
                        onCancel={onCloseForm}
                        clients={clients}
                        hairdressers={hairdressers}
                        services={services}
                        onAddService={onAddService}
                        onRemoveService={onRemoveService}
                        selectedServiceIds={selectedServiceIds}
                    />
            )}

            {editingAppointment && clients?.length > 0 && 
                hairdressers?.length > 0 && 
                services?.length > 0 && (
                    <EditAppointmentForm
                        appointment={editingAppointment}
                        onSubmit={onUpdateAppointment}
                        onCancel={onCloseForm}
                        clients={clients}
                        hairdressers={hairdressers}
                        services={services}
                        onAddService={onAddService}
                        onRemoveService={onRemoveService}
                        selectedServiceIds={selectedServiceIds}
                    />
            )}
        </div>
    );
}