import { Session } from './../../../entity/session';

export interface GetAllByStatusReq {
    statusId: string;
    session: Session;
}