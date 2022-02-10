import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { IMovie } from "../../api/moviesAPI";
import MovieCard from "./MovieCard";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import SliderIndicator from "./SliderIndicator";

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
const Slider = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  svg {
    position: absolute;
    font-size: 3rem;
    font-weight: 400;
    stroke: tomato;
    cursor: pointer;
  }
`;

const LeftArr = styled(FiChevronsLeft)`
  top: 50%;
  left: 0;
  z-index: 99;
  animation: ${toLeft} 0.5s infinite ease-out;
`;
const RightArr = styled(FiChevronsRight)`
  top: 50%;
  right: 0;
  z-index: 99;
  animation: ${toRight} 0.5s infinite ease-out;
`;

const MovingStage = styled.ul`
  overflow-x: hidden;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  gap: 5px;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  position: sticky;
`;

const MovieCardGroup = styled.li`
  width: 100%;
  height: auto;
  scroll-snap-align: start;
  padding: 30px 0px;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 19.5%;
  gap: 5px;
  transition: all 5s ease-in-out;
  -moz-transition: all 5s ease-out;
  -o-transition: all 5s ease-out;
  -webkit-transition: all 5s ease-out;
`;

export default function MovieSlider({
  movies,
  cate,
  showPopup,
}: {
  movies: IMovie[];
  cate: "popularData" | "topRatedData";
  showPopup: (cate: "popularData" | "topRatedData", movieId: number) => void;
}) {
  const QNTY_CARD = 5;
  const TOTAL_PAGE = Math.ceil(movies.length / QNTY_CARD);

  const liRef = useRef<(null | HTMLLIElement)[]>([]);
  const [currPage, setCurrPage] = useState(0);

  useEffect(() => {
    liRef.current[currPage]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
    });
  }, [currPage]);

  const changePage = (payload: number) => {
    setCurrPage((curr) =>
      curr + payload < 0
        ? 0
        : curr + payload > TOTAL_PAGE - 1
        ? TOTAL_PAGE - 1
        : curr + payload
    );
  };

  const onToPage = (pageNum: number) => {
    setCurrPage(pageNum);
  };
  return (
    <Slider>
      <LeftArr onClick={() => changePage(-1)} />
      <RightArr onClick={() => changePage(1)} />
      <MovingStage>
        {[...Array(TOTAL_PAGE)].map((i, index) => (
          <MovieCardGroup key={index} ref={(el) => (liRef.current[index] = el)}>
            {movies
              .slice(index * QNTY_CARD, index * QNTY_CARD + QNTY_CARD)
              .map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  cate={cate}
                  showPopup={showPopup}
                />
              ))}
          </MovieCardGroup>
        ))}
      </MovingStage>
      <SliderIndicator
        totalPage={TOTAL_PAGE}
        currPage={currPage}
        onToPage={onToPage}
      />
    </Slider>
  );
}
