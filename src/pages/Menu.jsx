import React, { useState } from 'react';
import { products } from '../data/products'; // Importamos el nuevo archivo
import { PizzaCard } from '../components/PizzaCard'; // Reutilizamos la tarjeta (que sirve para todo)

export const Menu = ({ addToCart }) => {
    // Estado para saber qué categoría está activa (por defecto 'Todos')
    const [activeCategory, setActiveCategory] = useState("Todos");

    // Lista de categorías para los botones
    const categories = ["Todos", "Entrantes", "Pizzas", "Pastas", "Postres"];

    // Filtramos los productos según la categoría seleccionada
    const filteredProducts = activeCategory === "Todos"
        ? products
        : products.filter(product => product.category === activeCategory);

    return (
        <div className="py-12 bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto px-4">

                {/* Encabezado */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestra Carta</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                        Sabores auténticos de Italia, desde el antipasti hasta el dolce.
                    </p>

                    {/* BOTONES DE FILTRO */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-full font-bold transition-all ${activeCategory === category
                                        ? "bg-orange-500 text-white shadow-lg scale-105" // Estilo activo
                                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200" // Estilo inactivo
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* GRILLA DE PRODUCTOS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                    {filteredProducts.map((product) => (
                        <PizzaCard
                            key={product.id}
                            pizza={product} // Le pasamos el producto (aunque la prop se llame 'pizza', funciona igual)
                            addToCart={addToCart}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};