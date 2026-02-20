import type { Session } from "../../../entity/session";

export interface FindStockMovementByIdReq {
    id: string;
    session: Session;
}