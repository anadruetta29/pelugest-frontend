import {Session} from '../../domain';
import {Errors} from "../../domain";
import type { SessionDataSourceI } from '../../domain/datasource/session';
import type { SaveSessionReq } from '../../domain/dto/session/request/SaveSessionReq';
import type { GetSessionRes } from '../../domain/dto/session/response/GetSessionRes';

export class SessionLSDataSourceI implements SessionDataSourceI {

    public async getSession(): Promise<GetSessionRes> {
        try {
            const session = localStorage.getItem("session");
            const sessionParsed = JSON.parse(session || "");
            const sessionInstance = Session.fromObject(sessionParsed);

            if (!sessionInstance) {
                throw new Error(Errors.NO_SESSION_SAVED_ERROR);
            }

            return {
                session: sessionInstance,
            };
        }
        catch (error) {
            throw new Error(Errors.GET_SESSION_ERROR);
        }
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