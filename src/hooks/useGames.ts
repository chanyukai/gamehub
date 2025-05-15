import type { GameQuery } from "@/App";
import { useQuery } from "@tanstack/react-query";
import APIClient, { type FetchResponse } from "@/services/apiClient";
import type { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: [
    {platform: Platform;}
  ];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClient<Game>('/games');

const useGames = (gameQuery: GameQuery) => useQuery<FetchResponse<Game>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: () => apiClient.get({
    params: {
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sort?.value,
      searchText: gameQuery.searchText,
    }
  })
})


export default useGames;
