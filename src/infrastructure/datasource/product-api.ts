import { HTTPClient } from "../../core";
import { ErrorHandler } from "../../domain";
import type { ProductDataSourceI } from "../../domain/datasource/product";
import type { CreateProductReq } from "../../domain/dto/product/request/CreateProductReq";
import type { DeactivateProductReq } from "../../domain/dto/product/request/DeactivateProductReq";
import type { DeleteProductReq } from "../../domain/dto/product/request/DeleteProductReq";
import type { FindProductByIdReq } from "../../domain/dto/product/request/FindProductByIdReq";
import type { GetAllProductsByStatusReq } from "../../domain/dto/product/request/GetAllProductsByStatusReq";
import type { GetAllProductsReq } from "../../domain/dto/product/request/GetAllProductsReq";
import type { SearchProductReq } from "../../domain/dto/product/request/SearchProductReq";
import type { UpdateProductReq } from "../../domain/dto/product/request/UpdateProductReq";
import type { CreateProductRes } from "../../domain/dto/product/response/CreateProductRes";
import type { DeactivateProductRes } from "../../domain/dto/product/response/DeactivateProductRes";
import type { FindProductByIdRes } from "../../domain/dto/product/response/FindProductByIdRes";
import type { GetAllProductsByStatusRes } from "../../domain/dto/product/response/GetAllProductsByStatusRes";
import type { GetAllProductsRes } from "../../domain/dto/product/response/GetAllProductsRes";
import type { SearchProductRes } from "../../domain/dto/product/response/SearchProductRes";
import type { UpdateProductRes } from "../../domain/dto/product/response/UpdateProductRes";

export class ProductApiDataSource implements ProductDataSourceI {

    private httpClient: HTTPClient;
    
    constructor() {
        this.httpClient = new HTTPClient();
    }

    public async create(dto: CreateProductReq): Promise<CreateProductRes> {
        try {
            const response = await this.httpClient.post(`/api/products/`, {...dto}, dto.session.getAccessToken());
            if (response.error) {
                throw ErrorHandler.handleError(response.error);
            }

            return response;
        }
        catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }
    
    public async update(dto: UpdateProductReq): Promise<UpdateProductRes> {
        try {
            const response = await this.httpClient.put(`/api/products/${dto.id}`, {...dto}, dto.session.getAccessToken());
            if (response.error) {
                throw ErrorHandler.handleError(response.error);
            }

            return response;
        }
        catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }

    public async delete(dto: DeleteProductReq): Promise<void> {
        try {
            const response = await this.httpClient.delete(`/api/products/`, {...dto}, dto.session.getAccessToken());
            if (response.error) {
                throw ErrorHandler.handleError(response.error);
            }

            return response;
        }
        catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }

    public async findById(dto: FindProductByIdReq): Promise<FindProductByIdRes> {
        try {
            const response = await this.httpClient.get(`/api/products/${dto.id}`, {...dto}, dto.session.getAccessToken());
            if (response.error) {
                throw ErrorHandler.handleError(response.error);
            }

            return response;
        }
        catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }

    public async getAll(dto: GetAllProductsReq): Promise<GetAllProductsRes> {
        try {
            const response = await this.httpClient.get(
                `/api/products/`,
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
    
    public async getAllByStatus(dto: GetAllProductsByStatusReq): Promise<GetAllProductsByStatusRes> {
        try {
            const response = await this.httpClient.get(
                `/api/products/status/${dto.statusId}`,
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

    public async deactivate(dto: DeactivateProductReq): Promise<DeactivateProductRes> {
        try {
            const response = await this.httpClient.get(
                `/api/products/${dto.id}/deactivate`,
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

    public async search(dto: SearchProductReq): Promise<SearchProductRes> {
        try {
            const response = await this.httpClient.get(
                `/api/products/search`,
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