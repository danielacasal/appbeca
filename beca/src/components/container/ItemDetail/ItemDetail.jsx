import ItemCount from "../../ItemCount/ItemCount"

const ItemDetail = ({servicio}) => {

    const onAdd = (cant)=>{
    console.log(cant)
}

  return (
    <div className="container"> 
      <div className="row">
        <div className="col-6">
          <h4>Servicio: {servicio.name}</h4>
          <h4>Categoria: {servicio.categoria} - </h4>
          <img src={servicio.image} className='w-100'/>
          <h4>Precio por sesion ${servicio.price}</h4>
        </div>
        <div className="col-6">
          <ItemCount onAdd={onAdd}/>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
