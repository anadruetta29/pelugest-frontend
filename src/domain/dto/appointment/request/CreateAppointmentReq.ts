import type { AppointmentDetail } from '../../../entity/appointment-detail';
import { Session } from '../../../entity/session';

export interface CreateAppointmentReq {
    startDateTime: Date;
    estimatedEndDateTime: Date;
    clientId: string;
    hairdresserId: string;
    details: AppointmentDetail[];
    session: Session;
}
