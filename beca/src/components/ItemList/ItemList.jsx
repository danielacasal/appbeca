import { Link, useParams} from 'react-router-dom'
import React from 'react'
import Item from '../container/Item/Item'

const ItemList = ({servicios}) => {
  return (
    <div style={{
        display:'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        }}>
           {
           servicios.map(servicio => <Item key={servicio.id} servicio={servicio}/>)
           }
        </div>

  )
}

export default ItemList
