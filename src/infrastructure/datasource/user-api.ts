import { HTTPClient } from "../../core";
import { ErrorHandler, type GetAllUsersByRoleNameReq, type GetAllUsersByRoleNameRes, type UserDataSourceI } from "../../domain";

export class UserApiDataSource implements UserDataSourceI {

    private httpClient: HTTPClient;
    
    constructor() {
        this.httpClient = new HTTPClient();
    }

    public async getAllByRoleName(dto: GetAllUsersByRoleNameReq): Promise<GetAllUsersByRoleNameRes> {
        try {
            const response = await this.httpClient.get(`/api/users/role/${dto.roleName}`, undefined, dto.session.getAccessToken());
            if (response.error) throw ErrorHandler.handleError(response.error);
            return response;
        } catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }

}
