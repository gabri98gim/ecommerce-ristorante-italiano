import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ArrowLeft, Star, MapPin, Clock } from 'lucide-react';
import toast from 'react-hot-toast';

export const DetallePlato = () => {
    const { id } = useParams(); // 1. Leemos el ID de la URL (ej: /plato/1)
    const { addToCart } = useCart();
    const navigate = useNavigate();

    // 2. Buscamos el producto en nuestra base de datos
    const product = products.find(p => p.id === parseInt(id));

    // Si alguien pone un ID inventado, le echamos
    if (!product) {
        return (
            <div className="text-center py-20">
                <h2>Plato no encontrado 😢</h2>
                <Link to="/menu" className="text-orange-500 hover:underline">Volver al menú</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Botón Volver */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-gray-600 hover:text-orange-500 mb-6 transition-colors"
                >
                    <ArrowLeft size={20} /> Volver
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* LADO IZQUIERDO: FOTO */}
                    <div className="h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    {/* LADO DERECHO: INFO */}
                    <div className="flex flex-col justify-center">
                        <span className="text-orange-500 font-bold tracking-wider uppercase mb-2">{product.category}</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{product.name}</h1>

                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-3xl font-bold text-slate-900">{product.price}€</span>
                            <div className="flex text-yellow-400">
                                <Star fill="currentColor" size={20} />
                                <Star fill="currentColor" size={20} />
                                <Star fill="currentColor" size={20} />
                                <Star fill="currentColor" size={20} />
                                <Star fill="currentColor" size={20} />
                            </div>
                            <span className="text-gray-400 text-sm">(120 reseñas)</span>
                        </div>

                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Disfruta de la auténtica receta italiana. {product.ingredients.join(', ')}.
                            Preparada al momento con ingredientes frescos traídos directamente de Italia.
                        </p>

                        <div className="flex gap-4 mb-8">
                            <button
                                onClick={() => addToCart(product)}
                                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-orange-500/30 transition-all active:scale-95"
                            >
                                Añadir al Pedido
                            </button>
                        </div>

                        {/* SECCIÓN DEL MAPA (Requisito del PDF) */}
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex items-center gap-2 text-slate-900 font-bold mb-2">
                                <MapPin className="text-orange-500" />
                                <h3>Origen de la Receta</h3>
                            </div>
                            {/* Mapa insertado (iframe de Google Maps de Nápoles) */}
                            <div className="w-full h-48 rounded-lg overflow-hidden bg-gray-200">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12088.079237072528!2d14.2464!3d40.8518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b0866db7a5ef3%3A0x4a89355446bb4881!2zTsOhcG9sZXMsIEl0YWxpYQ!5e0!3m2!1ses!2ses!4v1620000000000!5m2!1ses!2ses"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="Mapa"
                                ></iframe>
                            </div>
                            <p className="text-xs text-gray-500 mt-2 text-center">Nápoles, Italia - Cuna de esta receta</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};