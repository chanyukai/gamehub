import { useQuery } from "@tanstack/react-query";
import APIClient from "@/services/apiClient";
import platforms  from "../data/platforms";
import type Platform from "../entities/Platform";

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: apiClient.get,
  staleTime: 24 * 60 * 60 * 1000, // 24hour
  // initialData: { count: platforms.length, results: platforms, next: null }
  initialData: platforms
})

export default usePlatforms;