import {CgShoppingCart} from "react-icons/cg";
import "./CartWidget.css";

/* Botón de carrito más contador (todavía sin funcionamiento) */
const CartWidget = () => {
    return (
        <button className="btnCarrito">
            <CgShoppingCart size ={25} />
            <a>0</a>
        </button>
    )
}

export default CartWidget;