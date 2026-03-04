import type { Session } from "../../../entity/session";

export interface GetAllUsersByRoleNameReq {
    roleName: string;
    session: Session;
}