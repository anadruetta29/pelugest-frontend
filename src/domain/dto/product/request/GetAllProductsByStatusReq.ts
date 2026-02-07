import { Session } from '../../../entity/session';

export interface GetAllProductsByStatusReq {
    statusId: string;
    session: Session;
}