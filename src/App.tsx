import { Grid, GridItem } from "@chakra-ui/react"
import Navbar from "@/components/Navbar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"

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
        <GenreList />
      </GridItem>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App