import { Session } from '../../../entity/session';

export interface GetAllServicesByStatusReq {
    statusId: string;
    session: Session;
}