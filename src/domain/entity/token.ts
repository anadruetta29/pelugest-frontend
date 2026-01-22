export class Token {

    public accessToken: string;

    constructor(accessToken: string) {
        this.accessToken = accessToken;
    }

    public static fromObject(object: { [key: string]: any }): Token | null {
        if (!object) return null;

        return new Token(
            object.accessToken
        );
    }
}