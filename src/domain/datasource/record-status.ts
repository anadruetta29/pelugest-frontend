import type { FindRecordStatusByNameReq } from "../dto/record-status/request/FindRecordStatusByNameReq";
import type { FindRecordStatusByNameRes } from "../dto/record-status/response/FindRecordStatusByNameRes";

export abstract class RecordStatusDataSourceI {
    abstract findByName(dto: FindRecordStatusByNameReq): Promise<FindRecordStatusByNameRes>;
}
