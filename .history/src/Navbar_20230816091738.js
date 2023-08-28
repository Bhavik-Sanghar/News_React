function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a href="#">
          <img
            src="https://img.icons8.com/?size=512&id=ZokoEU0yT8cv&format=png"
            alt="Logo"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="#AllNews">All News</a>
            </li>
            <li class="nav-item">
              <a href="#Trend">Trending News</a>
            </li>
            <li class="nav-item">
              <a href="#SportsNews">Sports News</a>
            </li>
            <li class="nav-item">
              <a href="#SciNews">Science News</a>
            </li>
            <li class="nav-item">
              <a href="#Entertainment">Entertainment News</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
