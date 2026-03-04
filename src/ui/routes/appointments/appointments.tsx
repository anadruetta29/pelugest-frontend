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
        onEditAppointment,
        onCloseForm,

        onCreateAppointment,
        onUpdateAppointment,
        onAddService,

        onAttendAppointment,
        onCancelAppointment,
        onMissAppointment,
        onStartAppointment,
        onViewDetail
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
                onViewDetail={onViewDetail}
                clients={clients}
                editingAppointment={editingAppointment}
                hairdressers={hairdressers}
                isNewOpen={isNewOpen}
                onAddService={onAddService}
                onCloseForm={onCloseForm}
                onCreateAppointment={onCreateAppointment}
                onEditAppointment={onEditAppointment}
                services={services}
            />
        </Layout>
    );
}