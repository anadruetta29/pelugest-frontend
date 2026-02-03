import axios from "axios";
import { env } from "./env";

export class HTTPClient {
    private readonly baseURL: string;

    constructor() {
        this.baseURL = env.BASE_URL!;
    }

    private getToken(): string | undefined {
        const sessionRaw = localStorage.getItem("session");
        if (!sessionRaw) return undefined;

        try {
            const session = JSON.parse(sessionRaw);
            return session?.token?.accessToken;
        } catch {
            return undefined;
        }
    }

    private buildHeaders(token?: string) {
        const finalToken = token ?? this.getToken();
        return finalToken
            ? { Authorization: `Bearer ${finalToken}` }
            : {};
    }

    async get(url: string, params?: any, token?: string) {
        const response = await axios.get(
            `${this.baseURL}${url}`,
            {
                params,
                headers: this.buildHeaders(token),
            }
        );
        return response.data;
    }

    async post(url: string, body?: any, token?: string) {
        const response = await axios.post(
            `${this.baseURL}${url}`,
            body,
            { headers: this.buildHeaders(token) }
        );
        return response.data;
    }

    async put(url: string, body?: any, token?: string) {
        const response = await axios.put(
            `${this.baseURL}${url}`,
            body,
            { headers: this.buildHeaders(token) }
        );
        return response.data;
    }

    async patch(url: string, body?: any, token?: string) {
        const response = await axios.patch(
            `${this.baseURL}${url}`,
            body,
            { headers: this.buildHeaders(token) }
        );
        return response.data;
    }

    async delete(url: string, body?: any, token?: string) {
        const response = await axios.delete(
            `${this.baseURL}${url}`,
            {
                data: body,
                headers: this.buildHeaders(token),
            }
        );
        return response.data;
    }
}
