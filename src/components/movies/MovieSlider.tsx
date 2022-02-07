import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { IMovie, makeImgePath } from "../../api/moviesAPI";
import MovieCard from "./MovieCard";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

const toRight = keyframes`
  0%{
     transform: translateX(10px);
  }
  50%{
    transform: translateX(20px);
  }
  100%{
    transform: translateX(30px);
  }
`;
const toLeft = keyframes`
  0%{
     transform: translateX(-10px);
  }
  50%{
    transform: translateX(-20px);
  }
  100%{
    transform: translateX(-30px);
  }
`;
const Slider = styled.ul`
  width: 100%;
  height: auto;
  position: relative;
  svg {
    position: absolute;
    font-size: 3rem;
    font-weight: 400;
    stroke: pink;
    cursor: pointer;
  }
`;

const LeftArr = styled(FiChevronsLeft)`
  top: 50%;
  left: -3%;
  z-index: 99;
  animation: ${toLeft} 0.5s infinite ease-out;
`;
const RightArr = styled(FiChevronsRight)`
  top: 50%;
  right: -3%;
  z-index: 99;
  animation: ${toRight} 0.5s infinite ease-out;
`;

const AreaShown = styled.div`
  padding: 30px;
  overflow-x: hidden;
`;

const MovingStage = styled.div<{ currX: number }>`
  display: flex;
  position: relative;
  transition: transform 2s ease-in-out;
  transform: translateX(${(props) => props.currX}px);
`;

export default function MovieSlider({ movies }: { movies: IMovie[] }) {
  const [currX, setCurrX] = useState(0);

  const onLeft = () => {
    setCurrX((curr) => curr + window.visualViewport.width);
  };
  const onRight = () => {
    setCurrX((curr) => curr - window.visualViewport.width);
  };
  return (
    <Slider>
      <LeftArr onClick={onLeft} />
      <RightArr onClick={onRight} />
      <AreaShown>
        <MovingStage currX={currX}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </MovingStage>
      </AreaShown>
    </Slider>
  );
}
