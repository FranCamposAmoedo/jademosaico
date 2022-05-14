import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../../Context/CartContext";
import { useNotification } from "../../../Notification/Notification";

const ItemDetail = ({ id, img, name, description, price, stock }) => {

  const { addItem, isInCart, getQuantityProd } = useContext(CartContext);

  const { setNotification } = useNotification();

  const handleOnAdd = (count) => {
    
    const productObj = {
      id, name, price
    }

    addItem( {...productObj, quantity: count})
    setNotification(`Se agregaron ${count} ${name} correctamente`, 'success')
  };

  return (
    <>
      <div className="container-detail">
        <img className="picture" src={img} alt={name} />
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
          <div>
            {stock>0 ? <ItemCount initial={getQuantityProd(id)} stock={stock} onAdd={handleOnAdd} /> :<Link to="/" className="stock">Sin Stock</Link>}
            {(isInCart(id)) ? <Link to="/cart" className="btn btn-outline-secondary goCart">Terminar compra</Link> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
