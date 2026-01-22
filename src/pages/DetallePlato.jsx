import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ArrowLeft, Star, MapPin, ChefHat } from 'lucide-react';

export const DetallePlato = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const product = products.find(p => p.id === parseInt(id));

    if (!product) return (
        <div className="min-h-screen flex items-center justify-center text-slate-900 dark:text-white">
            Plato no encontrado
        </div>
    );

    return (
        <div className="min-h-screen py-12 px-4 animate-fade-in">
            <div className="max-w-6xl mx-auto">

                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-orange-500 mb-8 transition-colors font-medium"
                >
                    <ArrowLeft size={20} /> Volver al menú
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* IMAGEN DEL PLATO */}
                    <div className="h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-slate-700">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    {/* INFORMACIÓN */}
                    <div className="flex flex-col justify-center pt-4">
                        <span className="text-orange-500 font-bold tracking-wider uppercase mb-2 text-sm">{product.category}</span>

                        <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                            {product.name}
                        </h1>

                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-3xl font-bold text-slate-900 dark:text-white">{product.price}€</span>
                            <div className="flex items-center gap-1 text-yellow-400">
                                <Star fill="currentColor" size={20} />
                                <Star fill="currentColor" size={20} />
                                <Star fill="currentColor" size={20} />
                                <Star fill="currentColor" size={20} />
                                <Star fill="currentColor" size={20} />
                                <span className="text-gray-400 dark:text-gray-500 text-sm ml-2 font-medium">(120 reseñas)</span>
                            </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                            Disfruta de la auténtica receta italiana con <strong>{product.ingredients.join(', ')}</strong>.
                            Preparada al momento en nuestro horno de leña con ingredientes frescos traídos directamente de Italia.
                        </p>

                        <button
                            onClick={() => addToCart(product)}
                            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-orange-500/30 transition-all transform hover:-translate-y-1 self-start flex items-center gap-3 active:scale-95"
                        >
                            <ChefHat size={24} /> Añadir al Pedido
                        </button>

                        {/* --- MAPA DE NÁPOLES REAL --- */}
                        <div className="mt-12 bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm transition-colors">
                            <div className="flex items-center gap-2 mb-4 text-slate-900 dark:text-white font-bold">
                                <MapPin className="text-orange-500" /> Origen de la Receta
                            </div>

                            <div className="w-full h-40 bg-gray-200 dark:bg-slate-700 rounded-xl overflow-hidden relative group">
                                {/* MAPA INTERACTIVO DE GOOGLE 
                    Le ponemos un filtro "invert(90%)" en modo oscuro para que no deslumbre 
                 */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190029.01772846666!2d14.110543292456242!3d40.853883737380796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b0866db7a5ef3%3A0x4a893de21c9c734e!2zTsOhcG9sZXMsIE5hcG9sZXMsIEl0YWxpYQ!5e0!3m2!1ses!2ses!4v1701948255000!5m2!1ses!2ses"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full dark:invert-[.85] dark:hue-rotate-180 transition-all duration-500"
                                ></iframe>
                            </div>
                        </div>
                        {/* --------------------------- */}

                    </div>
                </div>
            </div>
        </div>
    );
};