import useScreenShots from "@/hooks/useScreenShots";
import { Image, SimpleGrid } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenShot = ({ gameId }: Props) => {
  const {data, error, isLoading } = useScreenShots(gameId);
  if (isLoading) return null;

  if (error) throw error;


  return (
    <SimpleGrid columns={{ base: 1, md: 2}} gap={4} marginY={10}>
      { data?.results.map(file => <Image key={file.id} src={file.image}></Image>)}
    </SimpleGrid>
  )
}

export default GameScreenShot