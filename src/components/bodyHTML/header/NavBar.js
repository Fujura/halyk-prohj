// import styles from './NavBar.module.css';
import logo from "./logo.png";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" className="logo" />
          <h2 className="text-white">Halyk</h2>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link
                to="/"
                className="nav-link active text-white"
                aria-current="page"
              >
                Главная
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/scan" className="nav-link text-white">
                Сканировать QR
              </Link>
            </li>
            {/* <li class="nav-item">
                <a class="nav-link text-white" href="#"></a>
              </li> */}
          </ul>
          <Link
            to="/login"
            className="navbar-text text-white text-decoration-none cursor-pointer"
          >
            Log Out
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
