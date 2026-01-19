import { useState } from 'react'
import { pizzas } from './data/pizzas'
import { PizzaCard } from './components/PizzaCard'
import { ShoppingCart, Pizza } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-orange-500">
            <Pizza size={32} />
            <h1 className="text-2xl font-bold text-gray-800">El pasticcio</h1>
          </div>
          <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ShoppingCart size={24} className="text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </button>
        </div>
      </nav>

      {/* Menú Principal */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Nuestro Menú</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pizzas.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App