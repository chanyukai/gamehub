import { Input, InputGroup } from "@chakra-ui/react"
import { useRef } from "react"
import { BsSearch } from "react-icons/bs"

interface Props {
  onSearch: (searchText: string) => void
}


const SearchInput = ({ onSearch }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      if (inputRef.current) {
        onSearch(inputRef.current.value)
      }
    }}>
      <InputGroup startElement={<BsSearch />}>
        <Input ref={inputRef} borderRadius={20} placeholder="Search games..." />
      </InputGroup>
    </form>
    
  )
}

export default SearchInput