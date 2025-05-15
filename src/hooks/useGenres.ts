import { useQuery } from "@tanstack/react-query";
import APIClient from "@/services/apiClient";
import genres from '../data/genres';
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>('/genres');


const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.get,
  staleTime: 24 * 60 * 60 * 1000, // 24hour
  initialData: { count: genres.length, results: genres }, // 缓存
});

export default useGenres;