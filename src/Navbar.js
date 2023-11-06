function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiarydata-bs-theme=dark sticky-top ">
      <div className="container-fluid">
        <a href="#">
          <img className="logo "
            src="https://img.icons8.com/?size=512&id=ZokoEU0yT8cv&format=png"
            alt="Logo"
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#AllNews">All News</a>
            </li>
            <li className="nav-item">
              <a href="#Trend">Trending News</a>
            </li>
            <li className="nav-item">
              <a href="#SportsNews">Sports News</a>
            </li>
            <li className="nav-item">
              <a href="#SciNews">Science News</a>
            </li>
            <li className="nav-item">
              <a href="#Entertainment">Entertainment News</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
