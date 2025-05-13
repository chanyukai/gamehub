import { Grid, GridItem } from "@chakra-ui/react"
import Navbar from "@/components/Navbar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import type { Genre } from "./hooks/useGenres"
import { useState } from "react"
import PlatformSelector from "./components/PlatformSelector"
import type { Platform } from "./hooks/useGames"

const App = () => {

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  
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
        <GenreList onSelectedGenre={(genre) => setSelectedGenre(genre)} selectedGenre={selectedGenre} />
      </GridItem>
      <GridItem area="main">
        <PlatformSelector selectedPlatform={selectedPlatform} onSelectedPlatform={(platform) => setSelectedPlatform(platform)} />
        <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  )
}

export default App