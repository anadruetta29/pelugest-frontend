import { useEffect, useState } from "react";
import { useRepositories } from "../../../core";
import useSession from "../../hooks/useSession";
import { AppointmentDetail, Client, Errors, Service, User, type Appointment, type CreateAppointmentReq, 
    type FindRecordStatusByNameReq, type GetAllAppointmentsReq, type UpdateAppointmentReq} from "../../../domain";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function ViewModel() {

    const navigate = useNavigate();

    const { session, logged } = useSession();
    const { appointmentRepository, clientRepository, serviceRepository, userRepository, recordStatusRepository } = useRepositories();

    const [isLoading, setIsLoading] = useState(true);
    const [appointments, setAppointments] = useState<Appointment[]>([]);

    const [isNewOpen, setIsNewOpen] = useState(false);
    const [editingAppointment, setEditingAppointment] = useState<Appointment | null>(null);

    const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([]);

    const [clients, setClients] = useState<Client[]>([]);
    const [hairdressers, setHairdressers] = useState<User[]>([]);
    const [services, setServices] = useState<Service[]>([]);

    useEffect(() => {
        if (logged && session) {
            fetchClients();
            fetchHairdressers();
            fetchServices();
            fetchAppointments();
        }
    }, [logged, session]);

    /* ==============================
       GET ALL APPOINTMENTS
    ============================== */
    const fetchAppointments = async () => {
        if (!session) return;
        setIsLoading(true);
        try {
            const response = await appointmentRepository.getAll({
                session,
            } as GetAllAppointmentsReq);
            setAppointments(response.appointments);
        } 
        catch (error) {
            toast.error(error instanceof Error ? error.message : Errors.UNKNOWN_ERROR);
        } 
        finally {
            setIsLoading(false);
        }
    };

    /* ==============================
       CREATE APPOINTMENT
    ============================== */
    const onCreateAppointment = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!session) return;

        const formData = new FormData(e.currentTarget);
        const startDateTimeString = formData.get("startDateTime") as string;
        const startDateTime = new Date(startDateTimeString);

        const estimatedEndDateTime = calculateEstimatedEndTime(startDateTime, selectedServiceIds);

        const appointmentDetails = services
            .filter(s => selectedServiceIds.includes(s.id))
            .map(service => ({
                serviceId: service.id,
                price: Number(service.basePrice),
                durationMin: service.estimatedDurationMin
            }));

        try {
            await appointmentRepository.create({
                session,
                startDateTime,
                estimatedEndDateTime,
                clientId: formData.get("clientId") as string,
                hairdresserId: formData.get("hairdresserId") as string,
                details: appointmentDetails
            } as CreateAppointmentReq);

            toast.success("Turno creado correctamente");
            onCloseForm();
            fetchAppointments();
        } 
        catch (error) {
            toast.error(error instanceof Error ? error.message : Errors.UNKNOWN_ERROR);
        }
    };

    /* ==============================
       UPDATE APPOINTMENT
    ============================== */
    const onUpdateAppointment = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!session || !editingAppointment) return;

        const formData = new FormData(e.currentTarget);
        const startDateTime = new Date(formData.get("startDateTime") as string);

        const estimatedEndDateTime = calculateEstimatedEndTime(startDateTime, selectedServiceIds);

        const appointmentDetails: AppointmentDetail[] = services
            .filter(s => selectedServiceIds.includes(s.id))
            .map(service =>
                AppointmentDetail.fromObject({
                    id: crypto.randomUUID(),
                    service,
                    price: service.basePrice,
                    durationMin: service.estimatedDurationMin
                })
            );

        try {
            await appointmentRepository.update({
                session,
                id: editingAppointment.id,
                startDateTime,
                estimatedEndDateTime,
                clientId: formData.get("clientId") as string,
                hairdresserId: formData.get("hairdresserId") as string,
                details: appointmentDetails
            } as UpdateAppointmentReq);

            toast.success("Turno actualizado");
            onCloseForm();
            fetchAppointments();
        } catch (error) {
            toast.error(error instanceof Error ? error.message : Errors.UNKNOWN_ERROR);
        }
    };

    /* ==============================
       SERVICE MANAGEMENT
    ============================== */
    const onAddService = (serviceId: string) => {
        setSelectedServiceIds(prev => (prev.includes(serviceId) ? prev : [...prev, serviceId]));
    };

    const onRemoveService = (serviceId: string) => {
        setSelectedServiceIds(prev => prev.filter(id => id !== serviceId));
    };

    /* ==============================
       FORM CONTROL
    ============================== */
    const onNewAppointment = () => {
        setSelectedServiceIds([]);
        setEditingAppointment(null);
        setIsNewOpen(true);
    };

    const onOpenEditAppointment = (appointment: Appointment) => {
        setSelectedServiceIds(appointment.details?.map(d => d.service.id) || []);
        setIsNewOpen(false);
        setEditingAppointment(appointment);
    };

    const onCloseForm = () => {
        setIsNewOpen(false);
        setEditingAppointment(null);
        setSelectedServiceIds([]);
    };

    /* ==============================
       CALCULATE ESTIMATED END TIME
    ============================== */
    const calculateEstimatedEndTime = (startDateTime: Date, serviceIds: string[]): Date => {
        if (!serviceIds.length) return startDateTime;
        const totalDuration = services
            .filter(s => serviceIds.includes(s.id))
            .reduce((acc, s) => acc + s.estimatedDurationMin, 0);
        const endDateTime = new Date(startDateTime);
        endDateTime.setMinutes(endDateTime.getMinutes() + totalDuration);
        return endDateTime;
    };

    /* ==============================
       FETCH CLIENTS, HAIRDRESSERS, SERVICES
    ============================== */
    const fetchClients = async () => {
        try {
            const status = await recordStatusRepository.findByName({ name: "ACTIVE", session } as FindRecordStatusByNameReq);
            const response = await clientRepository.getAllByStatus({ session, statusId: status.recordStatus.id });
            setClients(response.clients);
        } catch (error) {
            toast.error(error instanceof Error ? error.message : Errors.UNKNOWN_ERROR);
        }
    };

    const fetchHairdressers = async () => {
        try {
            const response = await userRepository.getAllByRoleName({ session, roleName: "HAIRDRESSER" });
            setHairdressers(response.users);
        } catch (error) {
            toast.error(error instanceof Error ? error.message : Errors.UNKNOWN_ERROR);
        }
    };

    const fetchServices = async () => {
        try {
            const status = await recordStatusRepository.findByName({ name: "ACTIVE", session } as FindRecordStatusByNameReq);
            const response = await serviceRepository.getAllByStatus({ session, statusId: status.recordStatus.id });
            setServices(response.services);
        } catch (error) {
            toast.error(error instanceof Error ? error.message : Errors.UNKNOWN_ERROR);
        }
    };

    /* ==============================
       PLACEHOLDER ACTIONS
    ============================== */
    const onStartAppointment = async (id: string) => {
        try {
            await appointmentRepository.changeAppointmentStatus({
                id,
                action: "start",
                session
            });

            await fetchAppointments(); 
        } catch (error) {
            console.error(error);
        }
    };

    const onAttendAppointment = async (id: string) => {
        try {
            await appointmentRepository.changeAppointmentStatus({
                id,
                action: "attend",
                session
            });

            await fetchAppointments();
        } catch (error) {
            console.error(error);
        }
    };

    const onMissAppointment = async (id: string) => {
        try {
            await appointmentRepository.changeAppointmentStatus({
                id,
                action: "miss",
                session
            });

            await fetchAppointments();
        } catch (error) {
            console.error(error);
        }
    };

    const onCancelAppointment = async (id: string) => {
        try {
            await appointmentRepository.changeAppointmentStatus({
                id,
                action: "cancel",
                session
            });

            await fetchAppointments();
        } catch (error) {
            console.error(error);
        }
    };

    const onViewDetail = (id: string) => {
        navigate(`/appointments/${id}`);
    };

    return {
        isLoading,
        appointments,
        isNewOpen,
        editingAppointment,
        clients,
        hairdressers,
        services,
        selectedServiceIds,

        onNewAppointment,
        onOpenEditAppointment,
        onCloseForm,
        onCreateAppointment,
        onUpdateAppointment,
        onAddService,
        onRemoveService,
        onAttendAppointment,
        onCancelAppointment,
        onMissAppointment,
        onStartAppointment,
        onViewDetail
    };
}