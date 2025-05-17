import GameGrid from "@/components/GameGrid"
import GameHeading from "@/components/GameHeading"
import GenreList from "@/components/GenreList"
import PlatformSelector from "@/components/PlatformSelector"
import SortSelector from "@/components/SortSelector"
import { Grid, GridItem, HStack } from "@chakra-ui/react"

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
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

export default HomePage