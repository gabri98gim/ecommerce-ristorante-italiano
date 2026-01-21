import { createContext, useState, useContext } from 'react';
import toast from 'react-hot-toast';
import { useAuth } from './AuthContext'; // <--- 1. Importamos la autenticación

const FavoritesContext = createContext();

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) throw new Error('useFavorites debe usarse dentro de FavoritesProvider');
    return context;
};

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const { user } = useAuth(); // <--- 2. Leemos si hay usuario conectado

    const toggleFavorite = (pizza) => {
        // 3. BARRERA DE SEGURIDAD: Si no hay usuario, cortamos aquí
        if (!user) {
            toast.error("Inicia sesión para guardar favoritos 🔒");
            return; // "Return" hace que la función se detenga y no siga leyendo
        }

        const isAlreadyFavorite = favorites.some(fav => fav.id === pizza.id);

        if (isAlreadyFavorite) {
            setFavorites(favorites.filter(fav => fav.id !== pizza.id));
            toast("Eliminado de favoritos", { icon: '💔' });
        } else {
            setFavorites([...favorites, pizza]);
            toast("¡Añadido a favoritos!", { icon: '❤️' });
        }
    };

    const isFavorite = (id) => {
        return favorites.some(fav => fav.id === id);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};