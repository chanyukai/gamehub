import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
 
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import type { Platform } from "@/hooks/usePlatforms"
import { HStack, Icon } from "@chakra-ui/react"
import type { IconType } from "react-icons";

interface PlatformToIconProps {
  platforms: Platform[]
}
const PlatformToIcon = ({ platforms }: PlatformToIconProps) => {

  const iconMap: { [key: string]: IconType} = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux, 
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe
  }

  return (
    <HStack marginY={2}>
      {platforms.map((platform) => <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500"></Icon>)}
    </HStack>
  )
}

export default PlatformToIcon