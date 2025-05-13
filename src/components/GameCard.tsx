import { Card, Image, Heading, HStack } from "@chakra-ui/react"

import type { Game } from "@/hooks/useGames"
import PlatformToIcon from "./PlatformToIcon"
import CritiScore from "./CritiScore"
import Emoji from "./Emoji"

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root overflow={"hidden"} borderRadius="md">
      <Image src={game.background_image} />
      <Card.Body>
        <HStack justifyContent={"space-between"} marginBottom={5}>
          <PlatformToIcon platforms={game.parent_platforms.map(p => p.platform)} />
          <CritiScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl"> {game.name} <Emoji rating={game.rating_top} /></Heading>
      </Card.Body>
      {/* <Card.Header>
        <Heading size="md">{game.name}</Heading>
      </Card.Header> */}
    </Card.Root>
  )
}

export default GameCard