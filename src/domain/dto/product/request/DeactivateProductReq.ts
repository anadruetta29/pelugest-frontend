import type { Session } from "../../../entity/session";

export interface DeactivateProductReq {
    id: string;
    session: Session;
}