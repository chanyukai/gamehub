import { Badge } from "@chakra-ui/react";

interface CritiScoreProps {
  score: number;
}

const CritiScore = ({ score }: CritiScoreProps) => {
  return (
    <Badge
      colorScheme={score > 75 ? "green" : score > 50 ? "yellow" : "red"}
      fontSize="14px"
      padding={2}
      borderRadius="4px"
      textAlign="center">{score}</Badge>
  )
}

export default CritiScore