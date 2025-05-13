import useGenres from "@/hooks/useGenres"
import { HStack, List, Image, Text } from "@chakra-ui/react"

const GenreList = () => {
  const { data, isLoading, error } = useGenres()
  return (
    <List.Root>
      {isLoading && <li>Loading...</li>}
      {error && <li>{error}</li>}
      {!isLoading && !error && data.map(genre => (
        <List.Item key={genre.id} paddingY={5} listStyle={"none"}>
          <HStack>
            <Image
              src={genre.image_background}
              alt={genre.name}
              boxSize="32px"
              borderRadius="md"
              objectFit="cover"
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  )
}

export default GenreList