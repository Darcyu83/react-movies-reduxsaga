import React from "react";
import styled from "styled-components";

const Container = styled.div<{ isDarkMode: boolean }>`
  margin: 2px 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  width: 1.5rem;
  min-width: 1.5rem;
  height: 1rem;
  background-color: ${(props) => (props.isDarkMode ? "white" : "black")};
  border-radius: 15px;
  cursor: pointer;
`;
const InnerContainer = styled.div<{ isDarkMode: boolean }>`
  transition: all 0.5s ease;
  background-color: ${(props) =>
    props.isDarkMode ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.5)"};
  width: 100%;
  height: 100%;
  border-radius: 17px;
  position: relative;

  div {
    background-color: ${(props) =>
      props.isDarkMode ? "rgba(0,0,0,0.8)" : "white"};
    ${(props) => (props.isDarkMode ? " right: 0px" : "left: 0px")};
  }
`;
const TggleCircle = styled.div`
  transition: all 0.5s ease;
  position: absolute;
  width: 50%;
  height: 100%;
  font-size: 0.8rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default function ToggleBtn({
  isDarkMode,
  onToggleMode,
}: {
  isDarkMode: boolean;
  onToggleMode: () => void;
}) {
  return (
    <Container isDarkMode={isDarkMode} onClick={onToggleMode}>
      <InnerContainer isDarkMode={isDarkMode}>
        <TggleCircle>{isDarkMode ? <span></span> : <span></span>}</TggleCircle>
      </InnerContainer>
    </Container>
  );
}
