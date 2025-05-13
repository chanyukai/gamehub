import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "@/components/GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";


const GameGrid = () => {
  const { isLoading, error, data } = useGames();

  return (
     <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} gap={10} padding={10}>
      {isLoading && Array.from({ length: 10 }, (_, index) =>(
        <GameCardContainer  key={index}><GameCardSkeleton /></GameCardContainer>
      ))}
      {error && <Text>{error}</Text>}
      {!isLoading && !error && data.map(game => (
        <GameCardContainer key={game.id}><GameCard game={game} /></GameCardContainer>
      ))}
    </SimpleGrid>
  ) 
}

export default GameGrid