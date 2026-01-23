import {Errors, Session} from "../../domain";
import type { SessionDataSourceI } from '../../domain/datasource/session';
import type { SaveSessionReq } from '../../domain/dto/session/request/SaveSessionReq';
import type { GetSessionRes } from '../../domain/dto/session/response/GetSessionRes';

export class SessionLSDataSourceI implements SessionDataSourceI {

    public async getSession(): Promise<GetSessionRes> {
        const session = localStorage.getItem("session");

        if (!session) {
            throw new Error(Errors.NO_SESSION_SAVED_ERROR);
        }

        const sessionParsed = JSON.parse(session);

        return {
            session: Session.fromObject(sessionParsed)!,
        };
    }


    public async saveSession(dto: SaveSessionReq): Promise<void> {
        try {
            const sessionString = JSON.stringify(dto.session);
            localStorage.setItem("session", sessionString);
        }
        catch (error) {
            throw new Error(Errors.SAVE_SESSION_ERROR);
        }
    }

}