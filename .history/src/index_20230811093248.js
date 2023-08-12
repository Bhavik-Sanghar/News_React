import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./component/Header";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <>
 
    {/* <Header /> */}
    <App />
  </>,
  document.getElementById("root")
);

reportWebVitals();
