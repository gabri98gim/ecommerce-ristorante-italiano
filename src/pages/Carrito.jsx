import React from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export const Carrito = () => {
    // 1. IMPORTANTE: Sacamos 'clearCart' del contexto
    const { cart, removeFromCart, clearCart, total } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleCheckout = () => {
        if (!user) {
            toast.error("Debes iniciar sesión para tramitar el pedido 🔒");
            navigate('/login');
            return;
        }

        // 2. ÉXITO: Mostramos mensaje Y vaciamos el carrito
        toast.success(`¡Gracias ${user.name}! Tu pedido está en marcha 🛵🍕`, {
            duration: 5000,
            icon: '👨‍🍳'
        });

        clearCart(); // <--- ¡AQUÍ ESTÁ LA MAGIA! 🧹
    };

    if (cart.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center animate-fade-in text-center px-4">
                <ShoppingBag size={80} className="text-gray-300 dark:text-gray-700 mb-6" />
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Tu carrito está vacío</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-8">¿A qué esperas para probar nuestras delicias?</p>
                <Link
                    to="/menu"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg shadow-orange-500/30"
                >
                    Ir al Menú
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-12 animate-fade-in">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Tu Pedido</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* LISTA DE PRODUCTOS */}
                <div className="lg:col-span-2 space-y-4">
                    {cart.map((item, index) => (
                        <div key={index} className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 transition-colors">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-24 h-24 object-cover rounded-lg border border-gray-100 dark:border-slate-600"
                            />

                            <div className="flex-1">
                                <h3 className="font-bold text-lg text-slate-900 dark:text-white">{item.name}</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">{item.ingredients.join(', ').slice(0, 50)}...</p>
                                <button
                                    onClick={() => removeFromCart(index)}
                                    className="text-red-500 hover:text-red-600 text-sm mt-2 flex items-center gap-1 font-medium hover:underline"
                                >
                                    <Trash2 size={16} /> Eliminar
                                </button>
                            </div>

                            <div className="text-right">
                                <p className="font-bold text-orange-500 text-xl">{item.price}€</p>
                            </div>
                        </div>
                    ))}

                    <Link to="/menu" className="inline-block text-orange-500 font-bold hover:underline mt-4">
                        &larr; Seguir pidiendo
                    </Link>
                </div>

                {/* RESUMEN DEL PEDIDO */}
                <div className="h-fit">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-slate-700 sticky top-24 transition-colors">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-b border-gray-100 dark:border-slate-700 pb-4">
                            Resumen
                        </h2>

                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between text-gray-600 dark:text-gray-300">
                                <span>Subtotal</span>
                                <span>{total.toFixed(2)}€</span>
                            </div>
                            <div className="flex justify-between text-gray-600 dark:text-gray-300">
                                <span>IVA (10%)</span>
                                <span>{(total * 0.10).toFixed(2)}€</span>
                            </div>
                            <div className="flex justify-between text-gray-600 dark:text-gray-300">
                                <span>Envío</span>
                                <span className="text-green-500 font-medium">Gratis</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center text-2xl font-bold text-slate-900 dark:text-white border-t border-gray-100 dark:border-slate-700 pt-4 mb-6">
                            <span>Total</span>
                            <span>{total.toFixed(2)}€</span>
                        </div>

                        <button
                            onClick={handleCheckout}
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 transition-transform active:scale-95"
                        >
                            Pagar Ahora <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};