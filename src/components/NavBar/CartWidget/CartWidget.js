import {CgShoppingCart} from "react-icons/cg";
import "./CartWidget.css";
import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import { Link } from "react-router-dom";

/* Botón de carrito más contador (todavía sin funcionamiento) */
const CartWidget = () => {

    const { getQuantity } = useContext(CartContext);

    return (
        <Link to={"/cart"} className="btnCarrito">
            <CgShoppingCart size ={25} />
            { getQuantity() }
        </Link>
    )
}

export default CartWidget;