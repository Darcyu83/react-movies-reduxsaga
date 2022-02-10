import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ErrorIndicator from "../components/cssComponent/ErrorIndicator";
import Loader from "../components/cssComponent/Loader";
import NeonText from "../components/cssComponent/NeonText";
import MoviesContainer from "../containers/MoviesContainer";
import { Type_RootState } from "../modules";
import { getMoviesAct } from "../modules/movies/actions";
import {
  Container,
  FullWidthSection,
  InnerContainer,
} from "../theme/cssCommon";

const Wrapper = styled(Container)`
  height: fit-content;
  min-height: 100vh;
  padding-bottom: 10px;
`;
const FullWidth = styled(FullWidthSection)`
  > * {
    & {
      grid-column: 1 / span14;
    }
  }
`;

export default function MovieHome() {
  const { data, isLoading, error, errorState } = useSelector(
    (state: Type_RootState) => state.movies
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesAct());
  }, [dispatch]);

  console.log(error, errorState);
  if (isLoading) return <Loader widthBy="100px" />;
  if (errorState) return <ErrorIndicator error={error} />;
  return (
    <Wrapper>
      <FullWidth>
        <NeonText>Movies Home</NeonText>
      </FullWidth>
      <InnerContainer>
        <MoviesContainer movies={data} />
      </InnerContainer>
    </Wrapper>
  );
}
