import { HTTPClient } from "../../core";
import { ErrorHandler } from "../../domain";
import type { ServiceDataSourceI } from "../../domain/datasource/service";
import type { CreateServiceReq } from "../../domain/dto/service/request/CreateServiceReq";
import type { DeactivateServiceReq } from "../../domain/dto/service/request/DeactivateServiceReq";
import type { DeleteServiceReq } from "../../domain/dto/service/request/DeleteServiceReq";
import type { FindServiceByIdReq } from "../../domain/dto/service/request/FindServiceByIdReq";
import type { GetAllServicesByStatusReq } from "../../domain/dto/service/request/GetAllServicesByStatusReq";
import type { GetAllServicesReq } from "../../domain/dto/service/request/GetAllServicesReq";
import type { SearchServiceReq } from "../../domain/dto/service/request/SearchServiceReq";
import type { UpdateServiceReq } from "../../domain/dto/service/request/UpdateServiceReq";
import type { CreateServiceRes } from "../../domain/dto/service/response/CreateServiceRes";
import type { DeactivateServiceRes } from "../../domain/dto/service/response/DeactivateServiceRes";
import type { FindServiceByIdRes } from "../../domain/dto/service/response/FindServiceByIdRes";
import type { GetAllServicesByStatusRes } from "../../domain/dto/service/response/GetAllServicesByStatusRes";
import type { GetAllServicesRes } from "../../domain/dto/service/response/GetAllServicesRes";
import type { SearchServiceRes } from "../../domain/dto/service/response/SearchServiceRes";
import type { UpdateServiceRes } from "../../domain/dto/service/response/UpdateServiceRes";

export class ServiceApiDataSource implements ServiceDataSourceI {

    private httpClient: HTTPClient;
    
    constructor() {
        this.httpClient = new HTTPClient();
    }

    public async create(dto: CreateServiceReq): Promise<CreateServiceRes> {
        try {
            const response = await this.httpClient.post(`/api/services`, {...dto}, dto.session.getAccessToken());
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
            const response = await this.httpClient.put(`/api/services/${dto.id}`, {...dto}, dto.session.getAccessToken());
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
            const response = await this.httpClient.delete(`/api/services/${dto.id}`, {...dto}, dto.session.getAccessToken());
            if (response.error) {
                throw ErrorHandler.handleError(response.error);
            }

            return response;
        }
        catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }

    public async findById(dto: FindServiceByIdReq): Promise<FindServiceByIdRes> {
        try {
            const response = await this.httpClient.get(`/api/services/`, {...dto}, dto.session.getAccessToken());
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
                `/api/services/`,
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
    
    public async getAllByStatus(dto: GetAllServicesByStatusReq): Promise<GetAllServicesByStatusRes> {
        try {
            const response = await this.httpClient.get(
                `/api/services/status/${dto.statusId}`,
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

    public async deactivate(dto: DeactivateServiceReq): Promise<DeactivateServiceRes> {
        try {
            const response = await this.httpClient.get(
                `/api/services/${dto.id}/deactivate`,
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

    public async search(dto: SearchServiceReq): Promise<SearchServiceRes> {
       try {
            const response = await this.httpClient.get(
                `/api/services/search`,
                { ... dto},
                dto.session.getAccessToken()
            );
    
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