import React from "react";
import AllNews from "./component/AllNews";
import SportsNews from "./component/SportsNews";
import SciNews from "./component/SciNews";
import EntrNews from "./component/EntrNews";
import TrandNews from "./component/TrandNews";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div>
      <nav>
        <div className="logo">
          <a href="#">
            <img
              src="https://img.icons8.com/?size=512&id=ZokoEU0yT8cv&format=png"
              alt="Logo"
            />
          </a>
        </div>
        <ul>
          <li>
            <a href="#AllNews">All News</a>
          </li>
          <li>
            <a href="#Trend">Trending News</a>
          </li>
          <li>
            <a href="#SportsNews">Sports News</a>
          </li>
          <li>
            <a href="#SciNews">Science News</a>
          </li>
          <li>
            <a href="#Entertainment">Entertainment News</a>
          </li>
        </ul>
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

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          <li>
            <a href="#AllNews">All News</a>
          </li>
          <li>
            <a href="#Trend">Trending News</a>
          </li>
          <li>
            <a href="#SportsNews">Sports News</a>
          </li>
          <li>
            <a href="#SciNews">Science News</a>
          </li>
          <li>
            <a href="#Entertainment">Entertainment News</a>
          </li>
          /* Your existing CSS styles */

/* Media query for screens up to 768px wide (typical mobile devices) */
@media (max-width: 768px) {
  /* Styles for the collapsed navigation menu */
  nav ul {
    flex-direction: column;
    background-color: #333;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }

  nav li {
    margin: 10px 0;
  }

  nav a {
    font-size: 18px;
    color: white;
  }
}

        </ul>
      </div>

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
