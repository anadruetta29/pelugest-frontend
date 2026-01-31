import type { FindByNameReq, FindByNameRes, RecordStatusDataSourceI, RecordStatusRepositoryI } from "../../domain";
import { RecordStatusApiDataSource } from "../datasource/record-status-api";

export class RecordStatusRepository implements RecordStatusRepositoryI {
    private dataSource: RecordStatusDataSourceI;
            
        constructor(dataSource: RecordStatusDataSourceI = new RecordStatusApiDataSource()) {
            this.dataSource = dataSource;
        }

        public async findByName(dto: FindByNameReq): Promise<FindByNameRes> {
            try {
                return await this.dataSource.findByName(dto);
            }
            catch (error) {
                throw error;
            }
        };
        
}