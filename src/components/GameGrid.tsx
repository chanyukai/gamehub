import { useGames } from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "@/components/GameCard";


const GameGrid = () => {
  const { loading, error, games } = useGames();


  if (loading) return <Text>Loading...</Text> 

  if (error) return <Text>Error: {error}</Text>
  
  return (
     <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} gap={10} padding={10}>
      {!loading && !error && games.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  ) 
}

export default GameGrid