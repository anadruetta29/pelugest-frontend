import type { Session } from "../../../entity/session";

export interface DeleteStockProductReq {
    id: string;
    session: Session;
}