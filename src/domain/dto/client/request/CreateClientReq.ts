import { Session } from './../../../entity/session';

export interface CreateClientReq {
    name: string;
    surname: string;
    mobilePhoneNumber: string;
    landlineNumber: string;
    session: Session;
}
