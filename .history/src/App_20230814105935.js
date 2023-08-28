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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="https://img.icons8.com/?size=512&id=ZokoEU0yT8cv&format=png"
              alt="Logo"
              width="50"
              height="50"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="#AllNews">
                  All News
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Trend">
                  Trending News
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#SportsNews">
                  Sports News
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#SciNews">
                  Science News
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Entertainment">
                  Entertainment News
                </a>
              </li>
            </ul>
            <div className="social-media">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://github.com/Bhavik-Sanghar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://twitter.com/bhaviksuiya22"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.instagram.com/sanghar_bhavik/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.linkedin.com/in/bhavik-sanghar-360712271/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div id="AllNews">
        <AllNews />
      </div>
      <div id="Trend">
        <TrandNews />
      </div>
      <div id="SportsNews">
        <SportsNews />
      </div>
      <div id="SciNews">
        <SciNews />
      </div>
      <div id="Entertainment">
        <EntrNews />
      </div>
    </div>
  );
}