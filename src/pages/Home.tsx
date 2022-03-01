import { useEffect, useState } from "react";
import styled from "styled-components";
import NeonText from "../components/cssComponent/NeonText";
import Text3D from "../components/cssComponent/Text3D";
import {
  FullWidthSection,
  GridContainer,
  MaxWidthSection,
} from "../theme/cssCommon";

const Wapper = styled(GridContainer)`
  padding-top: 100px;
  height: fit-content;
  min-height: 100vh;
  padding-bottom: 10px;
`;

const FullWidth = styled(FullWidthSection)`
  > * {
    &:first-child {
      grid-column: 1 / span 14;
    }
  }
`;
const Contents = styled(MaxWidthSection)`
  flex-direction: column;
  justify-content: flex-start;

  > * {
    & {
      grid-column: 1 / span 12;
    }
  }
`;
function Home() {
  return (
    <Wapper>
      <FullWidth>
        <NeonText>Home</NeonText>
      </FullWidth>
      <Contents>
        <Text3D text="Fancy you" height="100px" />
      </Contents>
    </Wapper>
  );
}
export default Home;
