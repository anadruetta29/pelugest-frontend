import { Session } from '../../../entity/session';

export interface SearchServiceReq {
    name: string;
    page: number;
    limit: number;
    session: Session;
}