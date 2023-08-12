import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./component/Header";
import NavigationBar from "./NavigationMenu";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <>
  <BrowserRouter>
    <Header />
    <App />
    </BrowserRouter>
  </>,
  document.getElementById("root")
);

reportWebVitals();