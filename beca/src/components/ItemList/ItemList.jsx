import { Link, useParams} from 'react-router-dom'
import Item from '../container/Item/Item'

const ItemList = ({servicios}) => {
  return (
    <div style={{
        display:'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        }}>
           {
           servicios.map(servicio => <Item key={servicio.key} servicio={servicio}/>)
           }
        </div>

  )
}

export default ItemList
