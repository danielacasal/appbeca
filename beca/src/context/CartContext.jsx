import { useContext } from "react";
import { createContext, useState } from "react";

const CartContext = createContext ([])

export const useCartContext =() => useContext(CartContext)

export const CartContextProvider = ({children})=>{
    const [cartList, setCartList] = useState([])

    const agregarCart = (servicio) => {
        //if servicio  in CartList {

        //}
        setCartList([...cartList, servicio])
    }

    const vaciarCart = () => {
        setCartList([])
    }

    const removeItem = () => {
        setCartList(cartList.pop()) //arreglar
    }

    return ( 
    <CartContext.Provider value = {{
        cartList,
        agregarCart,
        vaciarCart, 
        removeItem
    }}>
        {children}
    </CartContext.Provider>
    )
}