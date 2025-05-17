import useGenres from "@/hooks/useGenres"
import useGameQueryStore from "@/store";
import { HStack, List, Image, Spinner, Link, Heading } from "@chakra-ui/react"

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  // 这个组件的更新只是依赖于 genreId/setGenreId
  const genreId = useGameQueryStore(s => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore(s => s.setGenreId);
  if (error) return null;
  return (
    <>
      <Heading as="h2" fontSize="2xl" marginY={5}>Genres</Heading>
      <List.Root>
        {isLoading && <Spinner />}
        {!isLoading && data?.results.map(genre => (
          <List.Item key={genre.id} paddingY={5} listStyle={"none"}>
            <HStack>
              <Image
                src={genre.image_background}
                alt={genre.name}
                boxSize="32px"
                borderRadius="md"
                objectFit="cover"
              />
              <Link fontWeight={genre.id === genreId ? "bold" : "normal"} onClick={() => setGenreId(genre.id)} fontSize="lg" colorPalette="white">{genre.name}</Link>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
    
  )
}

export default GenreList