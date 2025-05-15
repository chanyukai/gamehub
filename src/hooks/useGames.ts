import type { GameQuery } from "@/App";
import { useInfiniteQuery, type InfiniteData } from "@tanstack/react-query";
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

const useGames = (gameQuery: GameQuery) => useInfiniteQuery<
  FetchResponse<Game>,        // queryFn 返回类型
  Error,                      // 错误类型
  InfiniteData<FetchResponse<Game>> // 自动包装分页数据
>({
  queryKey: ['games', gameQuery],
  queryFn: ({ pageParam = 1 }) => apiClient.get({
    params: {
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sort?.value,
      searchText: gameQuery.searchText,
      page: pageParam,
    }
  }),
  initialPageParam: 1,
  getNextPageParam: (lastPage, pages) => lastPage.next ? pages.length + 1 : undefined,
  staleTime: 24 * 60 * 60 * 1000
})


export default useGames;
