import type { FindByIdReq } from "../dto/client/request/FindByIdReq";
import type { GetAllByStatusReq } from "../dto/client/request/GetAllByStatusReq";
import type { FindByIdRes } from "../dto/client/response/FindByIdRes";
import type { GetAllByStatusRes } from "../dto/client/response/GetAllByStatusRes";
import type { CreateServiceReq } from "../dto/service/request/CreateServiceReq";
import type { DeleteServiceReq } from "../dto/service/request/DeleteServiceReq";
import type { UpdateServiceReq } from "../dto/service/request/UpdateServiceReq";
import type { CreateServiceRes } from "../dto/service/response/CreateServiceRes";
import type { GetAllServicesRes } from "../dto/service/response/GetAllServicesRes";
import type { UpdateServiceRes } from "../dto/service/response/UpdateServiceRes";

export abstract class ServiceDataSourceI {
    abstract create(dto: CreateServiceReq): Promise<CreateServiceRes>;
    abstract update(dto: UpdateServiceReq): Promise<UpdateServiceRes>;
    abstract delete(dto: DeleteServiceReq): Promise<void>;
    abstract findById(dto: FindByIdReq): Promise<FindByIdRes>;
    abstract getAll(): Promise<GetAllServicesRes>;
    abstract getAllByStatus(dto: GetAllByStatusReq): Promise<GetAllByStatusRes>;
}
