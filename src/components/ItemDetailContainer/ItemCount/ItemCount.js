import { useState } from "react";
import "./ItemCount.css";

/* Desde el ItemDetail se pasan las propiedades */
const ItemCount = ({ initial = 1, stock, onAdd }) => {

  /* Estado para guardar el nro del contador (empezando desde initial) */
  const [count, setCount] = useState(initial);

  /* Función que decrementa en 1 */
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  /* Función que incrementa en 1 */
  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    /* Los botones para restar o sumar productos y el botón para agregar al carrito (sin funcionamiento todavía) */
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
