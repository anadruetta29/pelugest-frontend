import type { Appointment } from "../../../../domain";
import NoResults from "../../atoms/no-results/no-results";
import AppointmentCard from "../../molecules/appointment-card/appointment-card";
import style from "./style.module.css";

type Props = {
    appointments: Appointment[];

    onEdit?: (appointment: Appointment) => void;

    onStart?: (id: string) => void;
    onAttend?: (id: string) => void;
    onMiss?: (id: string) => void;
    onCancel?: (id: string) => void;
    onViewDetail?: (id: string) => void;
};

export default function AppointmentsList({
  appointments,
  onStart,
  onAttend,
  onMiss,
  onCancel,
  onViewDetail,
  onEdit
}: Props) {

    if (!appointments || appointments.length === 0) {
        return (
        <NoResults message="No hay turnos disponibles." />
        );
    }

    return (
        <div className={style.container}>
            {appointments.map((appointment, index) => (
                <AppointmentCard
                    key={appointment.id}
                    appointment={appointment}
                    appointmentNumber={index + 1}
                    onStart={onStart}
                    onAttend={onAttend}
                    onMiss={onMiss}
                    onCancel={onCancel}
                    onViewDetail={onViewDetail}
                    onEditAppointment={() => onEdit?.(appointment)}
                />
            ))}
        </div>
    );
}