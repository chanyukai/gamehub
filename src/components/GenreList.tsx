import useGenres, { type Genre } from "@/hooks/useGenres"
import { HStack, List, Image, Spinner, Link } from "@chakra-ui/react"

interface Props {
  onSelectedGenre: (genre: Genre) => void
}

const GenreList = ({ onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  return (
    <List.Root>
      {isLoading && <Spinner />}
      {!isLoading && data.map(genre => (
        <List.Item key={genre.id} paddingY={5} listStyle={"none"}>
          <HStack>
            <Image
              src={genre.image_background}
              alt={genre.name}
              boxSize="32px"
              borderRadius="md"
              objectFit="cover"
            />
            <Link onClick={() => onSelectedGenre(genre)} fontSize="lg" colorPalette="white">{genre.name}</Link>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  )
}

export default GenreList