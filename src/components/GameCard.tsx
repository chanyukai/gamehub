import { Card, Image, Heading, HStack } from "@chakra-ui/react"

import type { Game } from "@/hooks/useGames"
import PlatformToIcon from "./PlatformToIcon"
import CritiScore from "./CritiScore"

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root overflow={"hidden"} borderRadius="md">
      <Image src={game.background_image} />
      <Card.Body>
        <Heading fontSize="2xl"> {game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformToIcon platforms={game.parent_platforms.map(p => p.platform)} />
          <CritiScore score={game.metacritic} />
        </HStack>
      </Card.Body>
      {/* <Card.Header>
        <Heading size="md">{game.name}</Heading>
      </Card.Header> */}
    </Card.Root>
  )
}

export default GameCard