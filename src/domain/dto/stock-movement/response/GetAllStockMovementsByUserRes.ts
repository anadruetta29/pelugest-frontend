import type { StockMovement } from "../../../entity/stock-movement";

export interface GetAllStockMovementsByUserRes {
    movements: StockMovement[];
}