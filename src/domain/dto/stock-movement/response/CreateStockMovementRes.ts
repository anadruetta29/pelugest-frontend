import type { Product } from '../../../entity/product';
import { Session } from '../../../entity/session';
import type { StockMovement } from '../../../entity/stock-movement';
import type { StockMovementType } from '../../../entity/stock-movement-type';
import type { User } from '../../../entity/user';

export interface CreateStockMovementRes {
    stockMovement: StockMovement;
}

