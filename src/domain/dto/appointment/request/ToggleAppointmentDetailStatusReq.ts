import type { Session } from "../../../entity/session";

export interface ToggleAppointmentDetailStatusReq {
    appointmentDetailId: string;
    recordStatusId: string;
    session: Session;
}