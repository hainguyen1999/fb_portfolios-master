// START HEADER JSX
import { Link } from "react-router-dom";
import Logo from "../images/logo512.png";

function Header() {
  return (
    <header className="l-header w-100">
      <nav className="navbar mx-auto navbar-expand-lg mx-4 container">
        <span className="nav_brand">
          <img src={Logo} alt="logo brand" />
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item lnk-space">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/setup">New Portfolio</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
