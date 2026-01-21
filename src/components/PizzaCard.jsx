import React from 'react';
import { Plus, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext'; // <--- Importamos favoritos
import { Link } from 'react-router-dom';

export const PizzaCard = ({ pizza }) => {
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites(); // <--- Usamos el hook

  // Comprobamos si ESTA pizza es favorita
  const isLiked = isFavorite(pizza.id);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative group">

      {/* BOTÓN DE LIKE (Flotante encima de la foto) */}
      <button
        onClick={() => toggleFavorite(pizza)}
        className="absolute top-3 right-3 z-10 bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform"
      >
        <Heart
          size={20}
          className={isLiked ? "fill-red-500 text-red-500" : "text-gray-400"}
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
          <Link to={`/plato/${pizza.id}`} className="hover:text-orange-500 transition-colors">
            <h3 className="text-xl font-bold text-gray-800">{pizza.name}</h3>
          </Link>

          <span className="bg-orange-100 text-orange-600 text-sm font-bold px-2 py-1 rounded-full">
            {pizza.price}€
          </span>
        </div>
        <p className="text-gray-500 text-sm mb-4 h-10">
          {pizza.ingredients.join(', ')}
        </p>

        <button
          onClick={() => addToCart(pizza)}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors active:scale-95"
        >
          <Plus size={20} />
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};