import { useState, useEffect } from "react";
import { firestoreDb } from "../../services/firebase";
import { getDoc, doc } from "firebase/firestore";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  /* Estado para guardar el detalle del producto */
  const [product, setProduct] = useState();

  /* Para pasarle a la función getProductsById el Id del producto */
  const { productId } = useParams();

  useEffect(() => {
       getDoc(doc(firestoreDb, "products", productId)).then(response => {
        console.log(response)
        const product = { id: response.id, ...response.data()}
        setProduct(product)
      })
      return (() => {
        setProduct()
    })
}, [productId])

  return (
    <>
    {/* Si no hay productos carga un spinner */}
      {product ? 
        <ItemDetail {...product} />
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
