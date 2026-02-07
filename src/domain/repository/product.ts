import type { CreateProducttReq } from "../dto/product/request/CreateProductReq";
import type { DeactivateProductReq } from "../dto/product/request/DeactivateProductReq";
import type { DeleteProductReq } from "../dto/product/request/DeleteProductReq";
import type { FindProductByIdReq } from "../dto/product/request/FindProductByIdReq";
import type { GetAllProductsByStatusReq } from "../dto/product/request/GetAllProductsByStatusReq";
import type { GetAllProductsReq } from "../dto/product/request/GetAllProductsReq";
import type { UpdateProductReq } from "../dto/product/request/UpdateProductReq";
import type { CreateProductRes } from "../dto/product/response/CreateProductRes";
import type { DeactivateProductRes } from "../dto/product/response/DeactivateProductRes";
import type { FindProductByIdRes } from "../dto/product/response/FindProductByIdRes";
import type { GetAllProductsByStatusRes } from "../dto/product/response/GetAllProductsByStatusRes";
import type { GetAllProductsRes } from "../dto/product/response/GetAllProductsRes";
import type { UpdateProductRes } from "../dto/product/response/UpdateProductRes";

export abstract class ProductRepositoryI {
    abstract create(dto: CreateProducttReq): Promise<CreateProductRes>;
    abstract update(dto: UpdateProductReq): Promise<UpdateProductRes>;
    abstract delete(dto: DeleteProductReq): Promise<void>;
    abstract findById(dto: FindProductByIdReq): Promise<FindProductByIdRes>;
    abstract getAll(dto: GetAllProductsReq): Promise<GetAllProductsRes>;
    abstract getAllByStatus(dto: GetAllProductsByStatusReq): Promise<GetAllProductsByStatusRes>;
    abstract deactivate(dto: DeactivateProductReq): Promise<DeactivateProductRes>;
}