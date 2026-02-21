import { HTTPClient } from "../../core";
import { ErrorHandler, type ClientDataSourceI, type CreateClientReq, type CreateClientRes, type DeleteClientReq, 
    type FindClientByIdReq, 
    type FindClientByIdRes, 
    type GetAllClientsByStatusReq, 
    type GetAllClientsByStatusRes, 
    type UpdateClientReq, type UpdateClientRes } from "../../domain";
import type { DeactivateClientReq } from "../../domain/dto/client/request/DeactivateClientReq";
import type { GetAllClientsReq } from "../../domain/dto/client/request/GetAllClientsReq";
import type { DeactivateClientRes } from "../../domain/dto/client/response/DeactivateClientRes";
import type { GetAllClientsRes } from "../../domain/dto/client/response/GetAllClientsRes";

export class ClientApiDataSource implements ClientDataSourceI {

    private httpClient: HTTPClient;
    
    constructor() {
        this.httpClient = new HTTPClient();
    }

    public async create(dto: CreateClientReq): Promise<CreateClientRes> {
        try {
            const response = await this.httpClient.post(`/api/clients/`, {...dto}, dto.session.getAccessToken());
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
            const response = await this.httpClient.put(`/api/clients/${dto.id}`, {...dto}, dto.session.getAccessToken());
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
            const response = await this.httpClient.delete(`/api/clients/${dto.id}`, {...dto}, dto.session.getAccessToken());
            if (response.error) {
                throw ErrorHandler.handleError(response.error);
            }

            return response;
        }
        catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }

    public async findById(dto: FindClientByIdReq): Promise<FindClientByIdRes> {
        try {
            const response = await this.httpClient.get(`/api/clients/${dto.id}`, {...dto}, dto.session.getAccessToken());
            if (response.error) {
                throw ErrorHandler.handleError(response.error);
            }

            return response;
        }
        catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }

    public async getAll(dto: GetAllClientsReq): Promise<GetAllClientsRes> {
        try {
            const response = await this.httpClient.get(
                `/api/clients/`,
                undefined,
                dto.session.getAccessToken()
            );
            if (response.error) {
            throw ErrorHandler.handleError(response.error);
            }
            return response;
        } catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }
    
    public async getAllByStatus(dto: GetAllClientsByStatusReq): Promise<GetAllClientsByStatusRes> {
        try {
            const response = await this.httpClient.get(
                `/api/clients/status/${dto.statusId}`,
                undefined,
                dto.session.getAccessToken()
            );

            if (response.error) {
            throw ErrorHandler.handleError(response.error);
            }

            return response;
        } catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }

    public async deactivate(dto: DeactivateClientReq): Promise<DeactivateClientRes> {
        try {
            const response = await this.httpClient.get(
                `/api/clients/${dto.id}/deactivate`,
                undefined,
                dto.session.getAccessToken()
            );

            if (response.error) {
            throw ErrorHandler.handleError(response.error);
            }

            return response;
        } catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }
    
}