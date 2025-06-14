import { useQuery } from "@tanstack/react-query";
import APIClient from "@/services/apiClient";
import genres from '../data/genres';
import type Genre from "../entities/Genre";
const apiClient = new APIClient<Genre>('/genres');


const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.get,
  staleTime: 24 * 60 * 60 * 1000, // 24hour
  // initialData: { count: genres.length, results: [], next: null }, // 缓存
  initialData: genres,
});

export default useGenres;