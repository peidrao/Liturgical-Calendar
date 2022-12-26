import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import MainRouter from "./Router";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </>
  );
};

export default App;
