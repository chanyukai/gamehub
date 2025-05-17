import useGameQueryStore from "@/store";
import { Button, Menu, Portal } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

export interface Sort {
  name: string;
  value: string;
}

 const SortSelector = () => {

  const setSortOrder = useGameQueryStore(s => s.setSortOrder);
  const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder)


  const sortOrders = [
    { name: "Created", value: "created" },
    { name: "Updated", value: "updated" },
    { name: "Date Added", value: "added" },
    { name: "Name", value: "name" },
    { name: "Release Date", value: "released" },
    { name: "Popularity", value: "metacritic" },
    { name: "Average Rating", value: "rating" },
  ];

  const currentSortOrder = sortOrders.find(s => s.value === sortOrder)

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Order by: { currentSortOrder?.name ||  "Created" } <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            { sortOrders.map(option => (
              <Menu.Item key={option.value} value={option.value} onClick={() => setSortOrder(option.value)}>
                {option.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

export default SortSelector