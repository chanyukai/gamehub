import apiClient from "@/services/api_client";
import { Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiClient.get<FetchGamesResponse>('/games')
      .then(res =>
        setGames(res.data.results)
      ).catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}
     <ul>
      {!loading && !error && games.map(game => (
        <li key={game.id}>
          <h2>{game.name}</h2>
        </li>
      ))}
    </ul>
    </>
   
  ) 
}

export default GameGrid