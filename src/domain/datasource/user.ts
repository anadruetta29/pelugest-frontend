import type { GetAllUsersByRoleNameReq } from "../dto/user/request/GetAllUsersByRoleNameReq";
import type { GetAllUsersByRoleNameRes } from "../dto/user/response/GetAllUsersByRoleNameRes";

export abstract class UserDataSourceI {
    abstract getAllByRoleName(dto: GetAllUsersByRoleNameReq): Promise<GetAllUsersByRoleNameRes>;
}