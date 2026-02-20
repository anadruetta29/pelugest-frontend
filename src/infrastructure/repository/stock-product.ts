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
import type { StockProductRepositoryI } from "../../domain/repository/stock-product";
import { StockProductApiDataSource } from "../datasource/stock-product-api";


export class StockProductRepository implements StockProductRepositoryI {

    private dataSource: StockProductDataSourceI;

    constructor(dataSource: StockProductDataSourceI = new StockProductApiDataSource()) {
        this.dataSource = dataSource;
    }

    public async create(dto: CreateStockProductReq): Promise<CreateStockProductRes> {
        try {
            return await this.dataSource.create(dto);
        } catch (error) {
            throw error;
        }
    }

    public async update(dto: UpdateStockProductReq): Promise<UpdateStockProductRes> {
        try {
            return await this.dataSource.update(dto);
        } catch (error) {
            throw error;
        }
    }

    public async delete(dto: DeleteStockProductReq): Promise<void> {
        try {
            return await this.dataSource.delete(dto);
        } catch (error) {
            throw error;
        }
    }

    public async findById(dto: FindStockProductByIdReq): Promise<FindStockProductByIdRes> {
        try {
            return await this.dataSource.findById(dto);
        } catch (error) {
            throw error;
        }
    }

    public async findByProduct(dto: FindStockProductByProductReq): Promise<FindStockProductByProductRes> {
        try {
            return await this.dataSource.findByProduct(dto);
        } catch (error) {
            throw error;
        }
    }

    public async getAll(dto: GetAllStockProductsReq): Promise<GetAllStockProductsRes> {
        try {
            return await this.dataSource.getAll(dto);
        } catch (error) {
            throw error;
        }
    }
}