import type { CreateServiceReq } from "../dto/service/request/CreateServiceReq";
import type { DeactivateServiceReq } from "../dto/service/request/DeactivateServiceReq";
import type { DeleteServiceReq } from "../dto/service/request/DeleteServiceReq";
import type { FindServiceByIdReq } from "../dto/service/request/FindServiceByIdReq";
import type { GetAllServicesByStatusReq } from "../dto/service/request/GetAllServicesByStatusReq";
import type { GetAllServicesReq } from "../dto/service/request/GetAllServicesReq";
import type { SearchServiceReq } from "../dto/service/request/SearchServiceReq";
import type { UpdateServiceReq } from "../dto/service/request/UpdateServiceReq";
import type { CreateServiceRes } from "../dto/service/response/CreateServiceRes";
import type { DeactivateServiceRes } from "../dto/service/response/DeactivateServiceRes";
import type { FindServiceByIdRes } from "../dto/service/response/FindServiceByIdRes";
import type { GetAllServicesByStatusRes } from "../dto/service/response/GetAllServicesByStatusRes";
import type { GetAllServicesRes } from "../dto/service/response/GetAllServicesRes";
import type { SearchServiceRes } from "../dto/service/response/SearchServiceRes";
import type { UpdateServiceRes } from "../dto/service/response/UpdateServiceRes";

export abstract class ServiceRepositoryI {
    abstract create(dto: CreateServiceReq): Promise<CreateServiceRes>;
    abstract update(dto: UpdateServiceReq): Promise<UpdateServiceRes>;
    abstract delete(dto: DeleteServiceReq): Promise<void>;
    abstract findById(dto: FindServiceByIdReq): Promise<FindServiceByIdRes>;
    abstract getAll(dto: GetAllServicesReq): Promise<GetAllServicesRes>;
    abstract getAllByStatus(dto: GetAllServicesByStatusReq): Promise<GetAllServicesByStatusRes>;
    abstract deactivate(dto: DeactivateServiceReq): Promise<DeactivateServiceRes>;
    abstract search(dto: SearchServiceReq): Promise<SearchServiceRes>;
}
