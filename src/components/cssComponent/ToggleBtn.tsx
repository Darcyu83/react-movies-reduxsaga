import React from "react";
import styled from "styled-components";

const Container = styled.div<{ isDarkMode: boolean }>`
  margin: 2px 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  width: 50px;
  min-width: 50px;
  height: 18px;
  background-color: ${(props) => (props.isDarkMode ? "white" : "black")};
  border-radius: 20px;
  cursor: pointer;
`;
const InnerContainer = styled.div<{ isDarkMode: boolean }>`
  transition: all 0.5s ease;
  background-color: ${(props) =>
    props.isDarkMode ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.5)"};
  width: 100%;
  height: 18px;
  border-radius: 17px;
  position: relative;

  div {
    background-color: ${(props) =>
      props.isDarkMode ? "rgba(0,0,0,0.8)" : "white"};
    right: ${(props) => (props.isDarkMode ? "0px" : "18px")};
  }
`;
const TggleCircle = styled.div`
  transition: all 0.5s ease;
  position: absolute;
  width: 32px;
  height: 18px;
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
        <TggleCircle>
          {isDarkMode ? <span>On</span> : <span>Off</span>}
        </TggleCircle>
      </InnerContainer>
    </Container>
  );
}
