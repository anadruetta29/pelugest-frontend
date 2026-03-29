import type { AppointmentStatus } from "../../../entity/appointment-status";
import type { Session } from "../../../entity/session";

export interface SearchAppointmentReq {
    date?: Date;
    statusName?: string;
    clientId?: string;
    hairdresserId?: string;
    page?: number;
    limit?: number;
    session: Session;
}