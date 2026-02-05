import { HTTPClient } from "../../core";
import { ErrorHandler } from "../../domain";
import type { ServiceDataSourceI } from "../../domain/datasource/service";
import type { CreateServiceReq } from "../../domain/dto/service/request/CreateServiceReq";
import type { DeleteServiceReq } from "../../domain/dto/service/request/DeleteServiceReq";
import type { FindByIdReq } from "../../domain/dto/service/request/FindByIdReq";
import type { GetAllByStatusReq } from "../../domain/dto/service/request/GetAllByStatusReq";
import type { GetAllServicesReq } from "../../domain/dto/service/request/GetAllServicesReq";
import type { UpdateServiceReq } from "../../domain/dto/service/request/UpdateServiceReq";
import type { CreateServiceRes } from "../../domain/dto/service/response/CreateServiceRes";
import type { FindByIdRes } from "../../domain/dto/service/response/FindByIdRes";
import type { GetAllByStatusRes } from "../../domain/dto/service/response/GetAllByStatusRes";
import type { GetAllServicesRes } from "../../domain/dto/service/response/GetAllServicesRes";
import type { UpdateServiceRes } from "../../domain/dto/service/response/UpdateServiceRes";

export class ServiceApiDataSource implements ServiceDataSourceI {

    private httpClient: HTTPClient;
    
    constructor() {
        this.httpClient = new HTTPClient();
    }

    public async create(dto: CreateServiceReq): Promise<CreateServiceRes> {
        try {
            const response = await this.httpClient.post(`/api/services/create`, {...dto}, dto.session.getAccessToken());
            if (response.error) {
                throw ErrorHandler.handleError(response.error);
            }

            return response;
        }
        catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }
    
    public async update(dto: UpdateServiceReq): Promise<UpdateServiceRes> {
        try {
            const response = await this.httpClient.put(`/api/services/update/${dto.id}`, {...dto}, dto.session.getAccessToken());
            if (response.error) {
                throw ErrorHandler.handleError(response.error);
            }

            return response;
        }
        catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }

    public async delete(dto: DeleteServiceReq): Promise<void> {
        try {
            const response = await this.httpClient.delete(`/api/services/delete`, {...dto}, dto.session.getAccessToken());
            if (response.error) {
                throw ErrorHandler.handleError(response.error);
            }

            return response;
        }
        catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }

    public async findById(dto: FindByIdReq): Promise<FindByIdRes> {
        try {
            const response = await this.httpClient.get(`/api/services/find-by-id`, {...dto}, dto.session.getAccessToken());
            if (response.error) {
                throw ErrorHandler.handleError(response.error);
            }

            return response;
        }
        catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }

    public async getAll(dto: GetAllServicesReq): Promise<GetAllServicesRes> {
        try {
            const response = await this.httpClient.get(
                `/api/services/get-all`,
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
    
    public async getAllByStatus(dto: GetAllByStatusReq): Promise<GetAllByStatusRes> {
        try {
            const response = await this.httpClient.get(
                `/api/services/get-all-by-status/${dto.statusId}`,
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