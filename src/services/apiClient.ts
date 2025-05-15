import axios, { type AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
  timeout: 10000,
}); 

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
 
  get = (config: AxiosRequestConfig) => axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data)

  post = (data: T)  => axiosInstance.post<T>(this.endpoint, data).then(res => res.data)
}

export default APIClient;