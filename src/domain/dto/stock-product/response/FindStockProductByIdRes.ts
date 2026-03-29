import type { Session } from "../../../entity/session";
import type { StockProduct } from "../../../entity/stock-product";

export interface FindStockProductByIdRes {
    stock: StockProduct;
    session: Session;
}