import useGenres from "@/hooks/useGenres"
import { HStack, List, Image, Text, Spinner } from "@chakra-ui/react"

const GenreList = () => {
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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  )
}

export default GenreList