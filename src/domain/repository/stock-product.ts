import type { CreateStockProductReq } from "../dto/stock-product/request/CreateStockProductReq";
import type { DeleteStockProductReq } from "../dto/stock-product/request/DeleteStockProductReq";
import type { FindStockProductByIdReq } from "../dto/stock-product/request/FindStockProductByIdReq";
import type { FindStockProductByProductReq } from "../dto/stock-product/request/FindStockProductByProductReq";
import type { GetAllStockProductsReq } from "../dto/stock-product/request/GetAllStockProductsReq";
import type { UpdateStockProductReq } from "../dto/stock-product/request/UpdateStockProductReq";
import type { CreateStockProductRes } from "../dto/stock-product/response/CreateStockProductRes";
import type { FindStockProductByIdRes } from "../dto/stock-product/response/FindStockProductByIdRes";
import type { FindStockProductByProductRes } from "../dto/stock-product/response/FindStockProductByProductRes";
import type { GetAllStockProductsRes } from "../dto/stock-product/response/GetAllStockProductsRes";
import type { UpdateStockProductRes } from "../dto/stock-product/response/UpdateStockProductRes";

export abstract class StockProductRepositoryI {
    abstract create(dto: CreateStockProductReq): Promise<CreateStockProductRes>;
    abstract update(dto: UpdateStockProductReq): Promise<UpdateStockProductRes>;
    abstract delete(dto: DeleteStockProductReq): Promise<void>;
    abstract findById(dto: FindStockProductByIdReq): Promise<FindStockProductByIdRes>;
    abstract findByProduct(dto: FindStockProductByProductReq): Promise<FindStockProductByProductRes>;
    abstract getAll(dto: GetAllStockProductsReq): Promise<GetAllStockProductsRes>;
}