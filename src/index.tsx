import Main from "Main";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "styled/layout.styled";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Main />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
