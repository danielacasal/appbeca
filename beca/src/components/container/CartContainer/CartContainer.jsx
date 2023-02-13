import { useCartContext } from "../../../context/CartContext"

const CartContainer = () => {

const {cartList, vaciarCart, precioTotal, eliminarItem} =  useCartContext()
//rendering condicional
  return (
    <div>
      <h5>SERVICIOS EN CARRITO:</h5>
      {cartList.map(servicio => <div key={servicio.id} className="row">
                                  <div className="col-3">
                                    <img src={`${servicio.image}`} className='w-50'></img>
                                  </div>
                                  <div className="col-9">
                                    <label>Servicio: {servicio.name}</label>
                                    <label>- {servicio.cantidad}</label>
                                    <label>- Precio c/u ${servicio.price}</label>
                                    {/*poner boton solo si hay items en carrito*/}
                                    <button onClick = {() => eliminarItem (servicio.id)}> X </button>
                                    {/* esto me da NaN*/}
                                    {precioTotal() !== 0 && <h4>Precio Total: {precioTotal()}</h4>}
                                  </div>
                                </div>)}
        <br/>
        <button onClick={vaciarCart} className='btn btn-outline-danger'>Vaciar Carrito</button>
    </div>
  )
}

export default CartContainer

