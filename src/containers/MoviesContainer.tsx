import { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IMovie, makeImgePath } from "../api/moviesAPI";
import MovieSlider from "../components/movies/MovieSlider";
import { Type_RootState } from "../modules";
import { Type_Movies_Data } from "../modules/movies/types";
import { Content } from "../theme/cssCommon";

const Contents = styled(Content)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Title = styled.h1`
  margin: 15px 0 0 0;
  padding: 5px;
  background-color: rgba(127, 127, 127, 0.5);
  width: 100%;
  border-radius: 5px;
  font-size: 1.5rem;
  &:first-letter {
    font-weight: bold;
    font-size: 2rem;
    color: red;
  }
`;

const Overlay = styled.div<{ isPoped: boolean }>`
  display: ${(props) => (props.isPoped ? "block" : "none")};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 101;
  background-color: rgba(0, 0, 0, 0.6);
`;

const MovieInfoWrapper = styled.div<{ isPoped: boolean }>`
  display: ${(props) => (props.isPoped ? "block" : "none")};
  position: fixed;
  width: 60%;
  height: 70%;
  top: 10%;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 102;
  background-color: rgba(0, 0, 0, 0.6);
`;
const MovieInfo = styled.div`
  z-index: 102;
  width: 100%;
  height: 100%;
  background-color: #100f13;
  border-radius: 15px;
  color: white;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 50%;
  grid-auto-rows: 100%;
  padding: 10px;
  gap: 10px;
  position: relative;
  svg {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const Porster = styled.img`
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  margin: auto;
  border-radius: 15px;
  max-height: 100%;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const MovieTitle = styled.h1`
  font-size: 2rem;
  margin: 10px;
`;
const Overview = styled.p`
  margin: 10px;
  &::first-letter {
    color: red;
    font-size: 2rem;
  }
`;

export default function MoviesContainer({
  movies,
}: {
  movies: { popularData: IMovie[]; topRatedData: IMovie[] };
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isPoped, setIsPoped] = useState(false);

  const [movieInfoPoped, setMovieInfoPoped] = useState<undefined | IMovie>(
    undefined
  );

  const { data } = useSelector((state: Type_RootState) => state.movies);

  const showPopup = (cate: "popularData" | "topRatedData", movieId: number) => {
    setIsPoped((curr) => !curr);
    const index = data[cate].findIndex((movie: IMovie) => movie.id === movieId);
    setMovieInfoPoped(data[cate].find((movie: IMovie) => movie.id === movieId));
  };

  const closePopup = () => {
    setIsPoped((curr) => !curr);
    setMovieInfoPoped(undefined);
  };

  return (
    <Contents>
      <Title>Popular</Title>
      <MovieSlider
        movies={movies.popularData}
        cate="popularData"
        showPopup={showPopup}
      />
      <Title>Top rated</Title>
      <MovieSlider
        movies={movies.topRatedData}
        cate="topRatedData"
        showPopup={showPopup}
      />
      <Overlay isPoped={isPoped} onClick={closePopup}></Overlay>
      <MovieInfoWrapper isPoped={isPoped}>
        <MovieInfo>
          <AiFillCloseCircle onClick={closePopup} />
          <Porster src={makeImgePath(movieInfoPoped?.poster_path, "w500")} />
          <Info>
            <MovieTitle>{movieInfoPoped?.title}</MovieTitle>
            <Overview>{movieInfoPoped?.overview}</Overview>
          </Info>
        </MovieInfo>
      </MovieInfoWrapper>
    </Contents>
  );
}
