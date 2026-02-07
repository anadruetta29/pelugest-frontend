import type { Session } from "../../../entity/session";

export interface DeactivateClientReq {
    id: string;
    session: Session;
}