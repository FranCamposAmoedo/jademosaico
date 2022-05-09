import { collection, addDoc, writeBatch, getDocs, query, where, documentId } from "firebase/firestore";
import { firestoreDb } from "../../../services/firebase";
import { useContext, useState } from "react";
import CartContext from "../../Context/CartContext";
import { Link } from "react-router-dom";
import "./ConfirmOrder.css";

const initialState = {
    name: "",
    lastName: "",
    address: "",
    tel: ""
}

const ConfirmOrder = () => {
    const { cart, clearCart,  getTotal } = useContext(CartContext);
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const [userInfo, setUserInfo] = useState(initialState);

    const getInfo = (e) => {
        const { value, name } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    }

    const createOrder = () => {
        setLoading(true)
    
        const objOrder = {
          items: cart,
          userInfo: userInfo,
          total: getTotal(),
          date: new Date()
        }
    
        const ids = cart.map(prod => prod.id);
    
        const batch = writeBatch(firestoreDb);
    
        const collectionRef = collection(firestoreDb, "products");
    
        const outOfStock = []
    
        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
              response.docs.forEach(doc => {
                const dataDoc = doc.data()
                const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity
    
                if(dataDoc.stock >= prodQuantity) {
                  batch.update(doc.ref, {stock: dataDoc.stock - prodQuantity})
                } else {
                  outOfStock.push({ id: doc.id, ...dataDoc })
                }
              })
            }).then(() => {
              if(outOfStock.length === 0) {
                const collectionRef = collection(firestoreDb, "orders")
                return addDoc(collectionRef, objOrder)
              } else {
                return Promise.reject({ name: "outOfStockError", products: outOfStock})
              }
            }).then(({ id }) => {
              batch.commit()
              const orderId = id
              clearCart()
              return setOrderId(orderId)              
            }).catch(error => {
              console.log(error)
            }).finally(() => {
              setLoading(false)
            })
      }

      if (orderId) {
          return (
            <>
              <h1 className="greeting">Orden generada</h1>
              <hr />
                <div className="d-flex">
                  <div className='d-flex justify-content-between flex-column align-items-center confirmation'>
                    <div className='mb-3'>
                      Su pedido ha sido enviado correctamente
                    </div>
                    <h3>Nro orden: <strong>{orderId}</strong></h3>
                    <h3><Link className="btn btn-outline-success btn-back" to="/">Volver al Catalogo</Link></h3>
                 </div>
                </div>
            </>
          )
      }
    
      if(loading) {
        return (
          <>
            <h1 className="greeting">Se está generando su orden</h1>
            <hr />
          </>
        )
      }
     
      if (cart.length === 0) {
        return (
          <>
            <h1 className="greeting">El carrito está vacío</h1>
            <div className="d-flex justify-content-center mt-5">
                <Link className="btn btn-outline-secondary" to={"/"}>Volver al Inicio</Link>
            </div>   
          </>
        );
      }

    return (
        <>
        <h1 className="greeting">Complete el formulario</h1>
        <hr />
            <div className="form">
                <div className="form-floating mb-3 inputContainer">
                    <input type="text" name="name" value={userInfo.name} onChange={getInfo} className="form-control" id="floatingName" placeholder="Name" />
                    <label htmlFor="floatingName">Nombre</label>
                </div>
                <div className="form-floating mb-3 inputContainer">
                    <input type="text" name="lastName" value={userInfo.lastName} onChange={getInfo} className="form-control" id="floatingLastName" placeholder="Last name" />
                    <label htmlFor="floatingLastName">Apellido</label>
                </div>
                <div className="form-floating mb-3 inputContainer">
                    <input type="email" name="email" value={userInfo.email} onChange={getInfo} className="form-control" id="floatingEmail" placeholder="Email" />
                    <label htmlFor="floatingEmail">Email</label>
                </div>
                <div className="form-floating mb-3 inputContainer">
                    <input type="text" name="address" value={userInfo.address} onChange={getInfo} className="form-control" id="floatingAddress" placeholder="Address" />
                    <label htmlFor="floatingAddress">Dirección</label>
                </div>
                <div className="form-floating mb-3 inputContainer">
                    <input type="tel" name="tel" value={userInfo.tel} onChange={getInfo} className="form-control" id="floatingTel" placeholder="Tel" />
                    <label htmlFor="floatingTel">Teléfono</label>
                </div>
                <button className="btn btn-outline-success btnOrden" onClick={() => createOrder()}>Enviar Pedido</button>
            </div>
         
        </>
    )
}

export default ConfirmOrder;
