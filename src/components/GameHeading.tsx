import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import useGameQueryStore from "@/store";
import { Heading } from "@chakra-ui/react"

const GameHeading = () => {
  const genreId = useGameQueryStore(s => s.gameQuery.genreId);
  const genre = useGenre(genreId);
  const platformId = useGameQueryStore(s => s.gameQuery.platformId);
  const platform = usePlatform(platformId);
  const heading = `${ platform?.name || "" } ${ genre?.name || "" } Games`
  return (
    <Heading marginY={5} padding={5} as="h1" fontSize="5xl">{heading}</Heading>
  )
}

export default GameHeading