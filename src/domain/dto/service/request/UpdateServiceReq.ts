import type { RecordStatus } from "../../../entity/record-status";
import type { Session } from "../../../entity/session";

export interface UpdateServiceReq {
    id: string;
    name: string;
    description: string;
    estimatedDurationMin: number;
    basePrice: number;
    status: RecordStatus;
    session: Session;
}
