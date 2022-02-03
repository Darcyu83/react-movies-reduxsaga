import React from "react";
import { NavLink } from "react-router-dom";

interface ILinkProps {
  to: string;
  menuname: string;
}

function Link({ to, menuname }: ILinkProps) {
  return (
    <NavLink
      style={(isActive) =>
        isActive ? { color: "Green", fontWeight: "bold" } : {}
      }
      to={to}
    >
      {menuname}
    </NavLink>
  );
}
export default Link;
