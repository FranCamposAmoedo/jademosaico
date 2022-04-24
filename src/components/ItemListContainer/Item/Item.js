import "./Item.css";
import { Link } from "react-router-dom";

/* Componente que crea cada Card de cada producto que le va a pasar el ItemList */
const Item = ({ id, name, img }) => {
  return (
    <div className="card cardItem">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <Link to={`/item/${id}`} className="btn btn-outline-secondary">Ver detalles</Link>
        </p>
      </div>
    </div>
  );
};

export default Item;
