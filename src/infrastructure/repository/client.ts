import type { ClientDataSourceI, ClientRepositoryI, CreateClientReq, CreateClientRes, DeleteClientReq, FindByIdReq, FindByIdRes, UpdateClientReq, UpdateClientRes } from "../../domain";
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

        public async findById(dto: FindByIdReq): Promise<FindByIdRes> {
            try {
                return await this.dataSource.findById(dto);
            }
            catch (error) {
                throw error;
            }
        }

}
