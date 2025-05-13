import apiClient from "@/services/api_client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiClient.get<FetchResponse<T>>(endpoint, { signal: controller.signal })
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
  }, []);

  return { data, isLoading, error };
  
}

export default useData;