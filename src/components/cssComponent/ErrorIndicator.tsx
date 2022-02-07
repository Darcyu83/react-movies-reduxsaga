import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 100px;
  width: 100%;
  height: 100%;
  position: absolute;
  text-align: center;
  color: crimson;
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.5rem;
  }
`;
export default function ErrorIndicator({ error }: { error: any }) {
  console.log(error.message);
  return (
    <Wrapper>
      <h1>Error Occured!!!!!</h1>
      <h2>Type: {error.message}</h2>
    </Wrapper>
  );
}
