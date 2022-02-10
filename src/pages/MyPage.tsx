import React from "react";
import NeonText from "../components/cssComponent/NeonText";
import { Container, Content, InnerContainer } from "../theme/cssCommon";

export default function MyPage() {
  return (
    <Container>
      <InnerContainer>
        <Content>
          <NeonText>My Page</NeonText>
        </Content>
      </InnerContainer>
    </Container>
  );
}
