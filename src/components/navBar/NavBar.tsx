import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useMatch } from "react-router-dom";
import styled from "styled-components";
import { toggleTheme } from "../../modules/themeMode/actions";
import { FullWidthSection, GridContainer } from "../../theme/cssCommon";
import ToggleBtn from "../cssComponent/ToggleBtn";
import styles from "./NavBar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import { Type_RootState } from "../../modules";

const Container = styled(GridContainer)`
  position: fixed;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  gap: 5px;
`;
const InnerContainer = styled(FullWidthSection)`
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
    display: inline-flex;
    justify-content: center;
    align-items: center;
    svg {
      border-radius: 15px 0px 15px 0px;
      background-color: #0abde3;
      width: 100%;
      height: 100%;
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

  a {
    margin-right: 10px;
    position: relative;
  }

  a:hover {
    color: #48dbfb !important;
  }

  a:hover:before {
    content: "";
    border-radius: 10px;
    width: 10px;
    min-width: 10px;
    min-height: 10px;
    height: 10px;
    position: absolute;
    background-color: #48dbfb;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }

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

  > * {
    &:nth-child(1) {
      display: none;
    }
  }
  @media screen and (max-width: 1280px) {
    flex-direction: column;
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

const active = {
  color: "crimson",
  fontWeight: "bold",
};
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

  const mypageMatched = useMatch("/mypage");

  return (
    <Container>
      <InnerContainer>
        <Logo>
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="150 100 200 200"
            >
              <circle cx="70" cy="100" r="100" fill="#f368e0" />
              <circle cx="200" cy="300" r="100" fill="#f368e0" />
              <circle cx="450" cy="100" r="100" fill="#f368e0" />
            </svg>
          </Link>
        </Logo>
        <Menus>
          <Link
            to="/mypage"
            className={mypageMatched ? styles.isRouterMatched : ""}
            style={mypageMatched ? active : {}}
          >
            My Page
          </Link>
          <NavLink
            to="movies"
            className={({ isActive }) =>
              isActive ? styles.isRouterMatched : ""
            }
          >
            Movies
          </NavLink>
        </Menus>
        <MyBtn isOpen={isOpen} onMouseLeave={onHambergerMouseLeave}>
          <GiHamburgerMenu onClick={onHambergerToggle} />
          <ToggleBtn isDarkMode={isDarkMode} onToggleMode={onToggleMode} />
          <ToggleBtn isDarkMode={isDarkMode} onToggleMode={onToggleMode} />
          <ToggleBtn isDarkMode={isDarkMode} onToggleMode={onToggleMode} />
        </MyBtn>
      </InnerContainer>
    </Container>
  );
}
export default NavBar;
