import type { Session } from "../../../entity/session";

export interface ChangeAppointmentStatusReq {
    id: string;
    action: "start" | "attend" | "miss" | "cancel";
    session: Session;
}