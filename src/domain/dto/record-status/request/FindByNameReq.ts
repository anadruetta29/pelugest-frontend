import type { Session } from "../../../entity/session";

export interface FindByNameReq {
    name: string;
    session: Session;
}