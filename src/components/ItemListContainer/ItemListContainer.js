import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestoreDb } from "../../services/firebase";
import ItemList from "./ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {

  /* Un estado para guardar los productos en un array */
  const [products, setProducts] = useState([]);

  /* Para poder filtrar por categoría usando la misma función */
  const { categoryId } = useParams();

  /* Llamo a la función después del renderizado cada vez que se modifica el categoryId */
  useEffect(() => {
      const collectionRef = categoryId
         ? query(collection(firestoreDb, "products"), where("category", "==", categoryId))
         : collection(firestoreDb, "products")

      getDocs(collectionRef).then(response => {
        console.log(response)
        const products = response.docs.map(doc => {
          return { id: doc.id, ...doc.data()}
        })
        setProducts(products)
      })
  }, [categoryId]);

  return (
    <>
    {/* Un h1 y luego los productos, que si todavía no se cargaron aparece un spinner */}
      <h1 className="greeting">{props.greeting}</h1>
      {products.length > 0 ? 
        <ItemList products={products} />
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

export default ItemListContainer;
