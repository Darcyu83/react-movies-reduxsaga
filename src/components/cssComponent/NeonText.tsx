import styled, { keyframes } from "styled-components";
import "../../../src/theme/font.css";
const cssProps: { [key: string]: any } = {
  textColor: "#f40",
  borderColor: "#08f",
};

const flicker = keyframes`
 0%, 
 9%, 
 10.3%,
 69%, 71%,
 79%, 81.5%,
   100%{
    text-shadow: -0.1rem -0.1rem 1rem #fff, 0.1rem 0.1rem 1rem #fff,0 0 1rem ${cssProps.textColor},
    0 0 2rem ${cssProps.textColor}, 0 0 4rem ${cssProps.textColor},
    0 0 6rem ${cssProps.textColor}, 0 0 8rem ${cssProps.textColor};    

    box-shadow: 0 0 0.5rem #fff, 
    inset 0 0 0.2rem #fff,
    0 0  1rem ${cssProps.borderColor}, 
    inset 0 0 0.7rem  ${cssProps.borderColor},
    0 0  3rem ${cssProps.borderColor}, 
    inset 0 0 2rem  ${cssProps.borderColor};
}

10%, 70%, 81%{
    text-shadow: none;
    box-shadow: none;
}

`;
const NeonTextWrapper = styled.div`
  background-color: rgb(0, 0, 0, 1);
  color: white;
  width: 100%;
  height: 70%;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "exo", sans-serif;
    font-style: italic;
    padding: 2rem 3rem;
    font-size: 3rem;
    border: 0.3rem solid white;
    animation: ${flicker} 1.5s infinite ease-out;
    border-radius: 15px;
  }
`;

export default function NeonText({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NeonTextWrapper>
        <h1>{children}</h1>
      </NeonTextWrapper>
    </>
  );
}
