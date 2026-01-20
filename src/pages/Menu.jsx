import React from 'react';
import { pizzas } from '../data/pizzas'; // Importamos los datos
import { PizzaCard } from '../components/PizzaCard';

export const Menu = ({ addToCart }) => {
    return (
        <div className="py-12 bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestra Carta</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Desde las pizzas clásicas hasta nuestras especialidades gourmet.
                        Todo preparado al momento en horno de leña.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pizzas.map((pizza) => (
                        <PizzaCard
                            key={pizza.id}
                            pizza={pizza}
                            addToCart={addToCart}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};