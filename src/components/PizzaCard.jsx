import React from 'react';
import { Plus, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { Link } from 'react-router-dom';

export const PizzaCard = ({ pizza }) => {
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  const isLiked = isFavorite(pizza.id);

  return (
    // CAMBIO: dark:bg-slate-800 y bordes para que resalte un poco
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 relative group border border-gray-100 dark:border-slate-700">

      <button
        onClick={() => toggleFavorite(pizza)}
        // CAMBIO: El botón del corazón también se oscurece
        className="absolute top-3 right-3 z-10 bg-white dark:bg-slate-700 p-2 rounded-full shadow-md hover:scale-110 transition-transform"
      >
        <Heart
          size={20}
          className={isLiked ? "fill-red-500 text-red-500" : "text-gray-400 dark:text-gray-300"}
        />
      </button>

      <Link to={`/plato/${pizza.id}`}>
        <div className="h-48 overflow-hidden cursor-pointer">
          <img
            src={pizza.image}
            alt={pizza.name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
      </Link>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          {/* CAMBIO: Título blanco en modo oscuro */}
          <Link to={`/plato/${pizza.id}`} className="hover:text-orange-500 transition-colors">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">{pizza.name}</h3>
          </Link>

          <span className="bg-orange-100 text-orange-600 text-sm font-bold px-2 py-1 rounded-full">
            {pizza.price}€
          </span>
        </div>

        {/* CAMBIO: Texto descriptivo más claro */}
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 h-10 line-clamp-2">
          {pizza.ingredients.join(', ')}
        </p>

        <button
          onClick={() => addToCart(pizza)}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors active:scale-95 shadow-md shadow-orange-500/20"
        >
          <Plus size={20} />
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};