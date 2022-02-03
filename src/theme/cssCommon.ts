import styled from "styled-components";

export const GridContainer = styled.div`
  width: 100vw;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 6.25rem)) 1fr;
  grid-template-rows: max-content;

  @media screen and (max-width: 1280px) {
    grid-template-columns: 2rem repeat(12, minmax(3.125rem, 1fr)) 2rem;
  }

  @media screen and (max-width: 720px) {
    min-width: 480px;
    grid-template-columns: 0 repeat(12, minmax(2.5rem, 1fr)) 0;
  }
`;

export const FullWidthSection = styled.section`
  grid-column: 1 / span 14;
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 6.25rem)) 1fr;

  @media screen and (max-width: 1280px) {
    grid-template-columns: 2rem repeat(12, minmax(3.125rem, 1fr)) 2rem;
  }
  @media screen and (max-width: 720px) {
    min-width: 480px;
    grid-template-columns: 0 repeat(12, minmax(2.5rem, 1fr)) 0;
  }
`;

export const MaxWidthSection = styled.div`
  grid-column: 2 / span 12;
  height: 200vh;
  grid-template-columns: repeat(12, minmax(auto, 6.25rem));

  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(12, minmax(3.125rem, 1fr));
  }

  @media screen and (max-width: 720px) {
    min-width: 480px;
    grid-template-columns: 0 repeat(12, minmax(2.5rem, 1fr)) 0;
  }
`;
