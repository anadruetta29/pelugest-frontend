import type { AppointmentDetail } from '../../../entity/appointment-detail';
import { Session } from '../../../entity/session';

export interface CreateAppointmentReq {
    startDateTime: Date;
    estimatedEndDateTime: Date;
    clientId: string;
    hairdresserId: string;
    details: { serviceId: string; price: number; durationMin: number;}[]
    session: Session;
}
