import { createContext, useState, useContext, useEffect } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart debe usarse dentro de CartProvider');
    return context;
};

export const CartProvider = ({ children }) => {
    // Inicializamos el carrito leyendo del localStorage si existe
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Cada vez que el carrito cambie, lo guardamos en localStorage
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart([...cart, product]);
        toast.success(`Añadido: ${product.name} 🍕`);
    };

    const removeFromCart = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
        toast.error("Producto eliminado 🗑️");
    };

    // --- NUEVA FUNCIÓN: BORRAR TODO ---
    const clearCart = () => {
        setCart([]); // Lo dejamos vacío
    };
    // ---------------------------------

    // Calculamos el total
    const total = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total }}>
            {children}
        </CartContext.Provider>
    );
};