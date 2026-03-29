import { Session } from '../../../entity/session';

export interface CreateStockProductReq {
    currentAmountMl: number;
    minimumStockMl: number;
    productId: string;
    session: Session;
}
