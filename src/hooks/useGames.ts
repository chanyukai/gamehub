import { useInfiniteQuery, type InfiniteData } from "@tanstack/react-query";
import APIClient, { type FetchResponse } from "@/services/apiClient";
import useGameQueryStore from "@/store";
import type { Game } from "../entities/Game";

const apiClient = new APIClient<Game>('/games');

const useGames = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery);
  return useInfiniteQuery<
    FetchResponse<Game>,        // queryFn 返回类型
    Error,                      // 错误类型
    InfiniteData<FetchResponse<Game>> // 自动包装分页数据
  >({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) => apiClient.get({
      params: {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam,
      }
    }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => lastPage.next ? pages.length + 1 : undefined,
    staleTime: 24 * 60 * 60 * 1000
  })
}


export default useGames;
