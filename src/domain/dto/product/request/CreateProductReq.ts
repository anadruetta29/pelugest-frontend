import { Session } from '../../../entity/session';

export interface CreateProducttReq {
    name: string;
    price: number;
    session: Session;
}
