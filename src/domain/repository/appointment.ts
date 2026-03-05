import type { ChangeAppointmentStatusReq } from "../dto/appointment/request/ChangeAppointmentStatusReq";
import type { CreateAppointmentDetailReq } from "../dto/appointment/request/CreateAppointmentDetailReq";
import type { CreateAppointmentReq } from "../dto/appointment/request/CreateAppointmentReq";
import type { DeleteAppointmentReq } from "../dto/appointment/request/DeleteAppointmentReq";
import type { FindAppointmentByIdReq } from "../dto/appointment/request/FindAppointmentByIdReq";
import type { FindDetailsByAppointmentIdReq } from "../dto/appointment/request/FindDetailsByAppointmentIdReq";
import type { GetAllAppointmentsByStatusReq } from "../dto/appointment/request/GetAllAppointmentsByStatusReq";
import type { GetAllAppointmentsReq } from "../dto/appointment/request/GetAllAppointmentsReq";
import type { UpdateAppointmentReq } from "../dto/appointment/request/UpdateAppointmentReq";
import type { ChangeAppointmentStatusRes } from "../dto/appointment/response/ChangeAppointmentStatusRes";
import type { CreateAppointmentDetailRes } from "../dto/appointment/response/CreateAppointmentDetailRes";
import type { CreateAppointmentRes } from "../dto/appointment/response/CreateAppointmentRes";
import type { FindAppointmentByIdRes } from "../dto/appointment/response/FindAppointmentByIdRes";
import type { FindDetailsByAppointmentIdRes } from "../dto/appointment/response/FindDetailsByAppointmentIdRes";
import type { GetAllAppointmentsByStatusRes } from "../dto/appointment/response/GetAllAppointmentsByStatusRes";
import type { GetAllAppointmentsRes } from "../dto/appointment/response/GetAllAppointmentsRes";
import type { UpdateAppointmentRes } from "../dto/appointment/response/UpdateAppointmentRes";

export abstract class AppointmentRepositoryI {
    abstract create(dto: CreateAppointmentReq): Promise<CreateAppointmentRes>; 
    abstract update(dto: UpdateAppointmentReq): Promise<UpdateAppointmentRes>;
    abstract delete(dto: DeleteAppointmentReq): Promise<void>;
    abstract findById(dto: FindAppointmentByIdReq): Promise<FindAppointmentByIdRes>;
    abstract getAll(dto: GetAllAppointmentsReq): Promise<GetAllAppointmentsRes>;
    abstract getAllByStatus(dto: GetAllAppointmentsByStatusReq): Promise<GetAllAppointmentsByStatusRes>;
    abstract createAppointmentDetail(dto: CreateAppointmentDetailReq): Promise<CreateAppointmentDetailRes>;
    abstract changeAppointmentStatus(dto: ChangeAppointmentStatusReq): Promise<ChangeAppointmentStatusRes>;
    abstract findDetailsByAppointmentId(dto: FindDetailsByAppointmentIdReq): Promise<FindDetailsByAppointmentIdRes>;
}