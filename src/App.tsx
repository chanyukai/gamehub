import { Grid, GridItem, HStack } from "@chakra-ui/react"
import Navbar from "@/components/Navbar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import type { Genre } from "./hooks/useGenres"
import { useState } from "react"
import PlatformSelector from "./components/PlatformSelector"
import type { Platform } from "./hooks/useGames"
import SortSelector, { type Sort } from "./components/SortSelector"

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sort: Sort | null;
  searchText: string;
}

const App = () => {

  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  
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
        <Navbar onSearch={(searchText) => setGameQuery({...gameQuery, searchText })} />
      </GridItem>
      <GridItem area="aside" paddingX={5}>
        {/* <GenreList onSelectedGenre={(genre) => setSelectedGenre(genre)} selectedGenre={selectedGenre} /> */}
        <GenreList onSelectedGenre={(genre) => setGameQuery({...gameQuery, genre })} selectedGenre={gameQuery.genre} /> 
      </GridItem>
      <GridItem area="main">
        {/* <PlatformSelector selectedPlatform={selectedPlatform} onSelectedPlatform={(platform) => setSelectedPlatform(platform)} /> */}
        <HStack paddingLeft={5}>
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform) => setGameQuery({...gameQuery,platform})} />
          <SortSelector selectedSort={gameQuery.sort} onSelectedSort={(sort) => setGameQuery({...gameQuery,sort})} />
        </HStack>
       
        {/* <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} /> */}
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App