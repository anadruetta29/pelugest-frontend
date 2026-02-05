import type { Session } from "../../../entity/session";

export interface DeleteServiceReq {
    id: string;
    session: Session;
}