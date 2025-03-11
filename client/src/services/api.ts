/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosInstance, AxiosResponse } from 'axios';
import axios from './axios';


export async function fetchData<T>(url: string, customAdapter?: AxiosInstance, headers?: any): Promise<T> {
	const adapter = customAdapter || axios;
	const response: AxiosResponse<T> = await adapter.get<T>(url, { headers });
	return response.data;
}
export async function postData<T>(url: string, data: any, customAdapter?: AxiosInstance, headers?: any): Promise<T> {
	const adapter = customAdapter || axios;
	const response: AxiosResponse<T> = await adapter.post<T>(url, data, { headers });
	return response.data;
}