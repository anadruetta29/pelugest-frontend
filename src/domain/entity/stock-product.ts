export class StockProduct {

    public id: string;
    public currentAmountMl: number;
    public minimumStockMl: number;

    private constructor(
        id: string,
        currentAmountMl: number,
        minimumStockMl: number
    ) {
        this.currentAmountMl = currentAmountMl;
        this.minimumStockMl = minimumStockMl;
    }

    static fromObject(object: { [key: string]: any }): StockProduct {
        return new StockProduct(
            object.id,
            object.currentAmountMl,
            object.minimumStockMl
        );
    }
}