import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

/* Traigo las propiedades desestructurando desde el ItemDetailContainer */
const ItemDetail = ({ img, name, description, price, stock }) => {

  /* Función que avisa cuánto productos se agregaron al carrito */
  const handleOnAdd = (quantity) => {
    console.log(`Se agregaron ${quantity} productos`);
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
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
