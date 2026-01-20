import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, ArrowRight } from 'lucide-react';

export const Inicio = () => {
    return (
        <div className="relative min-h-screen bg-slate-900 flex items-center">
            {/* Imagen de fondo con superposición oscura */}
            <div
                className="absolute inset-0 z-0 opacity-40"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            ></div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 text-white">
                <div className="flex items-center gap-2 text-orange-500 mb-4">
                    <ChefHat size={40} />
                    <span className="text-xl font-bold tracking-wider">NAPOLES RISTORANTE</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    El sabor auténtico <br />
                    <span className="text-orange-500">de Italia</span> en tu mesa
                </h1>

                <p className="text-xl text-gray-300 mb-8 max-w-lg">
                    Tradición, ingredientes frescos y pasión en cada plato.
                    Ven a disfrutar de la verdadera experiencia gastronómica italiana.
                </p>

                <div className="flex gap-4">
                    <Link
                        to="/menu"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2"
                    >
                        Ver Menú <ArrowRight size={20} />
                    </Link>
                    <Link
                        to="/contacto"
                        className="border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-3 rounded-full font-bold transition-all"
                    >
                        Reservar Mesa
                    </Link>
                </div>
            </div>
        </div>
    );
};