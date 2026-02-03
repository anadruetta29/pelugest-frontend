export class Token {
    public accessToken: string;

    constructor(accessToken: string) {
        this.accessToken = accessToken;
    }

    public static fromObject(object: any): Token | null {
        if (!object || typeof object.accessToken !== "string") return null;

        return new Token(object.accessToken);
    }
}
