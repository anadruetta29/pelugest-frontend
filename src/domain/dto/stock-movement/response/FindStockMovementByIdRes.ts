import type { Session } from "../../../entity/session";

export interface FindStockMovementByIdRes {
    id: string;
    session: Session;
}