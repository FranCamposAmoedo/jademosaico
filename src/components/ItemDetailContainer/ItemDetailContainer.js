import { useState, useEffect } from "react";
import { getProductsById } from "../asynmock";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  /* Estado para guardar el detalle del producto */
  const [products, setProducts] = useState();

  /* Para pasarle a la función getProductsById el Id del producto */
  const { productId } = useParams();

  useEffect(() => {
    getProductsById(productId)
      .then((prods) => {
        setProducts(prods);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
    {/* Si no hay productos carga un spinner */}
      {products ? 
        <ItemDetail {...products} />
       : 
        <div className="text-center m-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      }
    </>
  );
};

export default ItemDetailContainer;
