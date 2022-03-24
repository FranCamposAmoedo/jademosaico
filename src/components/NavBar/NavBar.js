import "./NavBar.css";
import "./CartWidget/CartWidget.js";
import CartWidget from "./CartWidget/CartWidget.js";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand logo" href="#">
          <img src="../images/Logo-Jade.png" alt="" width="60" height="60" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link" href="#">
              Mesas
            </a>
            <a className="nav-link" href="#">
              Luminarias
            </a>
            <a className="nav-link" href="#">
              Macetas
            </a>
            <a className="nav-link" href="#">
              Accesorios
            </a>
          </div>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
