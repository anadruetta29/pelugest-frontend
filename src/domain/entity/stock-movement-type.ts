import { Optionable } from "./optionable";

export class StockMovementType extends Optionable {

    static readonly IN = "IN";
    static readonly OUT = "OUT";
    static readonly ADJUSTMENT = "ADJUSTMENT";

    constructor(id: string, name: string) {
        super(id, name);
    }

    public static getStockMovementsList(): StockMovementType[] {
        return [
            new StockMovementType(StockMovementType.IN, "Ingreso"),
            new StockMovementType(StockMovementType.OUT, "Egreso"),
            new StockMovementType(StockMovementType.ADJUSTMENT, "Ajuste")
        ];
    }

    public static fromObject(object: { [key: string]: any }): StockMovementType {
        return new StockMovementType(object.id, object.name);
    }
}