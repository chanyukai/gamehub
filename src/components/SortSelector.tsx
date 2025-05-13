import type { Platform } from "@/hooks/useGames";
import { Button, Menu, Portal } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

 const SortSelector = ({ selectedPlatform, onSelectedPlatform }: Props) => {

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          { selectedPlatform?.name || "Order by: Relevance" } <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
              <Menu.Item value="relevance" onClick={() => onSelectedPlatform({} as Platform)}>
                Relevance
              </Menu.Item>
              <Menu.Item value="relevance" onClick={() => onSelectedPlatform({} as Platform)}>
                Date Added
              </Menu.Item>
              <Menu.Item value="relevance" onClick={() => onSelectedPlatform({} as Platform)}>
                Name
              </Menu.Item>
              <Menu.Item value="relevance" onClick={() => onSelectedPlatform({} as Platform)}>
                Release Date
              </Menu.Item>
              <Menu.Item value="relevance" onClick={() => onSelectedPlatform({} as Platform)}>
                Popularity
              </Menu.Item>
              <Menu.Item value="relevance" onClick={() => onSelectedPlatform({} as Platform)}>
                Average Rating
              </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

export default SortSelector