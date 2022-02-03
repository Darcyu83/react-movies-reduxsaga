import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";

export default function Layout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
