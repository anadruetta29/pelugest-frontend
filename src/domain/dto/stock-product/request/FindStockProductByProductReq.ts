import type { Session } from "../../../entity/session";

export interface FindStockProductByProductReq {
    productId: string;
    session: Session;
}