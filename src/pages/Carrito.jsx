import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowLeft, CreditCard } from 'lucide-react';

export const Carrito = ({ cart, setCart }) => {

    // Calcular el total sumando los precios
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    // Función para vaciar el carrito (extra opcional)
    const clearCart = () => {
        if (window.confirm("¿Seguro que quieres borrar todo el pedido?")) {
            setCart([]);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Tu Pedido</h2>

                {cart.length === 0 ? (
                    // SI EL CARRITO ESTÁ VACÍO MUESTRA ESTO:
                    <div className="text-center py-20 bg-white rounded-xl shadow-sm">
                        <p className="text-2xl text-gray-400 mb-6">Tu bandeja está vacía 🍽️</p>
                        <Link to="/menu" className="text-orange-500 font-bold hover:underline">
                            Volver al Menú
                        </Link>
                    </div>
                ) : (
                    // SI HAY PIZZAS MUESTRA ESTO:
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Lista de productos (Ocupa 2 columnas) */}
                        <div className="md:col-span-2 space-y-4">
                            {cart.map((pizza, index) => (
                                <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4">
                                    <img src={pizza.image} alt={pizza.name} className="w-20 h-20 object-cover rounded-md" />
                                    <div className="flex-1">
                                        <h3 className="font-bold text-gray-800">{pizza.name}</h3>
                                        <p className="text-sm text-gray-500">{pizza.ingredients.join(', ')}</p>
                                    </div>
                                    <span className="font-bold text-orange-500">{pizza.price}€</span>
                                </div>
                            ))}

                            <button
                                onClick={clearCart}
                                className="text-red-500 text-sm flex items-center gap-2 hover:text-red-700 transition-colors mt-4"
                            >
                                <Trash2 size={16} /> Vaciar pedido
                            </button>
                        </div>

                        {/* Resumen de pago (Ocupa 1 columna) */}
                        <div className="bg-white p-6 rounded-xl shadow-lg h-fit">
                            <h3 className="text-xl font-bold mb-4 border-b pb-2">Resumen</h3>
                            <div className="flex justify-between mb-2">
                                <span className="text-gray-600">Subtotal</span>
                                <span>{total.toFixed(2)}€</span>
                            </div>
                            <div className="flex justify-between mb-4">
                                <span className="text-gray-600">IVA (10%)</span>
                                <span>{(total * 0.10).toFixed(2)}€</span>
                            </div>
                            <div className="flex justify-between text-xl font-bold text-slate-900 border-t pt-4 mb-6">
                                <span>Total</span>
                                <span>{(total * 1.10).toFixed(2)}€</span>
                            </div>

                            <button
                                onClick={() => alert("¡Gracias por tu compra! 🛵")}
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 mb-3"
                            >
                                <CreditCard size={20} /> Pagar Ahora
                            </button>

                            <Link to="/menu" className="block text-center text-gray-500 text-sm hover:text-gray-800">
                                Seguir pidiendo
                            </Link>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
};