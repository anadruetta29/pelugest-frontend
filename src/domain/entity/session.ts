import { Token } from "./token";

export class Session {
    public token: Token;

    constructor(token: Token) {
        this.token = token;
    }

    public static fromObject(object: { [key: string]: any }): Session | null {
        if (!object || !object.token) return null;

        const tokenInstance = Token.fromObject(object.token);
        
        if (!tokenInstance) return null;

        return new Session(tokenInstance);
    };

    public getAccessToken(): string {
        return this.token.accessToken;
    }
}