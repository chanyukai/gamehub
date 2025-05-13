import type { GameQuery } from "@/App"
import { Heading } from "@chakra-ui/react"

interface Props {
  gameQuery: GameQuery
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`
  return (
    <Heading marginY={5} padding={5} as="h1" fontSize="5xl">{heading}</Heading>
  )
}

export default GameHeading