import type { Session } from "../../../entity/session";

export interface GetAllStockMovementsByUserReq {
    userId: string;
    session: Session;
}