import type { Session } from "../../../entity/session";

export interface FindRecordStatusByNameReq {
    name: string;
    session: Session;
}