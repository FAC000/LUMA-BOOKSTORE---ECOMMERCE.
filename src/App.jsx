import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { NavigationBar } from './components/NavigationBar'
import './styles/App.css'
import { Productos } from './components/Productos'
import { CarritoProvider } from './Hooks/CarritoContext'
import { ProductoDetails } from './components/ProductoDetails'
import { ProductoGenero } from './components/ProductoGenero'
import { CartProducts } from './components/CartProducts'


function App() {
  return (
    <CarritoProvider>

      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path='/productos/:pid' element={<ProductoDetails />} />
          <Route path='/categoria/:cat' element={<ProductoGenero />} />
          <Route path='/carrito' element={<CartProducts />} />
        </Routes>
      </Router>
    </CarritoProvider>

  )
}

export default App
