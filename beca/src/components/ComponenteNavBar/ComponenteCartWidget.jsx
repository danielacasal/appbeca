import { Link, NavLink } from "react-router-dom"
import { useCartContext } from "../../context/CartContext";


export const Carrito = () => {
    const {cantidadTotal} =  useCartContext()
    return (
        <div>
            {/*esto tampoco me suma, me pone las distintas cantidades que agrego en la misma linea pero no suma*/}
            <NavLink to='/cart'>  
            {cantidadTotal()}
            🛒
            </NavLink>
        </div>
    )
}

export default Carrito
