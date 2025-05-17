import {  HStack, Image } from "@chakra-ui/react"
import logo from "@/assets/logo.webp"
import ColorModeSwitch from "@/components/ColorModeSwitch"
import SearchInput from "./SearchInput"
import { Link } from "react-router"

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Link to='/'>
        <Image src={logo} alt="Logo" boxSize="60px" objectFit='cover' />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar