import "./NavBar.css";
import "./CartWidget/CartWidget.js";
import CartWidget from "./CartWidget/CartWidget.js";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { firestoreDb } from "../../services/firebase";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import CartContext from "../../Context/CartContext";

const NavBar = () => {
  const [categories, setCategories] = useState([])
  const { cart } = useContext(CartContext);

  useEffect(() => {
    getDocs(query(collection(firestoreDb, "categories"), orderBy("description", "desc"))).then(response => {
      const categories = response.docs.map(doc => {
        return {id: doc.id, ...doc.data()}
      })
      setCategories(categories);
    })
  }, [])

  return (
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
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="categories navbar-nav ms-auto">
            {categories.map(cat => <NavLink className={({ isActive }) => isActive ? "active-NavLink" : "nav-link"} key={cat.id} exact to={`/category/${cat.id}`}>{cat.description}</NavLink>)}
          </div>
        </div>
        {(cart.length !== 0) ? <CartWidget /> : null}
      </div>
    </nav>
  );
};

export default NavBar;
