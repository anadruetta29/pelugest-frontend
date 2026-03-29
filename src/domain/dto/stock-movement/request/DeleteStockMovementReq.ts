import type { Session } from "../../../entity/session";

export interface DeleteStockMovementReq {
    id: string;
    session: Session;
}