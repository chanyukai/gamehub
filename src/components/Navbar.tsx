import {  HStack, Image } from "@chakra-ui/react"
import logo from "@/assets/logo.webp"
import ColorModeSwitch from "@/components/ColorModeSwitch"
import SearchInput from "./SearchInput"

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Image src={logo} alt="Logo" boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar