import type { RecordStatus } from "../../../entity/record-status";
import type { Session } from "../../../entity/session";

export interface UpdateClientReq {
    id: string;
    name: string;
    surname: string;
    mobilePhoneNumber: string;
    landlineNumber: string;
    status: RecordStatus;
    session: Session;
}
