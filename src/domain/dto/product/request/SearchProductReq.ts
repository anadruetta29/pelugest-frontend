import { Session } from '../../../entity/session';

export interface SearchProductReq {
    name: string;
    page: number;
    limit: number;
    session: Session;
}