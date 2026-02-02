import axios from "axios";
import { env } from "./env";

export class HTTPClient {
  private readonly baseURL: string;

  constructor() {
    this.baseURL = env.BASE_URL!;
  }

  private buildHeaders(token?: string) {
    const headers: any = {};
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    return headers;
  }

  public async get(url: string, params?: any, token?: string) {
    try {
      let finalUrl = `${this.baseURL}${url}`;
      let queryParams = undefined;

      if (typeof params === "string") {
        finalUrl += `/${params}`;
      } else if (typeof params === "object" && params !== null) {
        queryParams = params;
      }

      const response = await axios.get(finalUrl, {
        headers: this.buildHeaders(token),
        params: queryParams,
      });

      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message ?? "Request error");
    }
  }

  public async post(url: string, params?: any, token?: string) {
    try {
      const response = await axios.post(
        this.baseURL + url,
        params,
        {
          headers: this.buildHeaders(token),
        }
      );

      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message ?? "Request error");
    }
  }

  public async put(url: string, params?: any, token?: string) {
    try {
      const response = await axios.put(
        this.baseURL + url,
        params,
        {
          headers: this.buildHeaders(token),
        }
      );

      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message ?? "Request error");
    }
  }

  public async patch(url: string, params?: any, token?: string) {
    try {
      const response = await axios.patch(
        this.baseURL + url,
        params,
        {
          headers: this.buildHeaders(token),
        }
      );

      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message ?? "Request error");
    }
  }

  public async delete(url: string, params?: any, token?: string) {
    try {
      const response = await axios.delete(this.baseURL + url, {
        headers: this.buildHeaders(token),
        data: params,
      });

      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message ?? "Request error");
    }
  }
}
