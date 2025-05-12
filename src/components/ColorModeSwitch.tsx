import { HStack, Switch } from "@chakra-ui/react"
import { useColorMode} from "@/components/ui/color-mode"

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch.Root  checked={colorMode === "dark"} onCheckedChange={toggleColorMode}>
        <Switch.HiddenInput />
        <Switch.Control />
        <Switch.Label></Switch.Label>
      </Switch.Root>
    </HStack>
  )
}

export default ColorModeSwitch