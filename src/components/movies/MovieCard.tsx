import React from "react";
import styled from "styled-components";

import { IMovie, makeImgePath } from "../../api/moviesAPI";
const Wrapper = styled.div`
  border-radius: 15px 0 15px 0;
  padding: 3px;
  background-color: #18171a;
  width: min(100%, auto);
  display: grid;
  gap: 5px;
  grid-auto-rows: min-content;
  transform: scale(1);
  animation: all 3s ease-in-out;
  &:hover {
    transform: scale(1.03);
    z-index: 99;
    transform-origin: bottom;
  }
`;
const MovieImg = styled.img`
  border-radius: 15px 15px 15px 0;
  margin: 0 auto;
  width: 100%;
  object-fit: cover;
  object-position: center;
  aspect-ratio: 3 / 4;
`;

const Title = styled.p`
  color: white;
  width: 100%;
  word-break: break-word;
`;

export default function MovieCard({
  movie,
  cate,
  showPopup,
}: {
  movie: IMovie;
  cate: "popularData" | "topRatedData";
  showPopup: (cate: "popularData" | "topRatedData", movieId: number) => void;
}) {
  return (
    <Wrapper onClick={() => showPopup(cate, movie.id)}>
      <MovieImg src={makeImgePath(movie.poster_path, "w200")} />
      <Title>{movie.title}</Title>
    </Wrapper>
  );
}
