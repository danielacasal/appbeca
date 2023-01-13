
import './App.css'
import ComponenteContenedor from './components/ComponenteContenedor/ComponenteContenedor'
import Contacto from './components/ComponenteBuscador/ComponenteBuscador'
import Menu from './components/ComponenteNavBar/ComponenteNavBar'
import Carrito from './components/ComponenteNavBar/ComponenteCartWidget'

function App() {
  return (
    <><div className="App">
      <header>
        <nav>
          <Menu />
          <Carrito />
        </nav>
      </header>
      <h1>App de Servicios</h1>
    </div><>
        <ComponenteContenedor saludo='bienvenido'/>
        <Contacto />
      </></>
  )
}


export default App

