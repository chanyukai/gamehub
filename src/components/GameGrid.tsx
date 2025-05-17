import useGames from "@/hooks/useGames";
import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import GameCard from "@/components/GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import InfiniteScroll from 'react-infinite-scroll-component';
import React from "react";

const GameGrid = () => {
  const { isLoading, error, data, fetchNextPage, hasNextPage } = useGames();

  const fetchGameCount = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0

  if (error) return <Text>{ error.message }</Text>;
  return (
    <InfiniteScroll
      dataLength={fetchGameCount}
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={<Spinner />}
      >
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} gap={5} padding={5}>
        {isLoading && Array.from({ length: 10 }, (_, index) =>(
          <GameCardContainer  key={index}><GameCardSkeleton /></GameCardContainer>
        ))}
        {!isLoading && data?.pages.map((page, index) => <React.Fragment key={index}>
          {page.results.map(game => <GameCardContainer key={game.id}><GameCard game={game} /></GameCardContainer>)}
        </React.Fragment>)}
      </SimpleGrid>
    </InfiniteScroll>
  ) 
}

export default GameGrid