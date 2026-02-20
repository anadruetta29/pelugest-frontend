import type { Session } from "../../../entity/session";

export interface FindStockProductByIdReq {
    id: string;
    session: Session;
}