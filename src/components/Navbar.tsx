import {  HStack, Image } from "@chakra-ui/react"
import logo from "@/assets/logo.webp"
import ColorModeSwitch from "@/components/ColorModeSwitch"

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Image src={logo} alt="Logo" boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar