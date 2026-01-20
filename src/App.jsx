import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { ShoppingCart, ChefHat, Menu as MenuIcon, X } from 'lucide-react'
import { Toaster, toast } from 'react-hot-toast';

// Importamos nuestras páginas
import { Inicio } from './pages/Inicio'
import { Menu } from './pages/Menu'
import { Contacto } from './pages/Contacto'
import { Carrito } from './pages/Carrito'
import { Footer } from './components/Footer'

function App() {
  const [cart, setCart] = useState([])
  // 2. Estado para saber si el menú móvil está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const addToCart = (item) => {
    setCart([...cart, item])
    toast.success(`¡${item.name} añadido! 🍕`, {
      position: "bottom-center", // Sale abajo al centro
      style: {
        background: "#1e293b", // Color oscuro elegante
        color: "#fff",
      },
    })
  }

  // Función para cerrar el menú al hacer clic en un enlace
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* BARRA DE NAVEGACIÓN */}
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

            {/* 1. BLOQUE IZQUIERDO (Logo + Botón Móvil) */}
            <div className="flex items-center gap-4 flex-1">
              {/* Botón Hamburguesa (Solo visible en móvil) */}
              <button
                className="md:hidden text-gray-600 hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
              </button>

              <Link to="/" className="flex items-center gap-2 text-gray-800 hover:text-orange-500 transition-colors" onClick={closeMenu}>
                <ChefHat size={32} className="text-orange-500" />
                <span className="text-xl font-bold hidden sm:block">IL PASTICCIO</span>
              </Link>
            </div>

            {/* 2. BLOQUE CENTRAL (Links de Escritorio) */}
            <div className="hidden md:flex gap-8 font-medium text-gray-600">
              <Link to="/" className="hover:text-orange-500 transition-colors">Inicio</Link>
              <Link to="/menu" className="hover:text-orange-500 transition-colors">Menú</Link>
              <Link to="/contacto" className="hover:text-orange-500 transition-colors">Contacto</Link>
            </div>

            {/* 3. BLOQUE DERECHO (Carrito) */}
            <div className="flex-1 flex justify-end">
              <Link to="/carrito" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors" onClick={closeMenu}>
                <ShoppingCart size={24} className="text-gray-600" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                    {cart.length}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* 4. MENÚ DESPLEGABLE MÓVIL (Solo se ve si isMenuOpen es true) */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 shadow-lg flex flex-col gap-4 font-medium text-gray-600 animate-fade-in-down">
              <Link to="/" onClick={closeMenu} className="hover:text-orange-500 hover:bg-orange-50 p-2 rounded-lg transition-all">Inicio</Link>
              <Link to="/menu" onClick={closeMenu} className="hover:text-orange-500 hover:bg-orange-50 p-2 rounded-lg transition-all">Menú</Link>
              <Link to="/contacto" onClick={closeMenu} className="hover:text-orange-500 hover:bg-orange-50 p-2 rounded-lg transition-all">Contacto</Link>
            </div>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/menu" element={<Menu addToCart={addToCart} />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito cart={cart} setCart={setCart} />} />
        </Routes>

        <Footer />
        <Toaster />
      </div>
    </BrowserRouter>
  )
}

export default App