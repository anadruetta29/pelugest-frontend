import { Session } from './../../../entity/session';

export interface CreateClientReq {
    name: string;
    surname: string;
    mobilePhoneNumber: string;
    landlinePhoneNumber?: string;
    session: Session;
}
