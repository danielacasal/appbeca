import { useCartContext } from "../../../context/CartContext"
import {addDoc, collection, doc, getFirestore, updateDoc} from 'firebase/firestore'
import { useState } from 'react'
import Swal from 'sweetalert2'


const CartContainer = () => {

const [dataForm, setDataForm] = useState({
  name: '',
  phone: '',
  email: '',
  validarEmail: ''
})

const {cartList, vaciarCart, precioTotal, eliminarItem} =  useCartContext()

const generarOrden = (evento) => {
  evento.preventDefault()
  console.log("Orden Generada")

  const order = {}

  order.buyer = dataForm
  order.items = cartList.map(({id,name, price}) => ({name, price, id}))
  order.total = precioTotal ()

  const db = getFirestore ()
  const queryCollection =  collection(db, 'orders')

  addDoc(queryCollection, order)
  .then(resp => 
    Swal.fire({
      title:"Orden enviada",
      text: `Numero de orden: ${resp.id}`,
      icon: "success",
      showConfirmButton: false,
      timer: 6000})
    )
  .catch(err => console.log(err))
}

const handleOnChange = (evento) => {
  console.log(evento.target.name)
  console.log(evento.target.value)
  setDataForm({
    ...dataForm, 
    [evento.target.name]: evento.target.value
  })
}
console.log(dataForm)



  return (
    <>
    {cartList.length === 0 
    ?<p>Tu carrito esta vacio!</p>
  :<div>
  <h5>SERVICIOS EN CARRITO:</h5>
  {cartList.map(servicio => <div key={servicio.id} className="row">
                              <div className="col-3">
                                <img src={`${servicio.image}`} className='w-50'></img>
                              </div>
                              <div className="col-9">
                                <label>Servicio: {servicio.name}</label>
                                <label>- {servicio.cantidad}</label>
                                <label>- Precio c/u ${servicio.price}</label>
                                <button onClick = {() => eliminarItem (servicio.id)}> X </button>
                              </div>
                            </div>)}
    <br/>
{precioTotal() !== 0 && <h4>Precio Total: {precioTotal()}</h4>}
<button onClick={vaciarCart} className='btn btn-outline-danger'>Vaciar Carrito</button>
<form onSubmit={generarOrden} className='form-control'>
  <h3>Formulario</h3>
  <input 
    type="text" required
    name="name"
    placeholder="ingresar nombre"
    value={dataForm.name}
    onChange={handleOnChange}
  /><br/>
    <input 
    type="phone" required
    name="phone"
    placeholder="ingresar telefono"
    value={dataForm.phone}
    onChange={handleOnChange}
  /><br/>
    <input 
    type="email" required
    name="email"
    placeholder="ingresar email"
    value={dataForm.email}
    onChange={handleOnChange}
  /><br/>
    <input required
    type="email"
    name="validarEmail"
    placeholder="re-ingresar email"
    value={dataForm.validarEmail}
    onChange={handleOnChange}
    /><br/>
  {"email" !== "validarEmail" && <button type="submit" className='btn btn-outline-success'>Generar Orden</button>}
</form>
</div>}
    </>
  )
}

export default CartContainer

