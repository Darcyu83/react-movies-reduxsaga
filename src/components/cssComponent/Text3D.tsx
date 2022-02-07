import React from "react";
import styled, { keyframes } from "styled-components";
import "../../theme/font.css";

const rotation = keyframes`
    100%{
        transform: rotateY(-40deg) rotateX(-43deg);
    }
`;

const Wrapper = styled.div<{ height: string }>`
  grid-column: 1 / span 2;
  width: 100%;
  height: ${(props) => props.height};
  min-height: ${(props) => props.height};
  background: radial-gradient(circle, yellow, tomato, crimson);
  position: relative;
`;

const Stage = styled.div<{ height: string }>`
  width: 50%;
  height: ${(props) => props.height};
  min-width: 50%;
  min-height: ${(props) => props.height};
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transform-style: preserve-3d;
  perspective: 9999px;
`;

const Layer = styled.div<{ text: string }>`
  width: 100%;
  height: 100%;
  position: absolute;
  transform: rotateX(33deg) rotateY(40deg) rotateZ(0);
  transform-style: preserve-3d;
  animation: ${rotation} 5s infinite alternate ease-in-out;
  animation-fill-mode: forwards;

  &:after {
    font: 150px/0.65 "Pacifico", "Kaushan Script", Futura, "Roboto",
      "Trebuchet MS", Helvetica, sans-serif;
    content: "${(props) => props.text}";
    color: whitesmoke;
    text-shadow: 4px 0 10px rgba(0, 0, 0, 0.1);
    position: absolute;
    white-space: pre;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:nth-child(1):after {
    transform: translateZ(0px);
  }
  &:nth-child(2):after {
    transform: translateZ(-1.5px);
  }

  &:nth-child(3):after {
    transform: translateZ(-3px);
  }

  &:nth-child(4):after {
    transform: translateZ(-4.5px);
  }

  &:nth-child(5):after {
    transform: translateZ(-6px);
  }

  &:nth-child(6):after {
    transform: translateZ(-7.5px);
  }

  &:nth-child(7):after {
    transform: translateZ(-9px);
  }

  &:nth-child(8):after {
    transform: translateZ(-10.5px);
  }

  &:nth-child(9):after {
    transform: translateZ(-12px);
  }

  &:nth-child(10):after {
    transform: translateZ(-13.5px);
  }

  &:nth-child(11):after {
    transform: translateZ(-15px);
  }

  &:nth-child(12):after {
    transform: translateZ(-16.5px);
  }

  &:nth-child(13):after {
    transform: translateZ(-18px);
  }

  &:nth-child(14):after {
    transform: translateZ(-19.5px);
  }

  &:nth-child(15):after {
    transform: translateZ(-21px);
  }

  &:nth-child(16):after {
    transform: translateZ(-22.5px);
  }

  &:nth-child(17):after {
    transform: translateZ(-24px);
  }

  &:nth-child(18):after {
    transform: translateZ(-25.5px);
  }

  &:nth-child(19):after {
    transform: translateZ(-27px);
  }

  &:nth-child(20):after {
    transform: translateZ(-28.5px);
  }

  &:nth-child(n + 10):after {
    -webkit-text-stroke: 3px rgba(0, 0, 0, 0.25);
  }
  &:nth-child(n + 11):after {
    -webkit-text-stroke: 15px #ff5e1e;
    text-shadow: 6px 0 6px #00366b, 5px 5px 5px #002951, 0 6px 6px #00366b;
  }
  &:nth-child(n + 12):after {
    -webkit-text-stroke: 15px #ff5e1e;
  }
  &:last-child:after {
    -webkit-text-stroke: 17px rgba(0, 0, 0, 0.1);
  }
  &:first-child:after {
    color: #fff;
    text-shadow: none;
  }
`;

export default function Text3D({
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
          <Layer key={index} text={text} />
        ))}
      </Stage>
    </Wrapper>
  );
}
