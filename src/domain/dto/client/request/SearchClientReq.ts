import { Session } from './../../../entity/session';

export interface SearchClientReq {
    name: string;
    page: number;
    limit: number;
    session: Session;
}