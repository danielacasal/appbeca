import { useCartContext } from "../../../context/CartContext"

const CartContainer = () => {

const {cartList, vaciarCart, removeItem} =  useCartContext()
//rendering condicional
  return (
    <div>
      <h5>SERVICIOS EN CARRITO:</h5>
      {cartList.map(servicio => <div key={servicio.id} className="row">
                                  <div className="col-3">
                                    <img src={`/${servicio.image}`} className='w-50'></img>
                                  </div>
                                  <div className="col-9">
                                    <label>Servicio: {servicio.name}</label>
                                    <label>- {servicio.cantidad}</label>
                                    <label>- Precio c/u ${servicio.price}</label>
                                    <button onClick={()=>removeItem(servicio.id)} className='btn btn-outline-danger'>Eliminar</button>
                                  </div>
                                </div>)}
        <br></br>
        <button onClick={vaciarCart} className='btn btn-outline-danger'>Vaciar Carrito</button>
    </div>
  )
}

export default CartContainer

