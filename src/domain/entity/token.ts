export class Token {
    public accessToken: string;

    constructor(accessToken: string) {
        this.accessToken = accessToken;
    }

    public static fromObject(object: any): Token | null {

        const tokenValue = object.accessToken || object.token;
        
        if (!tokenValue || typeof tokenValue !== "string") return null;

        return new Token(tokenValue);
    }

}
