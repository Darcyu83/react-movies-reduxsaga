const API_KEY = `72caad34e2c43d870d78d98ae9a0980b`;

let URL_POPULAR = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
let URL_TOP_RATED = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
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

export async function getPopularMoviesAPI() {
  const { results }: { results: IMovie[] } = await (
    await fetch(URL_POPULAR)
  ).json();
  return results;
}

export async function getTopRatedMoviesAPI() {
  const { results }: { results: IMovie[] } = await (
    await fetch(URL_TOP_RATED)
  ).json();
  return results;
}

export function makeImgePath(
  imgPath: string | undefined,
  size: "w500" | "w200"
) {
  return `https://image.tmdb.org/t/p/${size}/${imgPath}`;
}

export async function fetchInParallel() {
  const { results: popularData }: { results: IMovie[] } = await (
    await fetch(URL_POPULAR)
  ).json();
  const { results: topRatedData }: { results: IMovie[] } = await (
    await fetch(URL_TOP_RATED)
  ).json();

  return { popularData, topRatedData };
}
