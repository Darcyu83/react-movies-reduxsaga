import React from "react";
import styled, { keyframes } from "styled-components";
import "../../theme/font.css";

const rotation = keyframes`
   100%{
    transform : rotateX(30deg) rotateY(30deg);
   }
`;

const Wrapper = styled.div<{ height: string }>`
  width: 150px;
  height: 100%;
  background: radial-gradient(circle, white, cyan, dodgerblue);
  position: relative;
`;

const Stage = styled.div<{ height: string }>`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  perspective: 9999px;
`;

const Layer = styled.div<{ text: string }>`
  width: 70%;
  height: 80%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  transform: rotateX(-30deg) rotateY(-30deg) rotateZ(0deg);
  transform-style: preserve-3d;
  animation: ${rotation} 5s infinite alternate ease-in-out;
  animation-fill-mode: backwards;

  &:after {
    position: absolute;
    font-size: 2rem;
    content: "YuDS";
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: whitesmoke;
    white-space: pre;
  }

  &:nth-child(1):after {
    transform: translateZ(0px);
  }
  &:nth-child(2):after {
    transform: translateZ(-0.5px);
  }
  &:nth-child(3):after {
    transform: translateZ(-1px);
  }
  &:nth-child(4):after {
    transform: translateZ(-1.5px);
  }
  &:nth-child(5):after {
    transform: translateZ(-2px);
  }
  &:nth-child(6):after {
    transform: translateZ(-2.5px);
  }
  &:nth-child(7):after {
    transform: translateZ(-3px);
  }
  &:nth-child(8):after {
    transform: translateZ(-3.5px);
  }
  &:nth-child(9):after {
    transform: translateZ(-4px);
  }
  &:nth-child(10):after {
    transform: translateZ(-4.5px);
  }
  &:nth-child(11):after {
    transform: translateZ(-5px);
  }
  &:nth-child(12):after {
    transform: translateZ(-5.5px);
  }
  &:nth-child(13):after {
    transform: translateZ(-6px);
  }
  &:nth-child(14):after {
    transform: translateZ(-6.5px);
  }
  &:nth-child(15):after {
    transform: translateZ(-7px);
  }
  &:nth-child(16):after {
    transform: translateZ(-7.5px);
  }
  &:nth-child(17):after {
    transform: translateZ(-8px);
  }
  &:nth-child(18):after {
    transform: translateZ(-8.5px);
  }
  &:nth-child(19):after {
    transform: translateZ(-9px);
  }
  &:nth-child(20):after {
    transform: translateZ(-9.5px);
  }

  &:nth-child(n + 10):after {
    text-shadow: 0px 0px 0.5px black;
  }

  &:nth-child(n + 11):after {
    text-shadow: -0.5px -0.5px 0px dodgerblue, -0.5px 0.5px 0px dodgerblue,
      0.5px -0.5px 0px dodgerblue, 0.5px 0.5px 0px dodgerblue;
  }
  &:first-child:after {
    color: #fff;
    text-shadow: none;
  }
  &:last-child:after {
    color: #fff;
    text-shadow: -0.5px -0.5px 0px rgba(0, 0, 0, 0.1),
      -0.5px 0.5px 0px rgba(0, 0, 0, 0.1), 0.5px -0.5px 0px rgba(0, 0, 0, 0.1),
      0.5px 0.5px 0px rgba(0, 0, 0, 0.1);
  }
`;

export default function Logo3D({
  text,
  height,
}: {
  text: string;
  height: string;
}) {
  console.log(text);
  return (
    <Wrapper height={height}>
      <Stage height={height}>
        {[...Array(20)].map((item, index) => (
          <Layer text={text} />
        ))}
      </Stage>
    </Wrapper>
  );
}
