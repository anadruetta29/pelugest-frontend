import type { Session } from "../../../entity/session";

export interface UpdateStockProductReq {
    id: string;
    currentAmountMl: number;
    minimumStockMl: number;
    productId: string;
    session: Session;
}
