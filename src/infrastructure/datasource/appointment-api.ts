import { HTTPClient } from "../../core";
import { AppointmentDataSourceI, ErrorHandler, type CreateAppointmentReq, type CreateAppointmentRes, type DeleteAppointmentReq, type FindAppointmentByIdReq, type FindAppointmentByIdRes, type GetAllAppointmentsByStatusReq, type GetAllAppointmentsByStatusRes, type GetAllAppointmentsReq, type GetAllAppointmentsRes, type UpdateAppointmentReq, type UpdateAppointmentRes } from "../../domain";

export class AppointmentApiDataSource implements AppointmentDataSourceI {

    private httpClient: HTTPClient;
    
    constructor() {
        this.httpClient = new HTTPClient();
    }

    public async create(dto: CreateAppointmentReq): Promise<CreateAppointmentRes> {
        try {
            const response = await this.httpClient.post(`/api/appointments/`, {...dto}, dto.session.getAccessToken());
            if (response.error) {
                throw ErrorHandler.handleError(response.error);
            }

            return response;
        }
        catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }
    
    public async update(dto: UpdateAppointmentReq): Promise<UpdateAppointmentRes> {
        try {
            const response = await this.httpClient.put(`/api/appointments/${dto.id}`, {...dto}, dto.session.getAccessToken());
            if (response.error) {
                throw ErrorHandler.handleError(response.error);
            }

            return response;
        }
        catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }

    public async delete(dto: DeleteAppointmentReq): Promise<void> {
        try {
            const response = await this.httpClient.delete(`/api/appointments/`, {...dto}, dto.session.getAccessToken());
            if (response.error) {
                throw ErrorHandler.handleError(response.error);
            }

            return response;
        }
        catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }

    public async findById(dto: FindAppointmentByIdReq): Promise<FindAppointmentByIdRes> {
        try {
            const response = await this.httpClient.get(`/api/appointments/${dto.id}`, {...dto}, dto.session.getAccessToken());
            if (response.error) {
                throw ErrorHandler.handleError(response.error);
            }

            return response;
        }
        catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }

    public async getAll(dto: GetAllAppointmentsReq): Promise<GetAllAppointmentsRes> {
        try {
            const response = await this.httpClient.get(
                `/api/appointments/`,
                undefined,
                dto.session.getAccessToken()
            );
            if (response.error) {
            throw ErrorHandler.handleError(response.error);
            }
            return response;
        } catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }
    
    public async getAllByStatus(dto: GetAllAppointmentsByStatusReq): Promise<GetAllAppointmentsByStatusRes> {
        try {
            const response = await this.httpClient.get(
                `/api/appointments/status/${dto.statusId}`,
                undefined,
                dto.session.getAccessToken()
            );

            if (response.error) {
            throw ErrorHandler.handleError(response.error);
            }

            return response;
        } catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }

        
}