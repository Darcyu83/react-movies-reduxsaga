import styled from "styled-components";
import NeonText from "../components/cssComponent/NeonText";
import Text3D from "../components/cssComponent/Text3D";
import Timeline from "../components/cssComponent/Timeline";
import {
  FullWidthSection,
  GridContainer,
  MaxWidthSection,
} from "../theme/cssCommon";

const Wapper = styled(GridContainer)`
  padding-top: 100px;
  height: fit-content;
  min-height: 100vh;
  > * {
    padding: 10px;
  }
`;

const FullWidth = styled(FullWidthSection)`
  > * {
    & {
      grid-column: 2 / span 14;
    }
  }
`;

const Subtitle = styled.h1`
  font-size: 1.5rem;
  &:first-letter {
    color: red;
    font-size: 2.5rem;
    font-weight: bold;
  }
`;

const Contents = styled(MaxWidthSection)`
  flex-direction: column;
  > * {
    & {
      grid-column: 1 / span 12;
      padding: 10px;
    }
  }
`;

export default function MyPage() {
  return (
    <Wapper>
      <FullWidth>
        <Subtitle>My career</Subtitle>
      </FullWidth>
      <Contents>
        <Timeline />
      </Contents>
    </Wapper>
  );
}
