import type { GetAllUsersByRoleNameReq, GetAllUsersByRoleNameRes, UserDataSourceI, UserRepositoryI } from "../../domain";
import { UserApiDataSource } from "../datasource/user-api";

export class UserRepository implements UserRepositoryI {
    private dataSource: UserDataSourceI;
        
        constructor(dataSource: UserDataSourceI = new UserApiDataSource()) {
            this.dataSource = dataSource;
        }

    public async getAllByRoleName(dto: GetAllUsersByRoleNameReq): Promise<GetAllUsersByRoleNameRes> {
        try {
            return await this.dataSource.getAllByRoleName(dto);
        }
        catch (error) {
            throw error;
        }
    }

}