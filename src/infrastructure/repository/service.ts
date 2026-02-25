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
import type { ServiceRepositoryI } from "../../domain/repository/service";
import { ServiceApiDataSource } from "../datasource/service-api";

export class ServiceRepository implements ServiceRepositoryI {
    private dataSource: ServiceDataSourceI;
        
        constructor(dataSource: ServiceDataSourceI = new ServiceApiDataSource()) {
            this.dataSource = dataSource;
        }
        
        public async create(dto: CreateServiceReq): Promise<CreateServiceRes> {
            try {
                return await this.dataSource.create(dto);
            }
            catch (error) {
                throw error;
            }
        };

        public async update(dto: UpdateServiceReq): Promise<UpdateServiceRes> {
            try {
                return await this.dataSource.update(dto);
            }
            catch (error) {
                throw error;
            }
        };

        public async delete(dto: DeleteServiceReq): Promise<void> {
            try {
                return await this.dataSource.delete(dto);
            }
            catch (error) {
                throw error;
            }
        };

        public async findById(dto: FindServiceByIdReq): Promise<FindServiceByIdRes> {
            try {
                return await this.dataSource.findById(dto);
            }
            catch (error) {
                throw error;
            }
        }

        public async getAll(dto: GetAllServicesReq): Promise<GetAllServicesRes> {
            try {
                return await this.dataSource.getAll(dto); 
            }
            catch (error) {
                throw error;
            }
        }

        public async getAllByStatus(dto: GetAllServicesByStatusReq): Promise<GetAllServicesByStatusRes> {
            try {
                return await this.dataSource.getAllByStatus(dto);
            }
            catch (error) {
                throw error;
            }
        }

        public async deactivate(dto: DeactivateServiceReq): Promise<DeactivateServiceRes> {
            try {
                return await this.dataSource.deactivate(dto);
            }
            catch (error) {
                throw error;
             }
        }

        public async search(dto: SearchServiceReq): Promise<SearchServiceRes> {
            try {
                return await this.dataSource.search(dto);
            }
            catch (error) {
                throw error;
            }
        }

}
