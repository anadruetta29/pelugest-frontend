import type { Product } from "./product";
import type { StockMovementType } from "./stock-movement-type";
import type { User } from "./user";

export class StockMovement {

    public id: string;
    public quantityMl: number;
    public type: string;
    public createdAt: Date;
    public product: Product;
    public user: User;

    private constructor(
        id: string,
        quantityMl: number,
        type: string,
        createdAt: Date,
        product: Product,
        user: User,
    ) {
        this.id = id;
        this.quantityMl = quantityMl;
        this.type = type;
        this.createdAt = createdAt;
        this.product = product;
        this.user = user;
    }

    static fromObject(object: { [key: string]: any }): StockMovement {
        return new StockMovement(
            object.id,
            object.quantityMl,
            object.type, 
            object.createdAt ? new Date(object.createdAt) : new Date(),
            object.product,
            object.user
        );
    }
}