import type { AppointmentDataSourceI, AppointmentRepositoryI, CreateAppointmentReq, CreateAppointmentRes, DeleteAppointmentReq, FindAppointmentByIdReq, FindAppointmentByIdRes, GetAllAppointmentsByStatusReq, GetAllAppointmentsByStatusRes, GetAllAppointmentsReq, GetAllAppointmentsRes, UpdateAppointmentReq, UpdateAppointmentRes } from "../../domain";
import type { CreateAppointmentDetailReq } from "../../domain/dto/appointment/request/CreateAppointmentDetailReq";
import type { CreateAppointmentDetailRes } from "../../domain/dto/appointment/response/CreateAppointmentDetailRes";
import { AppointmentApiDataSource } from "../datasource/appointment-api";

export class AppointmentRepository implements AppointmentRepositoryI {
    private dataSource: AppointmentDataSourceI;
        
        constructor(dataSource: AppointmentDataSourceI = new AppointmentApiDataSource()) {
            this.dataSource = dataSource;
        }
        
        public async create(dto: CreateAppointmentReq): Promise<CreateAppointmentRes> {
            try {
                return await this.dataSource.create(dto);
            }
            catch (error) {
                throw error;
            }
        };

        public async update(dto: UpdateAppointmentReq): Promise<UpdateAppointmentRes> {
            try {
                return await this.dataSource.update(dto);
            }
            catch (error) {
                throw error;
            }
        };

        public async delete(dto: DeleteAppointmentReq): Promise<void> {
            try {
                return await this.dataSource.delete(dto);
            }
            catch (error) {
                throw error;
            }
        };

        public async findById(dto: FindAppointmentByIdReq): Promise<FindAppointmentByIdRes> {
            try {
                return await this.dataSource.findById(dto);
            }
            catch (error) {
                throw error;
            }
        }

        public async getAll(dto: GetAllAppointmentsReq): Promise<GetAllAppointmentsRes> {
            try {
                return await this.dataSource.getAll(dto); 
            }
            catch (error) {
                throw error;
            }
        }

        public async getAllByStatus(dto: GetAllAppointmentsByStatusReq): Promise<GetAllAppointmentsByStatusRes> {
            try {
                return await this.dataSource.getAllByStatus(dto);
            }
            catch (error) {
                throw error;
            }
        }

        public async createAppointmentDetail(dto: CreateAppointmentDetailReq): Promise<CreateAppointmentDetailRes> {
            try {
                return await this.dataSource.createAppointmentDetail(dto);
            }
            catch (error) {
                throw error;
            }
        }

}
