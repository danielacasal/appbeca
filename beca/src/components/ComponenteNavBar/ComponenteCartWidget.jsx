import { Link, NavLink } from "react-router-dom"
import { useCartContext } from "../../context/CartContext";


export const Carrito = () => {
    const {cantidadTotal} =  useCartContext()
    return (
        <div>
            <NavLink to='/cart'>  
            {cantidadTotal()}
            🛒
            </NavLink>
        </div>
    )
}

export default Carrito
