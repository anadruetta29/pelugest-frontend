import type { Session } from "../../../entity/session";

export interface DeleteClientReq {
    id: string;
    session: Session;
}