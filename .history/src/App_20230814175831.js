import React from "react";
import AllNews from "./component/AllNews";
import SportsNews from "./component/SportsNews";
import SciNews from "./component/SciNews";
import EntrNews from "./component/EntrNews";
import TrandNews from "./component/TrandNews";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import "./App.css";

export default function App() {
  return (
    <div>
      <nav>
      <Routes>
      <Route exact path="/" element={<Home/>}>
      </Route>

      <Route path="/allnews" element={<AllNews/>}>
        
      </Route>
    </Routes>
        <div className="social-media">
          <ul>
            <li>
              <a href="https://github.com/Bhavik-Sanghar" target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/bhaviksuiya22" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/sanghar_bhavik/"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/bhavik-sanghar-360712271/"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      

      <div id="AllNews" data-scroll>
        <AllNews />
      </div>
      <div id="Trend" data-scroll>
        <TrandNews />
      </div>
      <div id="SportsNews" data-scroll>
        <SportsNews />
      </div>
      <div id="SciNews" data-scroll>
        <SciNews />
      </div>
      <div id="Entertainment" data-scroll>
        <EntrNews />
      </div>
    </div>
  );
}
