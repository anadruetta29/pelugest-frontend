import type { Session } from "../../../entity/session";

export interface GetAllStockMovementsByProductReq {
    productId: string;
    session: Session;
}