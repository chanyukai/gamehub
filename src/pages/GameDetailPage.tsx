import ExpandableText from "@/components/ExpandableText";
import GameAttributes from "@/components/GameAttributes";
import GameScreenShot from "@/components/GameScreenShot";
import GameTrailer from "@/components/GameTrailer";
import useGame from "@/hooks/useGame";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router"

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />

  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
      <GridItem>
        <Heading marginBottom={3}>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenShot gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  )
}

export default GameDetailPage;