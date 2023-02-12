
import { useCartContext } from "../../../context/CartContext"
import ItemCount from "../../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"

const ItemDetail = ({servicio}) => {
    const [isInCount, setIsInCount] = useState(true)
    const {agregarCart} = useCartContext()

    const onAdd = (cant)=>{
    console.log(cant)
    agregarCart ({... servicio, cantidad: cant})
    setIsInCount(false)
}

  return (
    <div className="container"> 
      <div className="row">
        <div className="col-6">
          <h4>Servicio: {servicio.name}</h4>
          <h4>Categoria: {servicio.categoria} - </h4>
          <img src={`/${servicio.image}`} className='w-100'/>
          <h4>Precio por sesion ${servicio.price}</h4>
        </div>
        <div className="col-6">
          {isInCount ?
            <ItemCount onAdd={onAdd}/>
          :
            <>
            <Link to={'/cart'}>
                <button className="btn btn-outline-primary">Ir al Carrito</button>
            </Link>
            <Link to={'/'}>
                <button className="btn btn-outline-success">Seguir comprando</button>
            </Link>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
