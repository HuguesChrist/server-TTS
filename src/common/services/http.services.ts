import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';

@Injectable()
export class HttpService {
  async get<T>(url: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.get(url);
      return response.data;
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      throw new Error(
        `Failed to perform GET request to ${url}: ${errorMessage}`,
      );
    }
  }

  async post<T>(url: string, data: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.post(url, data);
      return response.data;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      throw new Error(
        `Failed to perform POST request to ${url}: ${errorMessage}`,
      );
    }
  }

  async put<T>(url: string, data: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.put(url, data);
      return response.data;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      throw new Error(
        `Failed to perform PUT request to ${url}: ${errorMessage}`,
      );
    }
  }

  async patch<T>(url: string, data: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.patch(url, data);
      return response.data;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      throw new Error(
        `Failed to perform PATCH request to ${url}: ${errorMessage}`,
      );
    }
  }

  async delete<T>(url: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.delete(url);
      return response.data;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      throw new Error(
        `Failed to perform DELETE request to ${url}: ${errorMessage}`,
      );
    }
  }
}
