
import './App.css'
import {Children, useState} from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import {ItemListContainer} from './components/container/ItemListContainer/ItemListContainer'
import ComponenteContenedor from './components/ComponenteContenedor/ComponenteContenedor'
import Contacto from './components/ComponenteBuscador/ComponenteBuscador'
import Menu from './components/ComponenteNavBar/ComponenteNavBar'
import Carrito from './components/ComponenteNavBar/ComponenteCartWidget'
import ItemDetailContainer from './components/container/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './components/container/CartContainer/CartContainer'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Carrito />
      <ComponenteContenedor saludo='bienvenido'/>
      <Routes>
        <Route path= '/' element={<ItemListContainer/>}/>
        <Route path= '/detail/:detailId' element={<ItemDetailContainer/>}/>     
        <Route path= '/categoria/:categoryId' element={<ItemListContainer/>}/>
        <Route path= '/cart' element={<CartContainer/>}/>
        <Route path= '*' element={<Navigate to='/'/>}/>
      </Routes>
      <Contacto />
    </BrowserRouter>
  )
}


export default App

