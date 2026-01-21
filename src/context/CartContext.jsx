import { createContext, useState, useContext } from 'react';
import toast from 'react-hot-toast';

// 1. Creamos el Contexto (la nube)
const CartContext = createContext();

// 2. Creamos un "Hook Personalizado" para usarlo fácil (Puntos extra en rúbrica)
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart debe usarse dentro de un CartProvider');
    return context;
};

// 3. El Proveedor que envolverá la app
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Función de añadir (La que tenías en App.jsx)
    const addToCart = (item) => {
        setCart([...cart, item]);
        toast.success(`¡${item.name} añadido! 🍕`, {
            position: "bottom-center",
            style: { background: "#1e293b", color: "#fff" }
        });
    };

    // Función para vaciar
    const clearCart = () => setCart([]);

    // Calculamos el total aquí para no repetirlo en componentes
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, clearCart, total }}>
            {children}
        </CartContext.Provider>
    );
};