import React, {useState, useEffect } from 'react'
import { Link, useParams} from 'react-router-dom'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import {gFetch} from '../../../utils/gFetch'
import ItemList from '../../ItemList/ItemList.jsx'
import Loader from '../../Loader/Loader.jsx'
import { db } from '../../../utils/firebase'

export const ItemListContainer = ({saludo})=>{
    const [servicios, setServicios]= useState([])
    const [cargando, setCargando]= useState(true)
    const {categoryId} = useParams()

    useEffect(()=> {
        const db = getFirestore()
        const queryCollection = collection(db, 'servicios')

        if (categoryId) {
        const queryCollectionFilter = query (queryCollection, where('categoria', '==', categoryId))

            getDocs(queryCollectionFilter)
            .then(respuestaPromesa=> {
                setServicios(respuestaPromesa.docs.map(servicio => ({id: servicio.id, ...servicio.data()})))
            })
            .catch(err => console.log(err))
            .finally(()=> setCargando(false))
        } else {
            getDocs(queryCollection)
            .then(respuestaPromesa=> {
                setServicios(respuestaPromesa.docs.map(servicio => ({id: servicio.id, ...servicio.data()})))
            })
            .catch(err => console.log(err))
            .finally(()=> setCargando(false))
    }
    
    }, [categoryId])
    console.log(servicios)
    
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


/*

export const ItemListContainer = ({saludo})=>{
    const [servicios, setServicios]= useState([])
    const [cargando, setCargando]= useState(true)
    const {categoryId} = useParams()

    useEffect(()=> {

        const db =  getFirestore()
        const queryCollection = collection(db, 'items')

        if (categoryId) {
            const queryCollectionFilter = query (queryCollection, where ('categoria', '==', categoryId))

            getDocs(queryCollectionFilter)
            .then(respuestaPromesa=> {
               setServicios(respuestaPromesa.docs.map(servicio => ({id: servicio.id, ...servicio.data()})))
            })
                .catch(err => console.log(err))
                .finally(()=> setCargando(false))



        } else {
        getDocs(queryCollection)
        .then(respuestaPromesa=> {
           setServicios(respuestaPromesa.docs.map(servicio => ({id: servicio.id, ...servicio.data()})))
        })
            .catch(err => console.log(err))
            .finally(()=> setCargando(false))
    }
    }, [categoryId])

/*
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
}*/