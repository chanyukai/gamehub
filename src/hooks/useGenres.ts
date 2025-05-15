import { useQuery } from "@tanstack/react-query";
import apiClient, { type FetchResponse } from "@/services/apiClient";
import genres from '../data/genres';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: () => apiClient.get<FetchResponse<Genre>>('/genres').then(res => res.data),
  staleTime: 24 * 60 * 60 * 1000, // 24hour
  initialData: { count: genres.length, results: genres }, // 缓存
});

export default useGenres;