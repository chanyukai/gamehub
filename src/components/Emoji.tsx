import thumbs from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import bulls from "../assets/bulls-eye.webp";
import { Image, type ImageProps } from "@chakra-ui/react";

interface EmojiProps {
  // Define any props you need here
  // For example:
  rating: number;
}

const Emoji = ({ rating }: EmojiProps) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbs, alt: "thumbs-up", boxSize: "25px" },
    5: { src: bulls, alt: "bulls-eye", boxSize: "35px" },
  };
  return (
    <Image {...emojiMap[rating]}marginTop={2} />
  )
}

export default Emoji