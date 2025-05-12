import apiClient from "@/services/api_client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: [
    {platform: Platform;}
  ];
  metacritic: number;
}

interface FetchGamesResponse {
  results: Game[];
}

export const useGames = () => {


  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal })
      .then(res => {
        setGames(res.data.results)
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

  return { games, loading, error };
}