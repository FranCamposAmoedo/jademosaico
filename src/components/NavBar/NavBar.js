import "./NavBar.css";
import "./CartWidget/CartWidget.js";
import CartWidget from "./CartWidget/CartWidget.js";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCategories } from "../asynmock";

/* Creo un estado para poder guardar las categorías y setearlas */
const NavBar = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then(categories => {
      setCategories(categories)
    })
  }, [])

  return (
    /* Uso bootstrap para el NavBar */
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand logo">
          <img src="../images/Logo-Jade.png" alt="" width="60" height="60" />
        </Link>
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
        {/* Mediante un método map cargo cada una de las categorías trayendolas desde el Async Mock */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="categories navbar-nav ms-auto">
            { categories.map(cat => <NavLink className="nav-link" key={cat.id} to={`/category/${cat.id}`}>{cat.description}</NavLink>)}
          </div>
        </div>
        {/* Llamo al componente del carrito */}
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
