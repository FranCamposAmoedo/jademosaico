import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestoreDb } from "../../services/firebase";
import ItemList from "./ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {

  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

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
