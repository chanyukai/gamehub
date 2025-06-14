import useGameQueryStore from "@/store"
import { Input, InputGroup } from "@chakra-ui/react"
import { useRef } from "react"
import { BsSearch } from "react-icons/bs"
import { useNavigate } from "react-router"

const SearchInput = () => {
  // 这个组件只是依赖于setSearchText，所以要这样子写
  const setSearchText = useGameQueryStore(s => s.setSearchText);
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate();
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      if (inputRef.current) {
        setSearchText(inputRef.current.value);
        navigate('/');
      }
    }}>
      <InputGroup startElement={<BsSearch />}>
        <Input ref={inputRef} borderRadius={20} placeholder="Search games..." />
      </InputGroup>
    </form>
    
  )
}

export default SearchInput