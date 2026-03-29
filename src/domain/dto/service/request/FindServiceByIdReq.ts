import type { Session } from "../../../entity/session";

export interface FindServiceByIdReq {
    id: string;
    session: Session;
}