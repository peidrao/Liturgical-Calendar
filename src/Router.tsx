import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Month from "./pages/Month";

function MainRouter() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Month />} path="/month/:month" />
    </Routes>
  );
}

export default MainRouter;
