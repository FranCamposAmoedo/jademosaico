import Item from "../Item/Item";
import "./ItemList.css";

/* Aplico un método Map para que cargue cada producto usando el componentente Item */
const ItemList = ({ products }) => {
  return (
    <div className="contenedor">
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;
