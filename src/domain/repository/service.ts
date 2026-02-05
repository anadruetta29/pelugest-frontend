import type { CreateServiceReq } from "../dto/service/request/CreateServiceReq";
import type { DeleteServiceReq } from "../dto/service/request/DeleteServiceReq";
import type { FindByIdReq } from "../dto/service/request/FindByIdReq";
import type { GetAllByStatusReq } from "../dto/service/request/GetAllByStatusReq";
import type { GetAllServicesReq } from "../dto/service/request/GetAllServicesReq";
import type { UpdateServiceReq } from "../dto/service/request/UpdateServiceReq";
import type { CreateServiceRes } from "../dto/service/response/CreateServiceRes";
import type { FindByIdRes } from "../dto/service/response/FindByIdRes";
import type { GetAllByStatusRes } from "../dto/service/response/GetAllByStatusRes";
import type { GetAllServicesRes } from "../dto/service/response/GetAllServicesRes";
import type { UpdateServiceRes } from "../dto/service/response/UpdateServiceRes";

export abstract class ServiceRepositoryI {
    abstract create(dto: CreateServiceReq): Promise<CreateServiceRes>;
    abstract update(dto: UpdateServiceReq): Promise<UpdateServiceRes>;
    abstract delete(dto: DeleteServiceReq): Promise<void>;
    abstract findById(dto: FindByIdReq): Promise<FindByIdRes>;
    abstract getAll(dto: GetAllServicesReq): Promise<GetAllServicesRes>;
    abstract getAllByStatus(dto: GetAllByStatusReq): Promise<GetAllByStatusRes>;
}
