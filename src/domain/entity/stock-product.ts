export class StockProduct {

    public currentAmountMl: number;
    public minimumStockMl: number;

    private constructor(
        currentAmountMl: number,
        minimumStockMl: number
    ) {
        this.currentAmountMl = currentAmountMl;
        this.minimumStockMl = minimumStockMl;
    }

    static fromObject(object: { [key: string]: any }): StockProduct {
        return new StockProduct(
            object.currentAmountMl,
            object.minimumStockMl
        );
    }
}