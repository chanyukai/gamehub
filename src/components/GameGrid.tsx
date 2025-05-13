import useGames, { type Platform } from "@/hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "@/components/GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { Genre } from "@/hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { isLoading, error, data } = useGames(selectedGenre, selectedPlatform);
  if (error) return null;
  return (
     <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} gap={5} padding={5}>
      {isLoading && Array.from({ length: 10 }, (_, index) =>(
        <GameCardContainer  key={index}><GameCardSkeleton /></GameCardContainer>
      ))}
      {!isLoading && data.map(game => (
        <GameCardContainer key={game.id}><GameCard game={game} /></GameCardContainer>
      ))}
    </SimpleGrid>
  ) 
}

export default GameGrid