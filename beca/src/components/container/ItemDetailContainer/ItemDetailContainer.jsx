import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../../../utils/gFetch"
import ItemDetail from "../ItemDetail/ItemDetail"
import {getFirestore, doc} from "firebase/firestore"

const ItemDetailContainer = () => {
  const [servicio, setServicio] = useState ({})
  const {detailId} = useParams()

  useEffect(()=>{
  const db = getFirestore()
  const queryDoc = doc (db, 'items', detailId)
  getDoc (queryDoc)
  .then(results => setServicio ({id: results.id, ... results.data() } ))
  .catch(err => console.error(err))
  }, [])
  return (
    <ItemDetail servicio={servicio}/>
  )
}

export default ItemDetailContainer
