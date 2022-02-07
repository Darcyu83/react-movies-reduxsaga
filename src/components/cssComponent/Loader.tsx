import React from "react";
import styled, { keyframes } from "styled-components";
const rotation = keyframes`
  0%{transform: rotate(0deg)}
  100%{transform: rotate(360deg)}
`;
const Wrapper = styled.div<{ widthBy: string }>`
  width: ${(props) => props.widthBy};
  height: ${(props) => props.widthBy};
  border: 16px solid lightgray;
  border-top: 16px solid dodgerblue;
  border-radius: 50%;
  animation: ${rotation} 3s infinite linear;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

export default function Loader({ widthBy }: { widthBy: string }) {
  return <Wrapper widthBy={widthBy}></Wrapper>;
}
