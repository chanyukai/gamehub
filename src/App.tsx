import { Grid, GridItem, HStack } from "@chakra-ui/react"
import Navbar from "@/components/Navbar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import PlatformSelector from "./components/PlatformSelector"
import SortSelector, { type Sort } from "./components/SortSelector"
import GameHeading from "./components/GameHeading"

export interface GameQuery {
  genreId?: number;
  platformId: number;
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
        <GenreList onSelectedGenre={(genre) => setGameQuery({...gameQuery, genreId: genre.id })} selectedGenreId={gameQuery.genreId} /> 
      </GridItem>
      <GridItem area="main">
        <GameHeading gameQuery={gameQuery} />
        {/* <PlatformSelector selectedPlatform={selectedPlatform} onSelectedPlatform={(platform) => setSelectedPlatform(platform)} /> */}
        <HStack paddingLeft={5}>
          <PlatformSelector selectedPlatformId={gameQuery.platformId} onSelectedPlatform={(platform) => setGameQuery({...gameQuery,platformId: platform.id})} />
          <SortSelector selectedSort={gameQuery.sort} onSelectedSort={(sort) => setGameQuery({...gameQuery,sort})} />
        </HStack>
       
        {/* <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} /> */}
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App