import { HTTPClient } from "../../core";
import { ErrorHandler, type GetAllStockMovementsRes } from "../../domain";
import type { StockMovementDataSourceI } from "../../domain/datasource/stock-movement";
import type { CreateStockMovementReq } from "../../domain/dto/stock-movement/request/CreateStockMovementReq";
import type { DeleteStockMovementReq } from "../../domain/dto/stock-movement/request/DeleteStockMovementReq";
import type { FindStockMovementByIdReq } from "../../domain/dto/stock-movement/request/FindStockMovementByIdReq";
import type { GetAllStockMovementsByProductReq } from "../../domain/dto/stock-movement/request/GetAllStockMovementsByProductReq";
import type { GetAllStockMovementsByUserReq } from "../../domain/dto/stock-movement/request/GetAllStockMovementsByUserReq";
import type { GetAllStockMovementsReq } from "../../domain/dto/stock-movement/request/GetAllStockMovementsReq";
import type { UpdateStockMovementReq } from "../../domain/dto/stock-movement/request/UpdateStockMovementReq";
import type { CreateStockMovementRes } from "../../domain/dto/stock-movement/response/CreateStockMovementRes";
import type { FindStockMovementByIdRes } from "../../domain/dto/stock-movement/response/FindStockMovementByIdRes";
import type { GetAllStockMovementsByProductRes } from "../../domain/dto/stock-movement/response/GetAllStockMovementsByProductRes";
import type { GetAllStockMovementsByUserRes } from "../../domain/dto/stock-movement/response/GetAllStockMovementsByUserRes";
import type { UpdateStockMovementRes } from "../../domain/dto/stock-movement/response/UpdateStockMovementRes";


export class StockMovementApiDataSource implements StockMovementDataSourceI {

    private httpClient: HTTPClient;

    constructor() {
        this.httpClient = new HTTPClient();
    }

    public async create(dto: CreateStockMovementReq): Promise<CreateStockMovementRes> {
        try {
            const response = await this.httpClient.post(`/api/stock-movements`, { ...dto }, dto.session.getAccessToken());
            if (response.error) throw ErrorHandler.handleError(response.error);
            return response;
        } catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }

    public async update(dto: UpdateStockMovementReq): Promise<UpdateStockMovementRes> {
        try {
            const response = await this.httpClient.put(
                `/api/stock-movements/${dto.id}`,
                { ...dto },
                dto.session.getAccessToken()
            );
            if (response.error) throw ErrorHandler.handleError(response.error);
            return response;
        } catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }

    public async delete(dto: DeleteStockMovementReq): Promise<void> {
        try {
            const response = await this.httpClient.delete(`/api/stock-movements/${dto.id}`, { ...dto }, dto.session.getAccessToken());
            if (response.error) throw ErrorHandler.handleError(response.error);
        } catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }

    public async findById(dto: FindStockMovementByIdReq): Promise<FindStockMovementByIdRes> {
        try {
            const response = await this.httpClient.get(`/api/stock-movements/${dto.id}`, { ...dto }, dto.session.getAccessToken());
            if (response.error) throw ErrorHandler.handleError(response.error);
            return response;
        } catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }

    public async getAll(dto: GetAllStockMovementsReq): Promise<GetAllStockMovementsRes> {
        try {
            const response = await this.httpClient.get(`/api/stock-movements/`, undefined, dto.session.getAccessToken());
            if (response.error) throw ErrorHandler.handleError(response.error);
            return response;
        } catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }

    public async getAllByProduct(dto: GetAllStockMovementsByProductReq): Promise<GetAllStockMovementsByProductRes> {
        try {
            const response = await this.httpClient.get(`/api/stock-movements/product/${dto.productId}`, undefined, dto.session.getAccessToken());
            if (response.error) throw ErrorHandler.handleError(response.error);
            return response;
        } catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }

    public async getAllByUser(dto: GetAllStockMovementsByUserReq): Promise<GetAllStockMovementsByUserRes> {
        try {
            const response = await this.httpClient.get(`/api/stock-movements/user/${dto.userId}`, undefined, dto.session.getAccessToken());
            if (response.error) throw ErrorHandler.handleError(response.error);
            return response;
        } catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }
}