import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./component/Header";
import NavigationBar from "./NavigationMenu";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
