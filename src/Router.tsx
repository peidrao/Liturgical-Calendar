import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Month from "./pages/Month";

function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Month />} path="/month/:month" />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
