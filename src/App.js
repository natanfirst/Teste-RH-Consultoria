import React from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/global";

import Routes from "./components/routes";

function App() {
  return (
    <BrowserRouter>
      <div id="main">
        <div id="content">
          <Routes />
        </div>
      </div>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
