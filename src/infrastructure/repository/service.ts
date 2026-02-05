import type { FindByIdReq } from "../../domain";
import type { ServiceDataSourceI } from "../../domain/datasource/service";
import type { CreateServiceReq } from "../../domain/dto/service/request/CreateServiceReq";
import type { DeleteServiceReq } from "../../domain/dto/service/request/DeleteServiceReq";
import type { GetAllByStatusReq } from "../../domain/dto/service/request/GetAllByStatusReq";
import type { GetAllServicesReq } from "../../domain/dto/service/request/GetAllServicesReq";
import type { UpdateServiceReq } from "../../domain/dto/service/request/UpdateServiceReq";
import type { CreateServiceRes } from "../../domain/dto/service/response/CreateServiceRes";
import type { FindByIdRes } from "../../domain/dto/service/response/FindByIdRes";
import type { GetAllByStatusRes } from "../../domain/dto/service/response/GetAllByStatusRes";
import type { GetAllServicesRes } from "../../domain/dto/service/response/GetAllServicesRes";
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

        public async findById(dto: FindByIdReq): Promise<FindByIdRes> {
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

        public async getAllByStatus(dto: GetAllByStatusReq): Promise<GetAllByStatusRes> {
            try {
                return await this.dataSource.getAllByStatus(dto);
            }
            catch (error) {
                throw error;
            }
        }

}
