import type { StockMovement } from "../../../entity/stock-movement";

export interface GetAllStockMovementsByProductRes {
    stockMovements: StockMovement[];
}