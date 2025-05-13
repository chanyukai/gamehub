import apiClient from "@/services/api_client";
import { CanceledError, type AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiClient.get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
      .then(res => {
        setData(res.data.results)
        setLoading(false)
      }
      ).catch(error => {
          if (error instanceof CanceledError) return;
          setError(error.message)
          setLoading(false)
        }
      )

    return () => controller.abort();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps ? [...deps] : []);

  return { data, isLoading, error };
  
}

export default useData;