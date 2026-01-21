import React, { useState, useEffect } from 'react';
import { products } from '../data/products'; // Importamos normal para evitar líos
import { PizzaCard } from '../components/PizzaCard';
import { Loader2 } from 'lucide-react';

export const Menu = () => {
    // 1. ESTADOS
    const [menuItems, setMenuItems] = useState([]); // Usamos 'menuItems' para no liar el nombre con el import 'products'
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState("Todos");

    const categories = ["Todos", "Entrantes", "Pizzas", "Pastas", "Postres"];

    // 2. EFECTO DE CARGA (Simulación API)
    useEffect(() => {
        const fetchPizzas = async () => {
            setLoading(true);
            try {
                console.log("Pidiendo pizzas al servidor..."); // Chivato en consola

                // Esperamos 1.5 segundos
                await new Promise(resolve => setTimeout(resolve, 1500));

                // Guardamos los datos
                setMenuItems(products);
                console.log("¡Pizzas recibidas!");

            } catch (error) {
                console.error("Error cargando:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPizzas();
    }, []);

    // 3. FILTRADO SEGURO
    // Si menuItems está vacío (fallo de carga), usamos un array vacío para que no explote
    const itemsToDisplay = menuItems || [];

    const filteredProducts = activeCategory === "Todos"
        ? itemsToDisplay
        : itemsToDisplay.filter(item => item.category === activeCategory);

    return (
        <div className="py-12 bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto px-4">

                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestra Carta</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                        Sabores auténticos de Italia, cocinados a fuego lento.
                    </p>

                    {/* Botones de Categoría */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                disabled={loading}
                                className={`px-6 py-2 rounded-full font-bold transition-all ${activeCategory === category
                                    ? "bg-orange-500 text-white shadow-lg scale-105"
                                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                                    } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* FEEDBACK DE CARGA */}
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
                        <Loader2 className="w-16 h-16 text-orange-500 animate-spin mb-4" />
                        <p className="text-gray-500 text-lg font-medium animate-pulse">
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