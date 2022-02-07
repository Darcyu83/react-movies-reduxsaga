import React from "react";
import styled from "styled-components";
import { IMovie, makeImgePath } from "../api/moviesAPI";
import MovieSlider from "../components/movies/MovieSlider";
import { Content } from "../theme/cssCommon";

const Contents = styled(Content)``;
export default function MoviesContainer({ movies }: { movies: IMovie[] }) {
  return (
    <Contents>
      <MovieSlider movies={movies} />
    </Contents>
  );
}
