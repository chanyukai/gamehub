import { Button, Menu, Portal } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

export interface Sort {
  name: string;
  value: string;
}
interface Props {
  onSelectedSort: (sort: Sort) => void;
  selectedSort: Sort | null;
}

 const SortSelector = ({ selectedSort, onSelectedSort }: Props) => {

  const sortOptions = [
    { name: "Created", value: "created" },
    { name: "Updated", value: "updated" },
    { name: "Date Added", value: "added" },
    { name: "Name", value: "name" },
    { name: "Release Date", value: "released" },
    { name: "Popularity", value: "metacritic" },
    { name: "Average Rating", value: "rating" },
  ];

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Order by: { selectedSort?.name ||  "Created" } <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            { sortOptions.map(option => (
              <Menu.Item key={option.value} value={option.value} onClick={() => onSelectedSort(option)}>
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