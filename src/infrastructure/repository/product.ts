import type {  } from "../../domain";
import { ProductDataSourceI } from "../../domain/datasource/product";
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
import type { ProductRepositoryI } from "../../domain/repository/product";
import { ProductApiDataSource } from "../datasource/product-api";

export class ProductRepository implements ProductRepositoryI {
    private dataSource: ProductDataSourceI;
        
        constructor(dataSource: ProductDataSourceI = new ProductApiDataSource()) {
            this.dataSource = dataSource;
        }
        
        public async create(dto: CreateProductReq): Promise<CreateProductRes> {
            try {
                return await this.dataSource.create(dto);
            }
            catch (error) {
                throw error;
            }
        };

        public async update(dto: UpdateProductReq): Promise<UpdateProductRes> {
            try {
                return await this.dataSource.update(dto);
            }
            catch (error) {
                throw error;
            }
        };

        public async delete(dto: DeleteProductReq): Promise<void> {
            try {
                return await this.dataSource.delete(dto);
            }
            catch (error) {
                throw error;
            }
        };

        public async findById(dto: FindProductByIdReq): Promise<FindProductByIdRes> {
            try {
                return await this.dataSource.findById(dto);
            }
            catch (error) {
                throw error;
            }
        }

        public async getAll(dto: GetAllProductsReq): Promise<GetAllProductsRes> {
            try {
                return await this.dataSource.getAll(dto); 
            }
            catch (error) {
                throw error;
            }
        }

        public async getAllByStatus(dto: GetAllProductsByStatusReq): Promise<GetAllProductsByStatusRes> {
            try {
                return await this.dataSource.getAllByStatus(dto);
            }
            catch (error) {
                throw error;
            }
        }

        public async deactivate(dto: DeactivateProductReq): Promise<DeactivateProductRes> {
            try {
                return await this.dataSource.deactivate(dto);
            }
            catch (error) {
                throw error;
            }
        }

        public async search(dto: SearchProductReq): Promise<SearchProductRes> {
            try {
                return await this.dataSource.search(dto);
            }
            catch (error) {
                throw error;
            }
        }

}
