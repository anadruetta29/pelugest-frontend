import { HTTPClient } from "../../core";
import { ErrorHandler } from "../../domain";
import type { StockProductDataSourceI } from "../../domain/datasource/stock-product";
import type { CreateStockProductReq } from "../../domain/dto/stock-product/request/CreateStockProductReq";
import type { DeleteStockProductReq } from "../../domain/dto/stock-product/request/DeleteStockProductReq";
import type { FindStockProductByIdReq } from "../../domain/dto/stock-product/request/FindStockProductByIdReq";
import type { FindStockProductByProductReq } from "../../domain/dto/stock-product/request/FindStockProductByProductReq";
import type { GetAllStockProductsReq } from "../../domain/dto/stock-product/request/GetAllStockProductsReq";
import type { UpdateStockProductReq } from "../../domain/dto/stock-product/request/UpdateStockProductReq";
import type { CreateStockProductRes } from "../../domain/dto/stock-product/response/CreateStockProductRes";
import type { FindStockProductByIdRes } from "../../domain/dto/stock-product/response/FindStockProductByIdRes";
import type { FindStockProductByProductRes } from "../../domain/dto/stock-product/response/FindStockProductByProductRes";
import type { GetAllStockProductsRes } from "../../domain/dto/stock-product/response/GetAllStockProductsRes";
import type { UpdateStockProductRes } from "../../domain/dto/stock-product/response/UpdateStockProductRes";


export class StockProductApiDataSource implements StockProductDataSourceI {

    private httpClient: HTTPClient;

    constructor() {
        this.httpClient = new HTTPClient();
    }

    public async create(dto: CreateStockProductReq): Promise<CreateStockProductRes> {
        try {
            const response = await this.httpClient.post(`/api/stock-products/create`, { ...dto }, dto.session.getAccessToken());
            if (response.error) throw ErrorHandler.handleError(response.error);
            return response;
        } catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }

    public async update(dto: UpdateStockProductReq): Promise<UpdateStockProductRes> {
        try {
            const response = await this.httpClient.put(`/api/stock-products/update/${dto.id}`, { ...dto }, dto.session.getAccessToken());
            if (response.error) throw ErrorHandler.handleError(response.error);
            return response;
        } catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }

    public async delete(dto: DeleteStockProductReq): Promise<void> {
        try {
            const response = await this.httpClient.delete(`/api/stock-products/delete`, { ...dto }, dto.session.getAccessToken());
            if (response.error) throw ErrorHandler.handleError(response.error);
        } catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }

    public async findById(dto: FindStockProductByIdReq): Promise<FindStockProductByIdRes> {
        try {
            const response = await this.httpClient.get(`/api/stock-products/find-by-id`, { ...dto }, dto.session.getAccessToken());
            if (response.error) throw ErrorHandler.handleError(response.error);
            return response;
        } catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }

    public async findByProduct(dto: FindStockProductByProductReq): Promise<FindStockProductByProductRes> {
        try {
            const response = await this.httpClient.get(`/api/stock-products/find-by-product`, { ...dto }, dto.session.getAccessToken());
            if (response.error) throw ErrorHandler.handleError(response.error);
            return response;
        } catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }

    public async getAll(dto: GetAllStockProductsReq): Promise<GetAllStockProductsRes> {
        try {
            const response = await this.httpClient.get(`/api/stock-products/get-all`, undefined, dto.session.getAccessToken());
            if (response.error) throw ErrorHandler.handleError(response.error);
            return response;
        } catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }
}