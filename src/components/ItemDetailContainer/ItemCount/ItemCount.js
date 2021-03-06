import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ initial = 1, stock, onAdd }) => {

  const [count, setCount] = useState(initial);

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div className="counter">
      <button className="btnCounter" onClick={decrement}>-</button>
      <p>{count}</p>
      <button className="btnCounter" onClick={increment}>+</button>
      <button onClick={() => onAdd(count)} className="btn btn-outline-secondary">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
