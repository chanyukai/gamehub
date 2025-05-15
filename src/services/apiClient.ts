import axios from 'axios';

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
  timeout: 10000,
}); 

export default apiClient;