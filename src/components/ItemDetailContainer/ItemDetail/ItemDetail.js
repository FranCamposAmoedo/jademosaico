import { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { getProductsById } from "../../asynmock";
import "./ItemDetail.css";

const ItemDetail = ({img, name, description, price, stock}) => {

  const handleOnAdd = (quantity) => {
    console.log(`Se agregaron ${quantity} productos`);
  };

  return (
    <div className="container">
      <div className="card">
        <img
          src={img}
          className="card-img-top"
          alt="Luminaria"
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="card-text info">
            {description} <br /><br />
            Precio: <b>${price}</b>
          </div>
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
