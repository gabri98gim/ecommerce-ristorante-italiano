import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { ShoppingCart, ChefHat, Menu as MenuIcon, X, User, Heart, Sun, Moon } from 'lucide-react'
import { Toaster } from 'react-hot-toast'
import { useCart } from './context/CartContext'
import { useAuth } from './context/AuthContext'
import { useFavorites } from './context/FavoritesContext'
import { useTheme } from './context/ThemeContext'
import { ProtectedRoute } from './components/ProtectedRoute'

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
  const { favorites } = useFavorites()
  const { theme, toggleTheme } = useTheme()

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900 dark:text-gray-100 flex flex-col transition-colors duration-300">

        <nav className="bg-white dark:bg-slate-800 shadow-md sticky top-0 z-50 transition-colors duration-300 border-b border-transparent dark:border-slate-700">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

            {/* 1. IZQUIERDA */}
            <div className="flex items-center gap-4 flex-1">
              <button
                className="md:hidden text-gray-600 dark:text-gray-200 hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
              </button>

              <Link to="/" className="flex items-center gap-2 text-gray-800 dark:text-white hover:text-orange-500 transition-colors" onClick={closeMenu}>
                <ChefHat size={32} className="text-orange-500" />
                <span className="text-xl font-bold hidden sm:block">IL PASTICCIO</span>
              </Link>
            </div>

            {/* 2. CENTRO */}
            <div className="hidden md:flex gap-8 font-medium text-gray-600 dark:text-gray-300">
              <Link to="/" className="hover:text-orange-500 transition-colors">Inicio</Link>
              <Link to="/menu" className="hover:text-orange-500 transition-colors">Menú</Link>
              <Link to="/contacto" className="hover:text-orange-500 transition-colors">Contacto</Link>
            </div>

            {/* 3. DERECHA */}
            <div className="flex-1 flex justify-end items-center gap-4">

              {/* MODO OSCURO */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-600 dark:text-yellow-400 transition-colors"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>

              {/* FAVORITOS (LOGIC UPDATE) */}
              <Link to="/favoritos" className="relative hover:text-red-500 transition-colors text-gray-600 dark:text-gray-300" onClick={closeMenu}>
                <Heart size={24} />
                {/* CAMBIO AQUÍ: Solo mostramos la bolita si hay USER y hay FAVORITOS */}
                {user && favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full animate-bounce">
                    {favorites.length}
                  </span>
                )}
              </Link>

              {/* USUARIO */}
              {user ? (
                <div className="flex items-center gap-3 border-l pl-4 border-gray-200 dark:border-gray-700">
                  <Link to="/perfil" className="text-sm font-bold text-gray-700 dark:text-gray-200 hover:text-orange-500 hidden sm:block">
                    {user.name}
                  </Link>
                  <img
                    src="https://img.icons8.com/color/48/mario.png"
                    alt="Avatar"
                    className="w-8 h-8 rounded-full border-2 border-orange-500 p-0.5 object-cover"
                  />
                  <button onClick={logout} className="text-xs bg-gray-200 dark:bg-slate-700 dark:text-white px-2 py-1 rounded hover:bg-red-100 hover:text-red-500 transition-colors">
                    Salir
                  </button>
                </div>
              ) : (
                <Link to="/login" className="hover:text-orange-500 transition-colors border-l pl-4 border-gray-200 dark:border-gray-700" onClick={closeMenu}>
                  <User size={24} className="text-gray-600 dark:text-gray-300 hover:text-orange-500" />
                </Link>
              )}

              {/* CARRITO */}
              <Link to="/carrito" className="relative p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full transition-colors" onClick={closeMenu}>
                <ShoppingCart size={24} className="text-gray-600 dark:text-gray-300" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                    {cart.length}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* MENÚ MÓVIL */}
          {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-slate-800 border-t border-gray-100 dark:border-gray-700 py-4 px-4 shadow-lg flex flex-col gap-4 font-medium text-gray-600 dark:text-gray-300">
              <Link to="/" onClick={closeMenu} className="hover:text-orange-500 p-2">Inicio</Link>
              <Link to="/menu" onClick={closeMenu} className="hover:text-orange-500 p-2">Menú</Link>
              <Link to="/favoritos" onClick={closeMenu} className="hover:text-orange-500 p-2 flex items-center gap-2"><Heart size={20} /> Favoritos</Link>

              <div className="border-t border-gray-100 dark:border-gray-700 pt-2 mt-2">
                <button onClick={() => { toggleTheme(); closeMenu(); }} className="flex items-center gap-2 p-2 w-full text-left hover:text-orange-500">
                  {theme === 'light' ? <><Moon size={20} /> Modo Oscuro</> : <><Sun size={20} /> Modo Claro</>}
                </button>
              </div>

              <div className="border-t border-gray-100 dark:border-gray-700 pt-2 mt-2">
                {user ? (
                  <Link to="/perfil" onClick={closeMenu} className="text-orange-600 font-bold p-2 flex items-center gap-2">
                    <img src="https://img.icons8.com/color/48/mario.png" className="w-6 h-6" /> {user.name}
                  </Link>
                ) : (
                  <Link to="/login" onClick={closeMenu} className="hover:text-orange-500 p-2 flex items-center gap-2"><User size={20} /> Login</Link>
                )}
              </div>
            </div>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/plato/:id" element={<DetallePlato />} />
          <Route path="/perfil" element={<ProtectedRoute><Perfil /></ProtectedRoute>} />
          <Route path="/favoritos" element={<ProtectedRoute><Favoritos /></ProtectedRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
        <Toaster />
      </div>
    </BrowserRouter>
  )
}

export default App