import type { Product } from "../../../entity/product";

export interface SearchProductRes {
    products: Product[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}