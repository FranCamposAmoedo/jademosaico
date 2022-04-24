import "./NavBar.css";
import "./CartWidget/CartWidget.js";
import CartWidget from "./CartWidget/CartWidget.js";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { getCategories } from "../asynmock";
import CartContext from "../Context/CartContext";

/* Creo un estado para poder guardar las categorías y setearlas */
const NavBar = () => {
  const [categories, setCategories] = useState([])
  const { cart } = useContext(CartContext);

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
            { categories.map(cat => <Link className="nav-link" key={cat.id} to={`/category/${cat.id}`}>{cat.description}</Link>)}
          </div>
        </div>
        {/* Llamo al componente del carrito */}
        {(cart.length !== 0)?
        <CartWidget /> : null}
      </div>
    </nav>
  );
};

export default NavBar;
