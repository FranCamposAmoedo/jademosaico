import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../Context/CartContext";

/* Traigo las propiedades desestructurando desde el ItemDetailContainer */
const ItemDetail = ({ id, img, name, description, price, stock }) => {

  const { addItem, isInCart } = useContext(CartContext);

  const handleOnAdd = (count) => {
    
    const productObj = {
      id, name, price
    }

    addItem( {...productObj, quantity: count})
  };

  return (
    /* El detalle del producto */
    <>
      <div className="contenedor">
        <img className="picture" src={img} alt="Luminaria" />
        <div className="padre-detalles">
          <div className="detalles">
            <h5>{name}</h5>
            <p>
              {description}
              <br />
              <span className="precio">
                Precio: <b>${price}</b>
              </span>
            </p>
          </div>
          {isInCart(id) ? <Link to="/cart" className="btn btn-outline-secondary goCart">¡Gracias por su compra! Ir al carrito</Link> : <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />}
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
