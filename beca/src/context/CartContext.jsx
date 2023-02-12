import { useContext } from "react";
import { createContext, useState } from "react";

const CartContext = createContext ([])

export const useCartContext =() => useContext(CartContext)

export const CartContextProvider = ({children})=>{
    const [cartList, setCartList] = useState([])

    const agregarCart = (nuevoServicio) => {
        
        /*esto me duplica mas no me suma la cantidad no entiendo por que*/
        const idx = cartList.findIndex(servicio => servicio.id === nuevoServicio.id)

        if (idx !== -1) {
            cartList[idx].cantidad = cartList[idx].cantidad + nuevoServicio.cantidad
            setCartList([...cartList])
        } else {
            setCartList([...cartList, nuevoServicio])
        }

    }

    const cantidadTotal = () => cartList.reduce((count, objServicio) => count += objServicio.cantidad, 0 )

    const precioTotal = () => cartList.reduce((count, objServicio) => count+= (objServicio.cantidad * objServicio.price), 0)

    const eliminarItem = id => setCartList (cartList.filter(servicio => servicio.id !== id))

    const vaciarCart = () => {
        setCartList([])
    }

    return ( 
    <CartContext.Provider value = {{
        cartList,
        agregarCart,
        vaciarCart, 
        cantidadTotal,
        precioTotal,
        eliminarItem

    }}>
        {children}
    </CartContext.Provider>
    )
}