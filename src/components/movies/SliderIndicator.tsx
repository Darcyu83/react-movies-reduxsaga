import React from "react";
import styled from "styled-components";

const Pagination = styled.div`
  margin: 0 auto;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  width: fit-content;
  height: 15px;

  &:after,
  &:before {
    color: ${(props) => props.theme.textColor};
    opacity: 0.7;
    font-weight: 400;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  &:before {
    content: "<<";
    left: -20px;
  }

  &:after {
    content: ">>";
    right: -20px;
  }
`;

const Indicator = styled.div`
  margin: 0 5px;
  width: 20px;
  height: 10px;
  background-color: ${(props) => props.theme.textColor};
  opacity: 0.7;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

const pageMatched = { transform: "scale(1.2)", width: "30px" };
export default function SliderIndicator({
  totalPage,
  currPage,
  onToPage,
}: {
  totalPage: number;
  currPage: number;
  onToPage: (pageNum: number) => void;
}) {
  return (
    <Pagination>
      {[...Array(totalPage)].map((i, index) => (
        <Indicator
          key={index}
          style={index === currPage ? pageMatched : {}}
          onClick={() => onToPage(index)}
        ></Indicator>
      ))}
    </Pagination>
  );
}
