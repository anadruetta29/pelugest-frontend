import type { Product } from "./product";
import { RecordStatus } from "./record-status"; 
import { StockMovementType } from "./stock-movement-type";
import type { User } from "./user";

export class StockMovement {

    public id: string;
    public quantityMl: number;
    public type: StockMovementType;
    public createdAt: Date;
    public product: Product;
    public user: User;
    public status?: RecordStatus; 

    private constructor(
        id: string,
        quantityMl: number,
        type: StockMovementType,
        createdAt: Date,
        product: Product,
        user: User,
        status?: RecordStatus
    ) {
        this.id = id;
        this.quantityMl = quantityMl;
        this.type = type;
        this.createdAt = createdAt;
        this.product = product;
        this.user = user;
        this.status = status;
    }

    static fromObject(object: { [key: string]: any }): StockMovement {
        return new StockMovement(
            object.id,
            object.quantityMl,
            StockMovementType.fromObject(object.type), 
            object.createdAt ? new Date(object.createdAt) : new Date(),
            object.product,
            object.user,
            object.status ? RecordStatus.fromObject(object.status) : undefined
        );
    }
}