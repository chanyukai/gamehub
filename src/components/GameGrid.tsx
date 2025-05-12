import { useGames } from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "@/components/GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";


const GameGrid = () => {
  const { loading, error, games } = useGames();

  return (
     <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} gap={10} padding={10}>
      {loading && Array.from({ length: 10 }, (_, index) =>(
        <GameCardContainer><GameCardSkeleton key={index} /></GameCardContainer>
      ))}
      {error && <Text>{error}</Text>}
      {!loading && !error && games.map(game => (
        <GameCardContainer><GameCard key={game.id} game={game} /></GameCardContainer>
      ))}
    </SimpleGrid>
  ) 
}

export default GameGrid