import useGames from "@/hooks/useGames";
import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "@/components/GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { GameQuery } from "@/App";
import React from "react";
interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { isLoading, error, data, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames(gameQuery);
  if (error) return <Text>{ error.message }</Text>;
  return (
    <Box padding={5}>
     <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} gap={5}>
      {isLoading && Array.from({ length: 10 }, (_, index) =>(
        <GameCardContainer  key={index}><GameCardSkeleton /></GameCardContainer>
      ))}
      {!isLoading && data?.pages.map((page, index) => <React.Fragment key={index}>
        {page.results.map(game => <GameCardContainer key={game.id}><GameCard game={game} /></GameCardContainer>)}
      </React.Fragment>)}
    </SimpleGrid>
    {hasNextPage && (
      <Button onClick={() => fetchNextPage()}  marginY={5}>
        {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
              ? 'Load More'
              : 'Nothing more to load'}
      </Button>
    )}
    </Box>
  ) 
}

export default GameGrid