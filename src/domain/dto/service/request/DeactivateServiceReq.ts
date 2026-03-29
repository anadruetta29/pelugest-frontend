import type { Session } from "../../../entity/session";

export interface DeactivateServiceReq {
    id: string;
    session: Session;
}