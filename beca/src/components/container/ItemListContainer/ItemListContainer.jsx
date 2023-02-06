import {useState, useEffect } from 'react'
import { Link, useParams} from 'react-router-dom'
import {gFetch } from '../../../utils/gFetch.js'
import ItemList from '../../ItemList/ItemList.jsx'
import Loader from '../../Loader/Loader.jsx'

export const ItemListContainer = ({saludo})=>{
    const [servicios, setServicios]= useState([])
    const [cargando, setCargando]= useState(true)
    const {categoryId} = useParams()


    useEffect(()=>{
        if(categoryId) {
            gFetch()
            .then(respuestaPromesa=> {
                setServicios(respuestaPromesa.filter(items => items.categoria === categoryId))
            })
                .catch(err => console.log(err))
                .finally(()=> setCargando(false))
        } else {

            gFetch()
            .then(respuestaPromesa=> {
                setServicios(respuestaPromesa)
            })
                .catch(err => console.log(err))
                .finally(()=> setCargando(false))
        }
    }, [categoryId])
    
    console.log(categoryId)

    return (
        <div className='container'>
            {cargando 
           ?
                <Loader/>
           :
            <ItemList servicios={servicios}/>
            }
        </div>
    )
}