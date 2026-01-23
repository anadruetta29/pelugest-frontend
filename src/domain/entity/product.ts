import { RecordStatus } from "./record-status";
import type { ServiceProductRequirement } from "./service-product-requirement";
import type { StockProduct } from "./stock-product";

export class Product {

    public id: string;
    public name: string;
    public price: number;
    public serviceProductRequirement: ServiceProductRequirement; 
    public stock: StockProduct;
    public status: RecordStatus;

    private constructor(
        id: string,
        name: string,
        price: number,
        serviceProductRequirement: ServiceProductRequirement,
        stock: StockProduct,
        status: RecordStatus
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.serviceProductRequirement = serviceProductRequirement;
        this.stock = stock;
        this.status = status;
    }

    static fromObject(object: { [key: string]: any }): Product {
        return new Product(
            object.id,
            object.name,
            object.price,
            object.serviceProductRequirement,
            object.stock,
            object.status
        );
    }
}