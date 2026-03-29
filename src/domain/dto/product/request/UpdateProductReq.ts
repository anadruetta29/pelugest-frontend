import type { RecordStatus } from "../../../entity/record-status";
import type { Session } from "../../../entity/session";

export interface UpdateProductReq {
    id: string;
    name: string;
    price: number;
    status: RecordStatus;
    session: Session;
}
