import type { CreateStockMovementReq } from "../dto/stock-movement/request/CreateStockMovementReq";
import type { DeleteStockMovementReq } from "../dto/stock-movement/request/DeleteStockMovementReq";
import type { FindStockMovementByIdReq } from "../dto/stock-movement/request/FindStockMovementByIdReq";
import type { GetAllStockMovementsByProductReq } from "../dto/stock-movement/request/GetAllStockMovementsByProductReq";
import type { GetAllStockMovementsByUserReq } from "../dto/stock-movement/request/GetAllStockMovementsByUserReq";
import type { GetAllStockMovementsReq } from "../dto/stock-movement/request/GetAllStockMovementsReq";
import type { CreateStockMovementRes } from "../dto/stock-movement/response/CreateStockMovementRes";
import type { FindStockMovementByIdRes } from "../dto/stock-movement/response/FindStockMovementByIdRes";
import type { GetAllStockMovementsByProductRes } from "../dto/stock-movement/response/GetAllStockMovementsByProductRes";
import type { GetAllStockMovementsByUserRes } from "../dto/stock-movement/response/GetAllStockMovementsByUserRes";

export abstract class StockMovementDataSourceI {
    abstract create(dto: CreateStockMovementReq): Promise<CreateStockMovementRes>;
    abstract delete(dto: DeleteStockMovementReq): Promise<void>;
    abstract findById(dto: FindStockMovementByIdReq): Promise<FindStockMovementByIdRes>;
    abstract getAll(dto: GetAllStockMovementsReq): Promise<GetAllStockMovementsByUserRes>;
    abstract getAllByProduct(dto: GetAllStockMovementsByProductReq): Promise<GetAllStockMovementsByProductRes>;
    abstract getAllByUser(dto: GetAllStockMovementsByUserReq): Promise<GetAllStockMovementsByUserRes>;
}
