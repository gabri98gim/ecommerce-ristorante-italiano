import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { ShoppingCart, ChefHat, Menu as MenuIcon, X, User, Heart } from 'lucide-react' // <--- Añadido Heart
import { Toaster } from 'react-hot-toast'
import { useCart } from './context/CartContext'
import { useAuth } from './context/AuthContext'
import { useFavorites } from './context/FavoritesContext'
import { ProtectedRoute } from './components/ProtectedRoute';

// Páginas
import { Inicio } from './pages/Inicio'
import { Menu } from './pages/Menu'
import { Contacto } from './pages/Contacto'
import { Carrito } from './pages/Carrito'
import { Login } from './pages/Login'
import { Registro } from './pages/Registro'
import { Perfil } from './pages/Perfil'
import { Favoritos } from './pages/Favoritos'
import { NotFound } from './pages/NotFound'
import { DetallePlato } from './pages/DetallePlato'

import { Footer } from './components/Footer'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { cart } = useCart()
  const { user, logout } = useAuth()
  const { favorites } = useFavorites() // <--- Sacamos los favoritos para el contador

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* BARRA DE NAVEGACIÓN */}
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

            {/* 1. IZQUIERDA */}
            <div className="flex items-center gap-4 flex-1">
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

            {/* 2. CENTRO */}
            <div className="hidden md:flex gap-8 font-medium text-gray-600">
              <Link to="/" className="hover:text-orange-500 transition-colors">Inicio</Link>
              <Link to="/menu" className="hover:text-orange-500 transition-colors">Menú</Link>
              <Link to="/contacto" className="hover:text-orange-500 transition-colors">Contacto</Link>
            </div>

            {/* 3. DERECHA: Favoritos + Usuario + Carrito */}
            <div className="flex-1 flex justify-end items-center gap-4">

              {/* BOTÓN FAVORITOS (NUEVO) */}
              <Link to="/favoritos" className="relative hover:text-red-500 transition-colors text-gray-600" onClick={closeMenu}>
                <Heart size={24} />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full animate-bounce">
                    {favorites.length}
                  </span>
                )}
              </Link>

              {/* LÓGICA DE USUARIO CON MARIO BROS */}
              {user ? (
                <div className="flex items-center gap-3 border-l pl-4 border-gray-200">
                  <Link to="/perfil" className="text-sm font-bold text-gray-700 hover:text-orange-500 hidden sm:block">
                    {user.name}
                  </Link>
                  <img
                    src="https://img.icons8.com/color/48/mario.png"
                    alt="Avatar Mario"
                    className="w-8 h-8 rounded-full border-2 border-orange-500 p-0.5 object-cover"
                  />
                  <button onClick={logout} className="text-xs bg-gray-200 px-2 py-1 rounded hover:bg-red-100 hover:text-red-500 transition-colors">
                    Salir
                  </button>
                </div>
              ) : (
                <Link to="/login" className="hover:text-orange-500 transition-colors border-l pl-4 border-gray-200" onClick={closeMenu}>
                  <User size={24} className="text-gray-600 hover:text-orange-500" />
                </Link>
              )}

              {/* Botón Carrito */}
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

          {/* Menú Móvil */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 shadow-lg flex flex-col gap-4 font-medium text-gray-600 animate-fade-in-down">
              <Link to="/" onClick={closeMenu} className="hover:text-orange-500 hover:bg-orange-50 p-2 rounded-lg transition-all">Inicio</Link>
              <Link to="/menu" onClick={closeMenu} className="hover:text-orange-500 hover:bg-orange-50 p-2 rounded-lg transition-all">Menú</Link>
              <Link to="/favoritos" onClick={closeMenu} className="hover:text-orange-500 hover:bg-orange-50 p-2 rounded-lg transition-all flex items-center gap-2"><Heart size={20} /> Mis Favoritos</Link>
              <Link to="/contacto" onClick={closeMenu} className="hover:text-orange-500 hover:bg-orange-50 p-2 rounded-lg transition-all">Contacto</Link>

              <div className="border-t border-gray-100 pt-2 mt-2">
                {user ? (
                  <Link to="/perfil" onClick={closeMenu} className="hover:text-orange-500 hover:bg-orange-50 p-2 rounded-lg transition-all text-orange-600 font-bold flex items-center gap-2">
                    <img src="https://img.icons8.com/color/48/mario.png" className="w-6 h-6" /> Perfil ({user.name})
                  </Link>
                ) : (
                  <Link to="/login" onClick={closeMenu} className="hover:text-orange-500 hover:bg-orange-50 p-2 rounded-lg transition-all flex items-center gap-2"><User size={20} /> Iniciar Sesión</Link>
                )}
              </div>
            </div>
          )}
        </nav>

        <Routes>
          {/* Rutas Públicas (Todo el mundo puede entrar) */}
          <Route path="/" element={<Inicio />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/plato/:id" element={<DetallePlato />} />

          {/* 🔒 RUTAS PROTEGIDAS (Solo entra si user existe) */}
          {/* Fíjate: Envolvemos el componente con <ProtectedRoute> */}
          <Route
            path="/perfil"
            element={
              <ProtectedRoute>
                <Perfil />
              </ProtectedRoute>
            }
          />

          <Route
            path="/favoritos"
            element={
              <ProtectedRoute>
                <Favoritos />
              </ProtectedRoute>
            }
          />

          {/* Ruta de Error 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
        <Toaster />
      </div>
    </BrowserRouter>
  )
}

export default App