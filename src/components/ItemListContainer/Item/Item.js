import "./Item.css";

const Item = ({ name, img }) => {
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <button className="btn btn-outline-secondary">Ver detalles</button>
        </p>
      </div>
    </div>
  );
};

export default Item;
