import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaQuestionCircle,
} from "react-icons/fa";
import { SiNintendo, SiSega } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import type { Platform } from "@/entities/Platform";
import { HStack, Icon } from "@chakra-ui/react"
import type { IconType } from "react-icons";

interface PlatformToIconProps {
  platforms: Platform[]
}
const PlatformToIcon = ({ platforms = [] }: PlatformToIconProps) => {

  const iconMap: { [key: string]: IconType} = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux, 
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
    sega: SiSega,
  }

  return (
    <HStack marginY={2}>
      {platforms.map((platform) => {
        const IconComponent = iconMap[platform.slug] || FaQuestionCircle;
        return <Icon key={platform.id} as={IconComponent} color="gray.500" />
      })}
    </HStack>
  )
}

export default PlatformToIcon