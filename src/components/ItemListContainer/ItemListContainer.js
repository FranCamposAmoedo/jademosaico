import "./ItemListContainer.css";
import ItemCount from "./ItemCount/ItemCount";

const ItemListContainer = (props) => {
  const handleOnAdd = (quantity) => {
      console.log(`Se agregaron ${quantity} productos`);
    };

  return (
    <>
      <h1 className="greeting">{props.greeting}</h1>
      <div className="container">
        <div className="card">
          <img
            src="../images/Luminaria1.jpeg"
            className="card-img-top"
            alt="Luminaria"
          />
          <div className="card-body">
            <h5 className="card-title">Luminaria</h5>
            <p className="card-text">
              Medidas: 20cm x 20cm <br />
              Color: Naranja y Azul <br />
              Precio: <b>$3999</b>
            </p>
            <ItemCount initial={1} stock={5} onAdd={handleOnAdd} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
