import React from "react";
import styled from "styled-components";
import CareerInfo from "./CareerInfo";

const TimelineWrapper = styled.div`
  display: grid;
  height: fit-content;
  grid-template-columns: 1fr 10px 2fr;
  grid-template-rows: auto;
  gap: 20px 5px;

  .* {
    &:nth-child(n % 3) {
      background-color: red;
    }
  }
`;

export default function Timeline() {
  return (
    <TimelineWrapper>
      <CareerInfo
        startDt="Dec 2021"
        period="10 months"
        company="J&Value SI company"
        whatDid="Two projects were carried out to improve on existing systems."
        java
        javascript
        oracleDBMS
        springFramework
        nexacroStudio
      />
      <CareerInfo
        startDt="Dec 2020"
        period="5 months"
        company="Boot camp"
        whatDid="First project with team members"
        java
        javascript
        oracleDBMS
        springFramework
      />

      <CareerInfo
        startDt="Oct 2017"
        period="6 months"
        company="People Works"
        whatDid="Manager of the quality assurance department(Reason for retirement : Study overseas)"
      />

      <CareerInfo
        startDt="Mar 2012"
        period="5 and half years"
        company="Tianjin University of Finance and Economics"
        whatDid="Study"
      />

      <CareerInfo
        startDt="Sep 2005"
        period="7 and half years"
        company="LG Display"
        whatDid="an employee of the quality assurance department."
      />
    </TimelineWrapper>
  );
}
