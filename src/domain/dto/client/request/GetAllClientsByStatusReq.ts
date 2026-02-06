import { Session } from '../../../entity/session';

export interface GetAllClientsByStatusReq {
    statusId: string;
    session: Session;
}