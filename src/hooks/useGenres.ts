import apiClient from "@/services/api_client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface Genre {
  id: number;
  name: string;
}


interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiClient.get<FetchGenresResponse>('/genres', { signal: controller.signal })
      .then(res => {
        setGenres(res.data.results)
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

  return { genres, isLoading, error };
}

export default useGenres;