import type { GetAllStockMovementsRes } from "../../domain";
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
import type { StockMovementRepositoryI } from "../../domain/repository/stock-movement";
import { StockMovementApiDataSource } from "../datasource/stock-movement-api";


export class StockMovementRepository implements StockMovementRepositoryI {

    private dataSource: StockMovementDataSourceI;

    constructor(dataSource: StockMovementDataSourceI = new StockMovementApiDataSource()) {
        this.dataSource = dataSource;
    }

    public async create(dto: CreateStockMovementReq): Promise<CreateStockMovementRes> {
        try {
            return await this.dataSource.create(dto);
        } catch (error) {
            throw error;
        }
    }

    public async update(dto: UpdateStockMovementReq): Promise<UpdateStockMovementRes> {  
        try {
            return await this.dataSource.update(dto);
        } catch (error) {
            throw error;
        }
    }

    public async delete(dto: DeleteStockMovementReq): Promise<void> {
        try {
            return await this.dataSource.delete(dto);
        } catch (error) {
            throw error;
        }
    }

    public async findById(dto: FindStockMovementByIdReq): Promise<FindStockMovementByIdRes> {
        try {
            return await this.dataSource.findById(dto);
        } catch (error) {
            throw error;
        }
    }

    public async getAll(dto: GetAllStockMovementsReq): Promise<GetAllStockMovementsRes> {
        try {
            return await this.dataSource.getAll(dto);
        } catch (error) {
            throw error;
        }
    }

    public async getAllByProduct(dto: GetAllStockMovementsByProductReq): Promise<GetAllStockMovementsByProductRes> {
        try {
            return await this.dataSource.getAllByProduct(dto);
        } catch (error) {
            throw error;
        }
    }

    public async getAllByUser(dto: GetAllStockMovementsByUserReq): Promise<GetAllStockMovementsByUserRes> {
        try {
            return await this.dataSource.getAllByUser(dto);
        } catch (error) {
            throw error;
        }
    }
}