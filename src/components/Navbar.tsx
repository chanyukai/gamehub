import {  HStack, Image } from "@chakra-ui/react"
import logo from "@/assets/logo.webp"
import ColorModeSwitch from "@/components/ColorModeSwitch"
import SearchInput from "./SearchInput"

interface Props {
  onSearch: (searchText: string) => void
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent={"space-between"}>
      <Image src={logo} alt="Logo" boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar