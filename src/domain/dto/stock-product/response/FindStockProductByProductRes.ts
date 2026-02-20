import type { Session } from "../../../entity/session";
import type { StockProduct } from "../../../entity/stock-product";

export interface FindStockProductByProductRes {
    stock: StockProduct;
    session: Session;
}