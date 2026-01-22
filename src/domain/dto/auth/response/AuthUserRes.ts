import type { RecordStatus } from "../../../entity/record-status";
import type { Role } from "../../../entity/role";

export interface AuthUserRes {
    id: string;
    email: string;
    role: Role;
    status: RecordStatus
}