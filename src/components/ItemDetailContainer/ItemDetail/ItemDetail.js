import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../Context/CartContext";

/* Traigo las propiedades desestructurando desde el ItemDetailContainer */
const ItemDetail = ({ id, img, name, description, price, stock }) => {

  const { addItem, isInCart, getQuantityProd } = useContext(CartContext);

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
          <div className="d-inline justify-content-center">
            <ItemCount initial={getQuantityProd(id)} stock={stock} onAdd={handleOnAdd} />
          {(isInCart(id)) ? <Link to="/cart" className="btn btn-outline-secondary goCart">Terminar compra</Link> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
