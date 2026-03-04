import { useEffect, useState } from "react";
import { useRepositories } from "../../../core";
import useSession from "../../hooks/useSession";
import { AppointmentDetail, Errors, type Appointment, type CreateAppointmentReq, type GetAllAppointmentsReq, type UpdateAppointmentReq } from "../../../domain";
import toast from "react-hot-toast";

export default function ViewModel() {

    const { session, logged } = useSession();
    const { appointmentRepository, clientRepository, serviceRepository,  } = useRepositories();
    
    const [isLoading, setIsLoading] = useState(true);
    
    const [appointments, setAppointments] = useState<Appointment[]>([]);

    const [isNewOpen, setIsNewOpen] = useState(false);
    const [editingAppointment, setEditingAppointment] = useState<Appointment | null>(null);

    const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([]);

    const [details, setDetails] = useState<AppointmentDetail[]>([]);


    useEffect(() => {
        if (logged && session) {
            fetchAppointments();
        }
    }, [logged, session]);

    /* ==============================
       FEATURE: GET ALL APPOINTMENTS
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
       FEATURE: CREATE APPOINTMENT
    ============================== */

    const onCreateAppointment = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!session) return;

        const formData = new FormData(e.currentTarget);

        const startDateTimeString = formData.get("startDateTime") as string;
        const startDateTime = new Date(startDateTimeString);

        const estimatedEndDateTime = calculateEstimatedEndTime(
            startDateTime,
            selectedServiceIds
        );

        try {
            await appointmentRepository.create({
                session,
                startDateTime,
                estimatedEndDateTime,
                clientId: formData.get("clientId") as string,
                hairdresserId: formData.get("hairdresserId") as string,
                details: details
            } as CreateAppointmentReq);

            toast.success("Turno creado correctamente");
            onCloseForm();
            fetchAppointments();

        } catch (error) {
            toast.error(error instanceof Error ? error.message : Errors.UNKNOWN_ERROR);
        }
    };

    /* ==============================
       FEATURE: UPDATE APPOINTMENT
    ============================== */

    const onUpdateAppointment = async (e: React.FormEvent<HTMLFormElement>) => {
         e.preventDefault();
    if (!session || !editingAppointment) return;

    const formData = new FormData(e.currentTarget);

    const startDateTimeString = formData.get("startDateTime") as string;
    const startDateTime = new Date(startDateTimeString);

    const estimatedEndDateTime = new Date(
        calculateEstimatedEndTime(startDateTimeString, selectedServiceIds)
    );

    try {
        await appointmentRepository.update({
            session,
            id: editingAppointment.id,
            startDateTime,
            estimatedEndDateTime,
            clientId: formData.get("clientId") as string,
            hairdresserId: formData.get("hairdresserId") as string,
            details: details
        } as UpdateAppointmentReq);

        toast.success("Turno actualizado");
        onCloseForm();
        fetchAppointments();
    } 
    catch (error) {
        toast.error(error instanceof Error ? error.message : Errors.UNKNOWN_ERROR);
    }
    };

    /* ==============================
       SERVICE MANAGEMENT
    ============================== */

    const onAddService = (serviceId: string) => {
        setSelectedServiceIds(prev =>
            prev.includes(serviceId) ? prev : [...prev, serviceId]
        );
    };
    

    /* ==============================
       FORM CONTROL
    ============================== */

    const onNewAppointment = () => {
        setSelectedServiceIds([]);
        setEditingAppointment(null);
        setIsNewOpen(true);
    };

    const onEditAppointment = (appointment: Appointment) => {
        setSelectedServiceIds(appointment.details.map(d => d.service.id) || []);
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

    const calculateEstimatedEndTime = (
        startDateTime: Date,
        selectedServiceIds: string[]
    ): Date => {

        const totalDuration = services
            .filter(service => selectedServiceIds.includes(service.id))
            .reduce((acc, service) => acc + service.durationMin, 0);

        return new Date(startDateTime.getTime() + totalDuration * 60000);
    };

    /* ==============================
       GET CLIENTS, USERS AND SERVICES LISTS 
    ============================== */

    const fetchClients = async () => {
        try {
            response = await clients
        }
    }

    /* ==============================
       PLACEHOLDER ACTIONS
    ============================== */

    const onAttendAppointment = (id: string) => {};
    const onCancelAppointment = (id: string) => {};
    const onMissAppointment = (id: string) => {};
    const onStartAppointment = (id: string) => {};
    const onViewDetail = (id: string) => {};

    return {
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
    };
}