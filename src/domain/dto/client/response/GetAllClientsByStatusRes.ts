import type { Client } from "../../../entity/client";

export interface GetAllClientsByStatusRes {
    clients: Client[];
}