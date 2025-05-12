import { useGames } from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "@/components/GameCard";
import GameCardSkeleton from "./GameCardSkeleton";


const GameGrid = () => {
  const { loading, error, games } = useGames();

  return (
     <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} gap={10} padding={10}>
      {loading && Array.from({ length: 10 }, (_, index) =>(
        <GameCardSkeleton key={index} />
      ))}
      {error && <Text>{error}</Text>}
      {!loading && !error && games.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  ) 
}

export default GameGrid