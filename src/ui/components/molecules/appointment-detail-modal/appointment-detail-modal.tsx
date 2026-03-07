import type { Appointment, AppointmentDetail } from "../../../../domain";
import AppointmentStatusIndicator from "../../atoms/appointment-status-indicator/appointment-status-indicator";
import MediumTitle from "../../atoms/medium-title/medium-title";
import style from "./style.module.css";

type Props = {
    appointment: Appointment;
    details: AppointmentDetail[];  
    onClose: () => void;
    totalPrice: number;
};

export default function AppointmentDetailModal({ appointment, details, onClose, totalPrice }: Props) {
    return (
        <div className={style.overlay}>
            <div className={style.modal}>
                <MediumTitle text="Detalle del turno" />

                <p>
                    <strong>Cliente:</strong> {appointment.client.name}
                </p>

                <p>
                    <strong>Peluquero:</strong> {appointment.hairdresser.name}
                </p>

                <p>
                    <strong>Estado:</strong> 
                    <AppointmentStatusIndicator status={appointment.status} />
                </p>

                <p>
                    <strong>Servicios:</strong> 
                </p>
                <div className={style.servicesList}>
                    {details.length > 0 ? (
                        details.map(detail => (
                            <div key={detail.id} className={style.serviceItem}>
                                <span className={style.serviceName}>
                                    {detail.service.name}
                                </span>

                                <span className={style.servicePrice}>
                                    ${new Intl.NumberFormat("es-AR").format(detail.price)}
                                </span>
                            </div>
                        ))
                    ) : (
                        <p>No hay servicios disponibles.</p>
                    )}
                </div>
                <div className={style.total}>
                    <span>Total a pagar</span>
                    <strong>${new Intl.NumberFormat("es-AR").format(totalPrice)}</strong>
                </div>
                <button className={style.closeButton} onClick={onClose}>
                    Cerrar
                </button>
            </div>
        </div>
    );
}