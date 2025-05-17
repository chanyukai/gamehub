import { Card, Image, Heading, HStack } from "@chakra-ui/react"

import type Game from "@/entities/Game"
import PlatformToIcon from "./PlatformToIcon"
import CritiScore from "./CritiScore"
import Emoji from "./Emoji"
import { Link } from "react-router"

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root overflow={"hidden"} borderRadius="md">
      <Image src={game.background_image} />
      <Card.Body>
        <HStack justifyContent={"space-between"} marginBottom={5}>
          <PlatformToIcon platforms={game.parent_platforms?.map(p => p.platform)} />
          <CritiScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl"> 
          <Link to={`/games/${game.slug}`}>
            {game.name} 
          </Link>
          <Emoji rating={game.rating_top} /></Heading>
      </Card.Body>
    </Card.Root>
  )
}

export default GameCard