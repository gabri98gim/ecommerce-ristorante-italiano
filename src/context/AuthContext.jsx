import { createContext, useState, useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth debe usarse dentro de AuthProvider');
    return context;
};

export const AuthProvider = ({ children }) => {
    // Estado del usuario (null = no logueado)
    const [user, setUser] = useState(null);

    // Función para LOGIN (Simulada)
    const login = (email, password) => {
        // Simulamos que comprobamos la contraseña
        if (password === "1234") {
            setUser({ email, name: "Mario Rossi" }); // Creamos un usuario falso
            toast.success("¡Bienvenido de nuevo, Mario! 👋", {
                style: { background: '#10B981', color: '#fff' }
            });
            return true;
        } else {
            toast.error("Contraseña incorrecta (Prueba con 1234) ❌");
            return false;
        }
    };

    // Función para LOGOUT
    const logout = () => {
        setUser(null);
        toast("Sesión cerrada", { icon: '👋' });
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};