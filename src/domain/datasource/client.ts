import type { CreateClientReq } from "../dto/client/request/CreateClientReq";
import type { DeleteClientReq } from "../dto/client/request/DeleteClientReq";
import type { FindByIdReq } from "../dto/client/request/FindByIdReq";
import type { UpdateClientReq } from "../dto/client/request/UpdateClientReq";
import type { CreateClientRes } from "../dto/client/response/CreateClientRes";
import type { FindByIdRes } from "../dto/client/response/FindByIdRes";
import type { UpdateClientRes } from "../dto/client/response/UpdateClientRes";

export abstract class ClientDataSourceI {
    abstract create(dto: CreateClientReq): Promise<CreateClientRes>;
    abstract update(dto: UpdateClientReq): Promise<UpdateClientRes>;
    abstract delete(dto: DeleteClientReq): Promise<void>;
    abstract findById(dto: FindByIdReq): Promise<FindByIdRes>;
}
