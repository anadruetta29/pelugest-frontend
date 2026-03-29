import type { Session } from "../../../entity/session";

export interface DeleteAppointmentReq {
    id: string;
    session: Session;
}