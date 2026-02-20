import type { RecordStatus } from "../../../entity/record-status";
import type { Session } from "../../../entity/session";
import type { StockProduct } from "../../../entity/stock-product";

export interface UpdateStockProductRes {
    stock: StockProduct;
    session: Session;
}
