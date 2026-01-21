import React, { useState, useEffect } from 'react';
import { products } from '../data/products';
import { PizzaCard } from '../components/PizzaCard';
import { Loader2 } from 'lucide-react';

export const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState("Todos");

    const categories = ["Todos", "Entrantes", "Pizzas", "Pastas", "Postres"];

    useEffect(() => {
        const fetchPizzas = async () => {
            setLoading(true);
            try {
                await new Promise(resolve => setTimeout(resolve, 1500));
                setMenuItems(products);
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPizzas();
    }, []);

    const itemsToDisplay = menuItems || [];
    const filteredProducts = activeCategory === "Todos"
        ? itemsToDisplay
        : itemsToDisplay.filter(item => item.category === activeCategory);

    return (
        // CAMBIO 1: Quitamos bg-gray-50 para que sea transparente y se vea el fondo oscuro de App
        // O usamos bg-transparent explícitamente.
        <div className="py-12 min-h-screen">
            <div className="max-w-6xl mx-auto px-4">

                <div className="text-center mb-12">
                    {/* CAMBIO 2: dark:text-white */}
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 transition-colors">
                        Nuestra Carta
                    </h2>
                    {/* CAMBIO 3: dark:text-gray-300 */}
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 transition-colors">
                        Sabores auténticos de Italia, cocinados a fuego lento.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                disabled={loading}
                                // CAMBIO 4: Botones adaptables (dark:bg-slate-800 dark:text-white)
                                className={`px-6 py-2 rounded-full font-bold transition-all border ${activeCategory === category
                                        ? "bg-orange-500 text-white border-orange-500 shadow-lg scale-105"
                                        : "bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-200 border-gray-200 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-700"
                                    } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
                        <Loader2 className="w-16 h-16 text-orange-500 animate-spin mb-4" />
                        <p className="text-gray-500 dark:text-gray-400 text-lg font-medium animate-pulse">
                            Horneando el menú... 🍕
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                        {filteredProducts.map((product) => (
                            <PizzaCard key={product.id} pizza={product} />
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
};