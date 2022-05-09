import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./components/Context/CartContext";
import ConfirmOrder from "./components/Cart/ConfirmOrder/ConfirmOrder";

const App = () => {
  return (
    <>
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
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
};

export default App;
