import { Grid, GridItem, HStack } from "@chakra-ui/react"
import Navbar from "@/components/Navbar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import PlatformSelector from "./components/PlatformSelector"
import SortSelector from "./components/SortSelector"
import GameHeading from "./components/GameHeading"

const App = () => {
  
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area="nav" paddingX={5}>
        <Navbar />
      </GridItem>
      <GridItem area="aside" paddingX={5}>
        {/* <GenreList onSelectedGenre={(genre) => setSelectedGenre(genre)} selectedGenre={selectedGenre} /> */}
        <GenreList /> 
      </GridItem>
      <GridItem area="main">
        <GameHeading />
        {/* <PlatformSelector selectedPlatform={selectedPlatform} onSelectedPlatform={(platform) => setSelectedPlatform(platform)} /> */}
        <HStack paddingLeft={5}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
       
        {/* <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} /> */}
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App