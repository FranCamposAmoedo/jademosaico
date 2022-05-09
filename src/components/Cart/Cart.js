import { useContext } from "react";
import CartContext from "../Context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import ItemCart from "./ItemCart/ItemCart";


const Cart = () => {
  const { cart, getQuantity, getTotal, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <>
        <h1 className="greeting">El carrito está vacío</h1>
        <div className="d-flex justify-content-center mt-5">
            <Link className="btn btn-outline-secondary" to={"/"}>Volver al Inicio</Link>
        </div>   
      </>
    );
  }

  return (
    <>
      <h1 className="greeting">Carrito de compras</h1>
      <hr />
      <ItemCart />
      <div className="card text-center totalProducts">
        <div className="card-body">
          <h5 className="card-title">TOTAL:<b>&nbsp;${getTotal()}</b></h5>
          <p className="card-text">Total productos:<b>&nbsp;{getQuantity()}</b></p>
          <button className="btn btn-outline-danger" onClick={() => clearCart()}>Vaciar Carrito</button>
          <Link to="/order" className="btn btn-outline-success btnOrden">Finalizar Compra</Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
