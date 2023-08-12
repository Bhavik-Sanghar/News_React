import React from "react";
import "./Header.css"; // Make sure to create a Header.css file for the styles
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import logo from "./images/logo2.png";

// Use the 'logo' variable as the source for your <img> tag
<img src={logo} alt="Your Logo" />;

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="#">
          <img src={logo} alt="Your Logo" width={100} height={75} />
        </a>
      </div>
      <nav className="social-media">
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
            <a href="https://www.instagram.com/sanghar_bhavik/" target="_blank">
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
      </nav>
    </header>
  );
};

export default Header;
