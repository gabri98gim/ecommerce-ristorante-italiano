import React from 'react';
import { Plus } from 'lucide-react';

export const PizzaCard = ({ pizza }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={pizza.image} 
          alt={pizza.name} 
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{pizza.name}</h3>
          <span className="bg-orange-100 text-orange-600 text-sm font-bold px-2 py-1 rounded-full">
            {pizza.price}€
          </span>
        </div>
        <p className="text-gray-500 text-sm mb-4 h-10">
          {pizza.ingredients.join(', ')}
        </p>
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
          <Plus size={20} />
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};