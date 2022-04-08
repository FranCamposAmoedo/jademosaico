import { useState, useEffect } from "react";
import { getProducts } from "../asynmock";
import ItemList from "./ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((prods) => {
        setProducts(prods);
      }).catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1 className="greeting">{props.greeting}</h1>
      {
      products.length>0 ? 
         <ItemList products={products} /> 
      : <p>Loading...</p>
      }
    </>
  );
};

export default ItemListContainer;
