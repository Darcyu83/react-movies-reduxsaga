import React from "react";
import styled from "styled-components";

import { IMovie, makeImgePath } from "../../api/moviesAPI";
const Wrapper = styled.div`
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.8);
  /* position: absolute; */
  top: 0;
  transition: transform 0.2s linear;
  cursor: pointer;
  &:hover {
    z-index: 50;
    transform: scale(1.1);
  }
`;
const Movie = styled.li<{ url: string }>`
  background-image: url(${(props) => props.url});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 200px;
  height: 300px;
`;

const Title = styled.p`
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 2.5rem;
  font-size: 1.25rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
`;

export default function MovieCard({ movie }: { movie: IMovie }) {
  return (
    <Wrapper>
      <Movie url={makeImgePath(movie.poster_path, "w200")}></Movie>
      <Title>{movie.title}</Title>
    </Wrapper>
  );
}
