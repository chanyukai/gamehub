import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "@/components/GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { GameQuery } from "@/App";
interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { isLoading, error, data } = useGames(gameQuery);
  if (error) return <Text>{ error.message }</Text>;
  return (
     <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} gap={5} padding={5}>
      {isLoading && Array.from({ length: 10 }, (_, index) =>(
        <GameCardContainer  key={index}><GameCardSkeleton /></GameCardContainer>
      ))}
      {!isLoading && data?.results.map(game => (
        <GameCardContainer key={game.id}><GameCard game={game} /></GameCardContainer>
      ))}
    </SimpleGrid>
  ) 
}

export default GameGrid