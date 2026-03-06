import type { Session } from "../../../entity/session";

export interface UpdateAppointmentReq {
    id: string;
    startDateTime: Date;
    estimatedEndDateTime: Date;
    clientId: string;
    hairdresserId: string;
    details: any[];
    session: Session;
}
