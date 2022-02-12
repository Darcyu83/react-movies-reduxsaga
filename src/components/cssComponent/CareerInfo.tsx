import React from "react";
import styled from "styled-components";

const Period = styled.p`
  text-align: right;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-weight: bold;

  &:nth-child(3n + 1) {
    color: inherit;
  }
  &:first-child,
  &:nth-child(4) {
    color: ${(props) => props.theme.accentColor};
  }
`;

const Divider = styled.div`
  position: relative;
  height: 4rem;

  &:first-child:after {
    background-color: dodgerblue;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
  }

  &:before {
    background-color: dodgerblue;
    height: 100%;
    width: 2px;
    top: 0;
  }

  &:after {
    border: 1px solid dodgerblue;
    width: 7px;
    height: 7px;
    bottom: -20%;
    transform: rotateZ(45deg);
  }
`;
const WhereIWorked = styled.p`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Date = styled.p``;

const Company = styled.p`
  font-weight: bold;
`;

const WhatDid = styled.p``;

const TechStack = styled.div`
  padding: 5px;
`;

const TechImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 5px;
`;

export default function CareerInfo({
  startDt,
  period,
  company,
  whatDid,
  java,
  javascript,
  oracleDBMS,
  springFramework,
  nexacroStudio,
}: {
  startDt: string;
  period?: string;
  company: string;
  whatDid: string;
  java?: boolean;
  javascript?: boolean;
  oracleDBMS?: boolean;
  springFramework?: boolean;
  nexacroStudio?: boolean;
}) {
  return (
    <>
      <Period>
        <Date>{startDt}</Date>
        <Date>({period})</Date>
      </Period>
      <Divider />
      <WhereIWorked>
        <Company>{company}</Company>
        <WhatDid>{whatDid}</WhatDid>
        <TechStack>
          {java && <TechImg src="./public_icons/Java.png" alt="Java" />}

          {javascript && (
            <TechImg src="public_icons/Javascript.png" alt="Javascript" />
          )}

          {oracleDBMS && (
            <TechImg
              src={require("../../src_icons/OracleDBMS.png")}
              alt="OracleDBMS"
            />
          )}

          {springFramework && (
            <TechImg
              src={require("../../src_icons/SpringFramework.png")}
              alt="SpringFramework"
            />
          )}

          {nexacroStudio && (
            <TechImg
              style={{ width: "25px", height: "25px" }}
              src={require("../../src_icons/NexacroStudio.png")}
              alt="NexacroStudio"
            />
          )}
        </TechStack>
      </WhereIWorked>
    </>
  );
}
