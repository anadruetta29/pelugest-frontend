import type { Session } from "../../../entity/session";

export interface DeleteProductReq {
    id: string;
    session: Session;
}