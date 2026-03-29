import { StockProduct } from './../../../entity/stock-product';
import { Session } from '../../../entity/session';

export interface CreateStockProductRes {
    stock: StockProduct;
    session: Session;
}
