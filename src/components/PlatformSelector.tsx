import usePlatform from "@/hooks/usePlatform";
import usePlatforms from "@/hooks/usePlatforms"
import useGameQueryStore from "@/store";
import { Button, Menu, Portal } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

 const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const platformId = useGameQueryStore(s => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(platformId);
  const setPlatformId =  useGameQueryStore(s => s.setPlatformId);

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
              <Menu.Item key={platform.id} value={platform.id.toString()} onClick={() => setPlatformId(platform.id)}>
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