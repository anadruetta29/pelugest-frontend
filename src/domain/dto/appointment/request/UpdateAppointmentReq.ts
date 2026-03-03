import type { RecordStatus } from "../../../entity/record-status";
import type { Session } from "../../../entity/session";

export interface UpdateAppointmentReq {
    id: string;
    startDateTime: Date;
    estimatedEndDateTime: Date;
    clientId: string;
    hairdresserId: string;
    session: Session;
}
