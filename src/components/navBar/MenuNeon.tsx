import { NavLink, useMatch } from "react-router-dom";
import styled from "styled-components";
import { isNullishCoalesce } from "typescript";
import { GlobalContainer } from "../../theme/cssCommon";

const Wapper = styled(GlobalContainer)<{ isMatched?: boolean }>`
  padding: 0px 3px;
  a {
    color: ${(props) => (props.isMatched ? "white" : props.theme.accentColor)};
    font-size: 1.2rem;
    text-shadow: -1px -1px 4px ${(props) => props.theme.accentColor},
      1px 1px 2px ${(props) => props.theme.accentColor},
      1px 1px 12px ${(props) => props.theme.accentColor},
      1px 1px 24px ${(props) => props.theme.accentColor},
      0px 0px 34px ${(props) => props.theme.accentColor},
      0px 0px 44px ${(props) => props.theme.accentColor},
      0px 0px 54px ${(props) => props.theme.accentColor},
      0px 0px 64px ${(props) => props.theme.accentColor};
  }
`;

export default function MenuNeon({
  to,
  menuName,
  isDarkMode,
}: {
  to: string;
  menuName: string;
  isDarkMode: boolean;
}) {
  const isMatched = useMatch(to);
  console.log(to, isMatched);

  return (
    <Wapper isMatched={isMatched !== null ? true : false}>
      <NavLink to={to}>{menuName}</NavLink>
    </Wapper>
  );
}
