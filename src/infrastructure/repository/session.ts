import type { SessionDataSourceI } from "../../domain/datasource/session";
import type { SaveSessionReq } from "../../domain/dto/session/request/SaveSessionReq";
import type { GetSessionRes } from "../../domain/dto/session/response/GetSessionRes";
import type { SessionRepositoryI } from "../../domain/repository/session";
import { SessionLSDataSourceI } from "../datasource/session-ls";

export class SessionRepository implements SessionRepositoryI {

    private dataSource: SessionDataSourceI;

    constructor(dataSource: SessionRepositoryI = new SessionLSDataSourceI()) {
        this.dataSource = dataSource;
    }

    public async getSession(): Promise<GetSessionRes> {
        try {
            return await this.dataSource.getSession();
        }
        catch (error) {
            throw error;
        }
    }
    public async saveSession(dto: SaveSessionReq): Promise<void> {
        try {
            return await this.dataSource.saveSession(dto);
        }
        catch (error) {
            throw error;
        }
    }

}