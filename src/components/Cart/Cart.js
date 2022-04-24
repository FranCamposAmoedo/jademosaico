import { useContext } from "react";
import CartContext from "../Context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, removeItem, getQuantity, getTotal, clearCart } = useContext(CartContext);

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
      <div>
        <div className="container-fluid mx-auto listTitle">
          <div className="row">
            <div className="col-3 text-center">Producto</div>
            <div className="col-2 text-center">Cantidad</div>
            <div className="col-2 text-center">Unidad</div>
            <div className="col-2 text-center">Subtotal</div>
            <div className="col-3"></div>
          </div>
          <hr />
        </div>
        {cart.map((prod) => (
          <div className="container-fluid mx-auto" key={prod.id}>
            <div className="row align-items-center listaProductos">
              <div className="col-3 text-center">{prod.name}</div>
              <div className="col-2 text-center">{prod.quantity}</div>
              <div className="col-2 text-center">$ {prod.price}</div>
              <div className="col-2 text-center">$ {prod.price * prod.quantity}</div>
              <button className="col-3 btnEliminar" onClick={() => removeItem(prod.id)}>
                <span className="text">Borrar</span>
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                  </svg>
                </span>
              </button>
              <button className="col-3 btnEliminarMobile">X</button>
            </div>
          </div>
        ))}
      </div>
      <div className="card text-center totalProducts">
        <div className="card-body">
          <h5 className="card-title">TOTAL: ${getTotal()}</h5>
          <p className="card-text">Total productos: {getQuantity()}</p>
          <button className="btn btn-danger" onClick={() => clearCart()}>Vaciar carrito</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
