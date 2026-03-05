import type { Session } from "../../../entity/session";

export interface FindDetailsByAppointmentIdReq {
    appointmentId: string;
    session: Session;
}