import usePlatforms from "@/hooks/usePlatforms"
import { Button, Menu, Portal } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

 const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  
  if (error) return null;

  console.log(data)
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Select Platform <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            { data.map(platform => (
              <Menu.Item key={platform.id} value={platform.id.toString()}>
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

export default PlatformSelector