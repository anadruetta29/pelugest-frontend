import type { ClientDataSourceI, ClientRepositoryI, CreateClientReq, CreateClientRes, DeleteClientReq, 
    FindClientByIdReq, 
    FindClientByIdRes, 
    GetAllClientsByStatusReq, 
    GetAllClientsByStatusRes, 
    UpdateClientReq, UpdateClientRes } from "../../domain";
import type { DeactivateClientReq } from "../../domain/dto/client/request/DeactivateClientReq";
import type { GetAllClientsReq } from "../../domain/dto/client/request/GetAllClientsReq";
import type { DeactivateClientRes } from "../../domain/dto/client/response/DeactivateClientRes";
import type { GetAllClientsRes } from "../../domain/dto/client/response/GetAllClientsRes";
import { ClientApiDataSource } from "../datasource/client-api";

export class ClientRepository implements ClientRepositoryI {
    private dataSource: ClientDataSourceI;
        
        constructor(dataSource: ClientDataSourceI = new ClientApiDataSource()) {
            this.dataSource = dataSource;
        }
        
        public async create(dto: CreateClientReq): Promise<CreateClientRes> {
            try {
                return await this.dataSource.create(dto);
            }
            catch (error) {
                throw error;
            }
        };

        public async update(dto: UpdateClientReq): Promise<UpdateClientRes> {
            try {
                return await this.dataSource.update(dto);
            }
            catch (error) {
                throw error;
            }
        };

        public async delete(dto: DeleteClientReq): Promise<void> {
            try {
                return await this.dataSource.delete(dto);
            }
            catch (error) {
                throw error;
            }
        };

        public async findById(dto: FindClientByIdReq): Promise<FindClientByIdRes> {
            try {
                return await this.dataSource.findById(dto);
            }
            catch (error) {
                throw error;
            }
        }

        public async getAll(dto: GetAllClientsReq): Promise<GetAllClientsRes> {
            try {
                return await this.dataSource.getAll(dto); 
            }
            catch (error) {
                throw error;
            }
        }

        public async getAllByStatus(dto: GetAllClientsByStatusReq): Promise<GetAllClientsByStatusRes> {
            try {
                return await this.dataSource.getAllByStatus(dto);
            }
            catch (error) {
                throw error;
            }
        }

        public async deactivate(dto: DeactivateClientReq): Promise<DeactivateClientRes> {
            try {
                return await this.dataSource.deactivate(dto);
            }
            catch (error) {
                throw error;
            }
        }

}
