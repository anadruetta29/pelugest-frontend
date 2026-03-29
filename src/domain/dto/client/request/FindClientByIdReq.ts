import type { Session } from "../../../entity/session";

export interface FindClientByIdReq {
    id: string;
    session: Session;
}