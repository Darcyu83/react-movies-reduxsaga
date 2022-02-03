import { useSelector } from "react-redux";
import styled from "styled-components";
import { Type_RootState } from "../modules";
import { GridContainer, MaxWidthSection } from "../theme/cssCommon";

const Container = styled(GridContainer)`
  color: red;
  padding-top: 100px;
`;
const InnerContainer = styled(MaxWidthSection)``;

function Home() {
  const { isDarkMode } = useSelector(
    (state: Type_RootState) => state.themeMode
  );

  return (
    <Container>
      <InnerContainer>Content</InnerContainer>
    </Container>
  );
}
export default Home;
