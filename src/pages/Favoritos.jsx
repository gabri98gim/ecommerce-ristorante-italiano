import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { PizzaCard } from '../components/PizzaCard';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export const Favoritos = () => {
    const { favorites } = useFavorites();

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <Heart className="text-red-500" size={32} fill="currentColor" />
                    <h1 className="text-3xl font-bold text-gray-800">Mis Favoritos</h1>
                </div>

                {favorites.length === 0 ? (
                    // SI NO HAY FAVORITOS
                    <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
                        <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Heart className="text-red-300" size={32} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-700 mb-2">Aún no tienes favoritos</h2>
                        <p className="text-gray-500 mb-6">Guarda los platos que más te gusten para pedirlos luego.</p>
                        <Link to="/menu" className="bg-orange-500 text-white px-6 py-2 rounded-full font-bold hover:bg-orange-600 transition-colors">
                            Explorar Menú
                        </Link>
                    </div>
                ) : (
                    // SI HAY FAVORITOS (Reutilizamos la grilla del menú)
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {favorites.map((pizza) => (
                            <PizzaCard key={pizza.id} pizza={pizza} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};