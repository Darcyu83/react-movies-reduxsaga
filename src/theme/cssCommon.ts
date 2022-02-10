import styled from "styled-components";

export const GridContainer = styled.div`
  background: ${(props) => props.theme.bgColor};
  /* width: 100vw;
  height: 100vh; */
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
  background: ${(props) => props.theme.bgColor};
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
  background: ${(props) => props.theme.bgColor};
  grid-column: 2 / span 12;
  /* height: 100%; */
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, 6.25rem));

  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(12, minmax(3.125rem, 1fr));
  }

  @media screen and (max-width: 720px) {
    min-width: 480px;
    grid-template-columns: repeat(12, minmax(2.5rem, 1fr));
  }
`;

export const GlobalContainer = styled.div`
  background: ${(props) => props.theme.bgColor};
`;

export const Container = styled(GridContainer)`
  padding-top: 100px;
`;
export const InnerContainer = styled(MaxWidthSection)``;

export const Content = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  grid-column: 1 / span 12;
  /* height: calc(100vh - 100px); */
  display: flex;
  justify-content: center;
  align-items: center;
`;
