import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { PizzaCard } from '../components/PizzaCard';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export const Favoritos = () => {
    const { favorites } = useFavorites();

    if (favorites.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 animate-fade-in">
                <div className="bg-gray-100 dark:bg-slate-800 p-6 rounded-full mb-6 transition-colors">
                    <Heart size={60} className="text-gray-400 dark:text-gray-500" />
                </div>
                {/* TEXTOS ADAPTADOS AL MODO OSCURO */}
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
                    No tienes favoritos aún
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md">
                    Dale al corazón ❤️ en los platos que más te gusten para guardarlos aquí.
                </p>
                <Link
                    to="/menu"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg shadow-orange-500/30"
                >
                    Explorar el Menú
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-12 animate-fade-in">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    Mis Favoritos ❤️
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                    Tus platos preferidos, listos para pedir.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {favorites.map((product) => (
                    <PizzaCard key={product.id} pizza={product} />
                ))}
            </div>
        </div>
    );
};