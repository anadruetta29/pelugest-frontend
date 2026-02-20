import { Session } from '../../../entity/session';

export interface UpdateStockMovementReq {
    id: string;
    quantityMl: number;
    type: string;
    productId: string;
    userId: string;
    session: Session;
}


