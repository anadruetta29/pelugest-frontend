import type { CreateClientReq } from "../dto/client/request/CreateClientReq";
import type { DeleteClientReq } from "../dto/client/request/DeleteClientReq";
import type { FindClientByIdReq } from "../dto/client/request/FindClientByIdReq";
import type { GetAllClientsByStatusReq } from "../dto/client/request/GetAllClientsByStatusReq";
import type { GetAllClientsReq } from "../dto/client/request/GetAllClientsReq";
import type { UpdateClientReq } from "../dto/client/request/UpdateClientReq";
import type { CreateClientRes } from "../dto/client/response/CreateClientRes";
import type { FindClientByIdRes } from "../dto/client/response/FindClientByIdRes";
import type { GetAllClientsByStatusRes } from "../dto/client/response/GetAllClientsByStatusRes";
import type { GetAllClientsRes } from "../dto/client/response/GetAllClientsRes";
import type { UpdateClientRes } from "../dto/client/response/UpdateClientRes";

export abstract class ClientRepositoryI {
    abstract create(dto: CreateClientReq): Promise<CreateClientRes>;
    abstract update(dto: UpdateClientReq): Promise<UpdateClientRes>;
    abstract delete(dto: DeleteClientReq): Promise<void>;
    abstract findById(dto: FindClientByIdReq): Promise<FindClientByIdRes>;
    abstract getAll(dto: GetAllClientsReq): Promise<GetAllClientsRes>;
    abstract getAllByStatus(dto: GetAllClientsByStatusReq): Promise<GetAllClientsByStatusRes>;
}
