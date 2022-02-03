import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Layout from "./Layout";
import { Type_RootState } from "./modules";
import Home from "./pages/Home";
import MovieHome from "./pages/MovieHome";
import MyPage from "./pages/MyPage";
import "./theme/resetStyle.module.css";
import * as theme from "./theme/theme";
function App() {
  const { isDarkMode } = useSelector(
    (state: Type_RootState) => state.themeMode
  );
  return (
    <ThemeProvider theme={isDarkMode ? theme.darkTheme : theme.lightTheme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="mypage" element={<MyPage />} />
            <Route path="/movies" element={<MovieHome />}>
              <Route path="detail" element={<div>MovieInfo</div>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>{" "}
    </ThemeProvider>
  );
}

export default App;
