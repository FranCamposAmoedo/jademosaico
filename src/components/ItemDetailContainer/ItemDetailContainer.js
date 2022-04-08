import { useState, useEffect } from "react";
import { getProductsById } from "../asynmock";
import ItemDetail from "./ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProductsById(5).then((prods) => {
        setProducts(prods);
      }).catch((error) => {
        console.log(error);
      });
  }, []);
   
    return (
      <>
        <ItemDetail img={products.img} name={products.name} description={products.description} price={products.price} stock={products.stock} />
      </>
    );
  };
  
  export default ItemDetailContainer;