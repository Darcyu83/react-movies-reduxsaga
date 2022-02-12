import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { toggleTheme } from "../../modules/themeMode/actions";
import { FullWidthSection, GridContainer } from "../../theme/cssCommon";
import ToggleBtn from "../cssComponent/ToggleBtn";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { useState } from "react";
import { Type_RootState } from "../../modules";
import MenuNeon from "./MenuNeon";
import Logo3D from "../cssComponent/Logo3D ";

const Container = styled(GridContainer)`
  position: fixed;
  width: 100%;
  min-height: 100px;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  gap: 5px;
  z-index: 100;
`;
const InnerContainer = styled(FullWidthSection)`
  width: 100%;
  height: 100%;
  min-height: 100px;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  gap: 3px;
`;

const Logo = styled.div`
  grid-column: 2 / span 2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    width: 80%;
    height: calc(3 / 5 * 80%);
    max-height: 100px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    svg {
      border-radius: 15px 0px 15px 0px;
      background-color: #0abde3;
      width: 100%;
      height: 100%;
      min-height: 77px;
      overflow: hidden;
      cursor: pointer;
    }
  }
`;

const Menus = styled.div`
  padding: 10px 0px;
  grid-column: 4 / span 8;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 1280px) {
    flex-wrap: wrap;
    div + div {
      margin: 5px 0px;
    }
  }
`;

const MyBtn = styled.div<{ isOpen: boolean }>`
  padding: 10px 0px;
  grid-column: 12 / span 2;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  width: 100%;
  a {
    svg {
      font-size: 1.5rem;
    }
  }
  > * {
    &:nth-child(1) {
      display: none;
    }
  }
  @media screen and (max-width: 1280px) {
    justify-content: center;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 720px) {
    > * {
      &:nth-child(1) {
        display: ${(props) => (props.isOpen ? "none" : "block")};
        font-size: 1.2rem;
      }
      &:not(first-child) {
        display: ${(props) => (props.isOpen ? "block" : "none")};
      }
    }
  } ;
`;

function NavBar() {
  const { isDarkMode } = useSelector(
    (state: Type_RootState) => state.themeMode
  );
  const dispatch = useDispatch();
  const onToggleMode = () => {
    dispatch(toggleTheme());
  };

  const [isOpen, setIsOpen] = useState(false);

  const onHambergerToggle = () => {
    setIsOpen((curr) => !curr);
  };
  const onHambergerMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <InnerContainer>
        <Logo>
          <Link to="/">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="150 100 200 200"
            >
              <circle cx="70" cy="100" r="100" fill="#f368e0" />
              <circle cx="200" cy="300" r="100" fill="#f368e0" />
              <circle cx="450" cy="100" r="100" fill="#f368e0" />
            </svg> */}
            <Logo3D text="Logo" height="100px" />
          </Link>
        </Logo>
        <Menus>
          <MenuNeon to="/mypage" menuName="My Page" isDarkMode={isDarkMode} />
          <MenuNeon to="movies" menuName="Movies" isDarkMode={isDarkMode} />
        </Menus>
        <MyBtn isOpen={isOpen} onMouseLeave={onHambergerMouseLeave}>
          <GiHamburgerMenu onClick={onHambergerToggle} />
          <a href="http://www.facebook.com" target="_blank" rel="noreferrer">
            <AiFillFacebook />
          </a>
          <a href="http://www.twitter.com" target="_blank" rel="noreferrer">
            <AiFillTwitterSquare onClick={onHambergerToggle} />
          </a>
          <a href="http://www.instagram.com" target="_blank" rel="noreferrer">
            <AiFillInstagram onClick={onHambergerToggle} />
          </a>
          <ToggleBtn isDarkMode={isDarkMode} onToggleMode={onToggleMode} />
        </MyBtn>
      </InnerContainer>
    </Container>
  );
}
export default NavBar;
