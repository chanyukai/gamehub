import { useGames } from "@/hooks/useGames";
import { Text } from "@chakra-ui/react";


const GameGrid = () => {
  const { loading, error, games } = useGames();


  if (loading) return <Text>Loading...</Text> 

  if (error) return <Text>Error: {error}</Text>
  
  return (
     <ul>
      {!loading && !error && games.map(game => (
        <li key={game.id}>
          <h2>{game.name}</h2>
        </li>
      ))}
    </ul>
  ) 
}

export default GameGrid