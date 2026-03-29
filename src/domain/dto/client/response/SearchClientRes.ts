import type { Client } from "../../../entity/client";

export interface SearchClientRes {
    clients: Client[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}