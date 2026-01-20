import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { ShoppingCart, ChefHat } from 'lucide-react'

// Importamos nuestras páginas
import { Inicio } from './pages/Inicio'
import { Menu } from './pages/Menu'
import { Contacto } from './pages/Contacto'
import { Carrito } from './pages/Carrito'

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart([...cart, item])
    alert(`¡${item.name} añadido! 🇮🇹`)
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* BARRA DE NAVEGACIÓN */}
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center"> {/* Quitamos justify-between */}

            {/* 1. BLOQUE IZQUIERDO (Logo) - Usamos flex-1 para que ocupe espacio */}
            <div className="flex-1 flex justify-start">
              <Link to="/" className="flex items-center gap-2 text-gray-800 hover:text-orange-500 transition-colors">
                <ChefHat size={32} className="text-orange-500" />
                <span className="text-xl font-bold">IL PASTICCIO</span>
              </Link>
            </div>

            {/* 2. BLOQUE CENTRAL (Links) - Sin flex-1 para que no se estire */}
            <div className="hidden md:flex gap-8 font-medium text-gray-600">
              <Link to="/" className="hover:text-orange-500 transition-colors">Inicio</Link>
              <Link to="/menu" className="hover:text-orange-500 transition-colors">Menú</Link>
              <Link to="/contacto" className="hover:text-orange-500 transition-colors">Contacto</Link>
            </div>

            {/* 3. BLOQUE DERECHO (Carrito) - flex-1 igual que el izquierdo */}
            <div className="flex-1 flex justify-end">
              <Link to="/carrito" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ShoppingCart size={24} className="text-gray-600" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                    {cart.length}
                  </span>
                )}
              </Link>
            </div>

          </div>
        </nav>


        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/menu" element={<Menu addToCart={addToCart} />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito cart={cart} setCart={setCart} />} />
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App