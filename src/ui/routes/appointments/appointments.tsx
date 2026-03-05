import Loader from "../../components/atoms/loader/loader";
import AppointmentsPage from "../../components/organisms/appointments-page/appointments-page";
import Layout from "../../layout/layout";
import ViewModel from "./viewmodel";

export default function AppointmentsRoute() {
    const {
        isLoading,
        appointments,

        isNewOpen,
        editingAppointment,

        onNewAppointment,
        onOpenEditAppointment,
        onCloseForm,

        onCreateAppointment,
        onUpdateAppointment,
        onAddService,

        onAttendAppointment,
        onCancelAppointment,
        onMissAppointment,
        onStartAppointment,

        onViewDetail,
        selectedAppointment,
        onCloseDetail,
        selectedAppointmentDetails,
        
        clients,
        hairdressers,
        services,

        onRemoveService,
        selectedServiceIds
    } = ViewModel();

    if (isLoading) {
        return (
            <Layout withSidebar>
                <Loader />
            </Layout>
        );
    }

    return (
        <Layout withSidebar>
            <AppointmentsPage 
                appointments={appointments}
                onNewAppointment={onNewAppointment}
                onAttendAppointment={onAttendAppointment}
                onCancelAppointment={onCancelAppointment}
                onMissAppointment={onMissAppointment}
                onStartAppointment={onStartAppointment}
                clients={clients}
                editingAppointment={editingAppointment}
                hairdressers={hairdressers}
                isNewOpen={isNewOpen}
                onAddService={onAddService}
                onCloseForm={onCloseForm}
                onCreateAppointment={onCreateAppointment}
                onOpenEditAppointment={onOpenEditAppointment}
                services={services}
                onUpdateAppointment={onUpdateAppointment}
                onRemoveService={onRemoveService}
                selectedServiceIds={selectedServiceIds}
                onViewDetail={onViewDetail}
                selectedAppointment={selectedAppointment}
                onCloseDetail={onCloseDetail}
                selectedAppointmentDetails={selectedAppointmentDetails}
            />
        </Layout>
    );
}