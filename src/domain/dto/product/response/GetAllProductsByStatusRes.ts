import type { Product } from "../../../entity/product";

export interface GetAllProductsByStatusRes {
    products: Product[];
}