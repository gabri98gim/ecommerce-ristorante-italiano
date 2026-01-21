import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Star } from 'lucide-react'; // Quitamos ArrowRight si no se usa
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Inicio = () => {
    const container = useRef();

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(".hero-title", { y: 100, opacity: 0, duration: 1, ease: "power4.out" })
            .from(".hero-text", { y: 50, opacity: 0, duration: 0.8 }, "-=0.5")
            .from(".hero-btn", { scale: 0, opacity: 0, duration: 0.5, stagger: 0.2 }, "-=0.3")
            .from(".hero-image", { x: 100, opacity: 0, duration: 1.2, ease: "back.out(1.7)" }, 0);
    }, { scope: container });

    return (
        // CAMBIO 1: Degradado adaptable (dark:from-slate-900 dark:to-slate-800)
        <div ref={container} className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-slate-900 dark:to-slate-900 transition-colors duration-500">

            <div className="max-w-6xl mx-auto px-4 pt-20 pb-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <div>
                    <div className="hero-text inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-full font-bold text-sm mb-6">
                        <Star size={16} fill="currentColor" /> Mejor Pizzería 2024
                    </div>

                    {/* CAMBIO 2: Títulos blancos en dark */}
                    <h1 className="hero-title text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight transition-colors">
                        Auténtica <span className="text-orange-500">Pasión</span> Italiana
                    </h1>

                    {/* CAMBIO 3: Texto gris claro en dark */}
                    <p className="hero-text text-xl text-gray-500 dark:text-gray-300 mb-8 leading-relaxed max-w-lg transition-colors">
                        Viaja a Italia sin salir de casa. Ingredientes frescos, masa madre fermentada 48h y el secreto de la Nonna.
                    </p>

                    <div className="flex gap-4">
                        <Link to="/menu" className="hero-btn bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all flex items-center gap-2 shadow-lg shadow-orange-500/30 hover:-translate-y-1">
                            Ver Carta <ChefHat size={24} />
                        </Link>
                        <Link to="/contacto" className="hero-btn bg-white dark:bg-transparent text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-600 px-8 py-4 rounded-full font-bold text-lg hover:border-orange-500 hover:text-orange-500 dark:hover:border-orange-500 dark:hover:text-orange-500 transition-all">
                            Reservar Mesa
                        </Link>
                    </div>

                    <div className="hero-text flex gap-8 mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                        <div>
                            <p className="text-3xl font-bold text-slate-900 dark:text-white">15k+</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Clientes Felices</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-slate-900 dark:text-white">4.9</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Valoración Media</p>
                        </div>
                    </div>
                </div>

                <div className="hero-image relative">
                    <div className="absolute -z-10 top-0 right-0 w-full h-full bg-orange-200 dark:bg-orange-900/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                    <img
                        src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Pizza deliciosa"
                        className="w-full rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500"
                    />

                    {/* Tarjeta flotante dark mode */}
                    <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce border dark:border-slate-700 transition-colors" style={{ animationDuration: '3s' }}>
                        <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-600 dark:text-green-400">
                            <ChefHat size={24} />
                        </div>
                        <div>
                            <p className="font-bold text-slate-900 dark:text-white">Envío Gratis</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">En pedidos +20€</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};