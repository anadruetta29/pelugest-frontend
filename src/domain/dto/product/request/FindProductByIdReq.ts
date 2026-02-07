import type { Session } from "../../../entity/session";

export interface FindProductByIdReq {
    id: string;
    session: Session;
}