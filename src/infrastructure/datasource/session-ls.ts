import {Errors, Session} from "../../domain";
import type { SessionDataSourceI } from '../../domain/datasource/session';
import type { SaveSessionReq } from '../../domain/dto/session/request/SaveSessionReq';
import type { GetSessionRes } from '../../domain/dto/session/response/GetSessionRes';

export class SessionLSDataSourceI implements SessionDataSourceI {

    async getSession(): Promise<GetSessionRes> {
        const raw = localStorage.getItem("session");
        if (!raw) {
            return { session: null };
        }

        try {
            const parsed = JSON.parse(raw);
            const session = Session.fromObject(parsed);

            return { session };
        } catch {
            return { session: null };
        }
    }

    async saveSession(dto: SaveSessionReq): Promise<void> {
        localStorage.setItem(
            "session",
            JSON.stringify(dto.session)
        );
    }
    
}