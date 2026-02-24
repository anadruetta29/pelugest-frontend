import type { CreateClientReq } from "../dto/client/request/CreateClientReq";
import type { DeactivateClientReq } from "../dto/client/request/DeactivateClientReq";
import type { DeleteClientReq } from "../dto/client/request/DeleteClientReq";
import type { FindClientByIdReq } from "../dto/client/request/FindClientByIdReq";
import type { GetAllClientsByStatusReq } from "../dto/client/request/GetAllClientsByStatusReq";
import type { GetAllClientsReq } from "../dto/client/request/GetAllClientsReq";
import type { SearchClientReq } from "../dto/client/request/SearchClientReq";
import type { UpdateClientReq } from "../dto/client/request/UpdateClientReq";
import type { CreateClientRes } from "../dto/client/response/CreateClientRes";
import type { DeactivateClientRes } from "../dto/client/response/DeactivateClientRes";
import type { FindClientByIdRes } from "../dto/client/response/FindClientByIdRes";
import type { GetAllClientsByStatusRes } from "../dto/client/response/GetAllClientsByStatusRes";
import type { GetAllClientsRes } from "../dto/client/response/GetAllClientsRes";
import type { SearchClientRes } from "../dto/client/response/SearchClientRes";
import type { UpdateClientRes } from "../dto/client/response/UpdateClientRes";

export abstract class ClientDataSourceI {
    abstract create(dto: CreateClientReq): Promise<CreateClientRes>;
    abstract update(dto: UpdateClientReq): Promise<UpdateClientRes>;
    abstract delete(dto: DeleteClientReq): Promise<void>;
    abstract findById(dto: FindClientByIdReq): Promise<FindClientByIdRes>;
    abstract getAll(dto: GetAllClientsReq): Promise<GetAllClientsRes>;
    abstract getAllByStatus(dto: GetAllClientsByStatusReq): Promise<GetAllClientsByStatusRes>;
    abstract deactivate(dto: DeactivateClientReq): Promise<DeactivateClientRes>;
    abstract search(dto: SearchClientReq): Promise<SearchClientRes>;
}
