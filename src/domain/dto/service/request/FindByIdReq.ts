import type { Session } from "../../../entity/session";

export interface FindByIdReq {
    id: string;
    session: Session;
}