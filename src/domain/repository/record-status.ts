import type { FindByNameReq } from "../dto/record-status/request/FindByNameReq";
import type { FindByNameRes } from "../dto/record-status/response/FindByNameRes";

export abstract class RecordStatusRepositoryI {
    abstract findByName(dto: FindByNameReq): Promise<FindByNameRes>;
}
