const API_KEY = `72caad34e2c43d870d78d98ae9a0980b`;

let URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export async function getMoviesAPI() {
  const { results }: { results: IMovie[] } = await (await fetch(URL)).json();
  console.log("getMoviesAPI start == 1 ");
  console.log("api", results);
  return results;
}

export function makeImgePath(imgPath: string, size: "w500" | "w200") {
  return `https://image.tmdb.org/t/p/${size}/${imgPath}`;
}
