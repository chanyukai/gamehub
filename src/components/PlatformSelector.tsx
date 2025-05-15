import usePlatforms, { type Platform } from "@/hooks/usePlatforms"
import { Button, Menu, Portal } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

 const PlatformSelector = ({ selectedPlatformId, onSelectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  const selectedPlatform = data.results.find(p => p.id === selectedPlatformId)

  if (error) return null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          { selectedPlatform?.name || "selected platform" } <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            { data?.results.map(platform => (
              <Menu.Item key={platform.id} value={platform.id.toString()} onClick={() => onSelectedPlatform(platform)}>
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