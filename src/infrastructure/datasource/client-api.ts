import { HTTPClient } from "../../core";
import { ErrorHandler, type ClientDataSourceI, type CreateClientReq, type CreateClientRes, type DeleteClientReq, type UpdateClientReq, type UpdateClientRes } from "../../domain";

export class ClientApiDataSource implements ClientDataSourceI {

    private httpClient: HTTPClient;
    
    constructor() {
        this.httpClient = new HTTPClient();
    }

    public async create(dto: CreateClientReq): Promise<CreateClientRes> {
        try {
            const response = await this.httpClient.post("/api/clients/create", {...dto}, dto.session.getAccessToken());
            if (response.error) {
                throw ErrorHandler.handleError(response.error);
            }

            return response;
        }
        catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }
    
    public async update(dto: UpdateClientReq): Promise<UpdateClientRes> {
        try {
            const response = await this.httpClient.put("/api/clients/update", {...dto}, dto.session.getAccessToken());
            if (response.error) {
                throw ErrorHandler.handleError(response.error);
            }

            return response;
        }
        catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }

    public async delete(dto: DeleteClientReq): Promise<void> {
        try {
            const response = await this.httpClient.delete("/api/clients/delete", {...dto}, dto.session.getAccessToken());
            if (response.error) {
                throw ErrorHandler.handleError(response.error);
            }

            return response;
        }
        catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }
    
}