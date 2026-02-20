import type { Product } from '../../../entity/product';
import { Session } from '../../../entity/session';
import type { StockMovementType } from '../../../entity/stock-movement-type';
import type { User } from '../../../entity/user';

export interface CreateStockMovementRes {
    quantityMl: number;
    type: StockMovementType;
    createdAt: Date;
    product: Product;
    user: User;
    session: Session;
}

