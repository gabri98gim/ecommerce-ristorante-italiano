import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import { FavoritesProvider } from './context/FavoritesContext'
import { ThemeProvider } from './context/ThemeContext' // <--- 1. Importado
import ErrorBoundary from './components/ErrorBoundary'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <AuthProvider>
        <FavoritesProvider>
          <CartProvider>
            {/* 2. ABRE EL TEMA */}
            <ThemeProvider>
              <App />
            </ThemeProvider>
            {/* 3. CIERRA EL TEMA (Justo después de App) */}
          </CartProvider>
        </FavoritesProvider>
      </AuthProvider>
    </ErrorBoundary>
  </React.StrictMode>,
)