import { Grid, GridItem, Text } from "@chakra-ui/react"
import Navbar from "@/components/Navbar"
import GameGrid from "./components/GameGrid"

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '250px 1fr'
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <GridItem area="aside">
        <Text>Aside</Text>
      </GridItem>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App