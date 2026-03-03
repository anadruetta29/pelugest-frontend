import type { Session } from "../../../entity/session";

export interface FindAppointmentByIdReq {
    id: string;
    session: Session;
}