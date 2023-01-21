import { Link, NavLink } from "react-router-dom"

function Menu  () {
    return (
<>
    <NavLink to='/'>    
        <li>LA TIENDA DE BECA</li>
    </NavLink>
    <NavLink className={({isActive})=>isActive ? 'bg-success' : 'bg-light'} to="/categoria/masajes"> 
        Masajes
    </NavLink> 
    <NavLink className={({isActive})=>isActive ? 'bg-success' : 'bg-light'} to="/categoria/esteticos"> 
        Estetica
    </NavLink> 
</>
    )
}

export default Menu