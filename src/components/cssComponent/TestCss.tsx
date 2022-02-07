import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 100px;
  width: 100vw;
  height: 100vh;
`;

const Wrapper = styled.div`
  color: black;
  text-align: center;
  width: 100%;
  height: fit-content;
  border: 2px blue solid;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:nth-child(2) {
    background-color: black;
    color: white;
  }
  > * {
    & {
      background-color: orange;
      padding: 5px;
    }

    &:first-child {
      color: yellow;
      background-color: crimson;
    }
    &:nth-child(3) {
      background: green;
    }
  }
`;

const Item = styled.div`
  display: inline;
  color: white;
  text-align: center;
  margin: 5px;
  width: 300px;
  height: 100px;
  min-width: 300px;
  min-height: 100px;
  background-color: crimson;

  &:first-child {
    background: orange;
  }

  &:not(first-child),
  &:not(first-child) {
    background: lightgreen;
    color: green;
  }
  &:last-child {
    background: orange;
  }
`;

export default function TestCss() {
  return (
    <Container>
      <Wrapper>
        Wrapper-1
        <Item>
          item1-1 <br /> &:first-child
        </Item>
        <Item>
          item1-2 <br /> &:nth-child(2)
        </Item>
        <Item>
          item1-3 <br /> &:not(first-child), &:not(last-child)
        </Item>
        <Item>
          item1-4 <br /> &:last-child
        </Item>
      </Wrapper>
      <Wrapper>
        Wrapper-2
        <p>p tag - 1</p>
        <span>span tag - 2</span>
        <p>p tag - 3</p>
        <span>span tag - 4</span>
      </Wrapper>
    </Container>
  );
}
