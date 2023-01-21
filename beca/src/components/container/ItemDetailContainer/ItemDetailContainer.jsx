import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../../../utils/gFetch"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
  const [servicio, setServicio] = useState ({})
  const {detailId} = useParams()

  useEffect(()=>{
    gFetch(detailId)
    .then(resp=>setServicio(resp))
  }, [])
  return (
    <ItemDetail servicio={servicio}/>
  )
}

export default ItemDetailContainer
