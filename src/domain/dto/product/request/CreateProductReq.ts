import { Session } from '../../../entity/session';

export interface CreateProductReq {
    name: string;
    price: number;
    session: Session;
}
