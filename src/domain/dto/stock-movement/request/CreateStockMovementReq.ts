import { Session } from '../../../entity/session';

export interface CreateStockMovementReq {
    quantityMl: number;
    type: string;
    productId: string;
    userId: string;
    session: Session;
}


