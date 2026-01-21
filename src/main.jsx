import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import { FavoritesProvider } from './context/FavoritesContext'
import ErrorBoundary from './components/ErrorBoundary'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <FavoritesProvider> {/* <--- LO PONEMOS AQUÍ */}
        <CartProvider>
          <App />
        </CartProvider>
      </FavoritesProvider>
    </AuthProvider>
  </React.StrictMode>,
)