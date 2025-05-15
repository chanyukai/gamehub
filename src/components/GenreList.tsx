import useGenres, { type Genre } from "@/hooks/useGenres"
import { HStack, List, Image, Spinner, Link, Heading } from "@chakra-ui/react"

interface Props {
  onSelectedGenre: (genre: Genre) => void,
  selectedGenreId?: number
}

const GenreList = ({ selectedGenreId ,onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
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
              <Link fontWeight={genre.id === selectedGenreId ? "bold" : "normal"} onClick={() => onSelectedGenre(genre)} fontSize="lg" colorPalette="white">{genre.name}</Link>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
    
  )
}

export default GenreList