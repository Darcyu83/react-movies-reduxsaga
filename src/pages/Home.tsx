import styled, { keyframes } from "styled-components";
import NeonText from "../components/cssComponent/NeonText";
import Text3D from "../components/cssComponent/Text3D";
import { Container, Content, InnerContainer } from "../theme/cssCommon";

const Wapper = styled(Container)`
  height: 100vh;
`;

const InnerWapper = styled(InnerContainer)``;
const Contetents = styled(Content)`
  flex-direction: column;
  justify-content: flex-start;
`;
function Home() {
  return (
    <Wapper>
      <InnerWapper>
        <Contetents>
          <NeonText>Welcome Home</NeonText>
          <Text3D text="Css Only" height="700px" />
        </Contetents>
      </InnerWapper>
    </Wapper>
  );
}
export default Home;
