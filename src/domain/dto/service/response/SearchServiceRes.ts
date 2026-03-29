import type { Service } from "../../../entity/service";

export interface SearchServiceRes {
    services: Service[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}