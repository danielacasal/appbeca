import { Link } from "react-router-dom"

const Item = ({servicio}) => {
    return (
        <div key={servicio.id} className='card w-25 mt-5'>
            <div className='card-head'> 
                {servicio.name}
            </div>
            <div className='card-body'> 
                <img src={`/${servicio.image}`} className='w-100'/>
            </div>
            <div className='card-footer'> 
                <h6>Categoria: {servicio.categoria}</h6>
                <h6>Precio por sesion: ${servicio.price}</h6>
                <Link to={`/detail/${servicio.id}`}>
                    <button className='btn btn-outline-dark w-100' >Ir a Detalle</button>
                </Link>
            </div>
        </div>
  )
}

export default Item
