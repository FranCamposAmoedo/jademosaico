import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./Context/CartContext";
import ConfirmOrder from "./components/Cart/ConfirmOrder/ConfirmOrder";
import Footer from "./components/Footer/Footer";
import { NotificationProvider } from "./Notification/Notification";

const App = () => {
  return (
    <>
    <NotificationProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a "} />} />
            <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Productos,"} />} />            
            <Route path="/item/:productId" element={<ItemDetailContainer />} />        
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<ConfirmOrder />} />
            <Route path="*" element={<h1>NOT FOUND 404</h1>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </NotificationProvider>
    </>
  );
};

export default App;
