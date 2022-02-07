import React from "react";
import NeonText from "../components/cssComponent/NeonText";
import TestCss from "../components/cssComponent/TestCss";
import { Container, Content, InnerContainer } from "../theme/cssCommon";

export default function MyPage() {
  return (
    <Container>
      <InnerContainer>
        <Content>
          {/* <NeonText>My Page</NeonText> */}

          <TestCss />
        </Content>
      </InnerContainer>
    </Container>
  );
}
