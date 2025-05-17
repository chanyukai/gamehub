import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";
import type Game from "../entities/Game";

const apiClient = new APIClient<Game>('/games')
const useGame = (slug: string) => useQuery({
  queryKey: ['games', slug],
  queryFn: () => apiClient.getDetail(slug)
})

export default useGame;