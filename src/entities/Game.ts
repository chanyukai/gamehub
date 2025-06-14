import type Genre from "./Genre";
import type Platform from "./Platform";
import type Publisher from "./Publisher";


export default interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  description_raw: string;
  genres: Genre[],
  publishers: Publisher[],
  parent_platforms: [
    { platform: Platform; }
  ];
  metacritic: number;
  rating_top: number;
}
