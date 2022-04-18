import {CgShoppingCart} from "react-icons/cg";
import "./CartWidget.css";
import { useContext } from "react";
import CartContext from "../../Context/CartContext";

/* Botón de carrito más contador (todavía sin funcionamiento) */
const CartWidget = () => {

    const { getQuantity } = useContext(CartContext);

    return (
        <button className="btnCarrito">
            <CgShoppingCart size ={25} />
            { getQuantity() }
        </button>
    )
}

export default CartWidget;