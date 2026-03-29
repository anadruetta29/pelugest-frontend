import { Session } from '../../../entity/session';

export interface GetAllAppointmentsByStatusReq {
    statusId: string;
    session: Session;
}