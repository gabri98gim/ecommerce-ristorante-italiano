import { createContext, useState, useContext } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth debe usarse dentro de AuthProvider');
    return context;
};

export const AuthProvider = ({ children }) => {
    // 1. INICIALIZACIÓN INTELIGENTE:
    // En vez de empezar en 'null', miramos si hay algo guardado en el navegador
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const login = (email, password) => {
        if (password === "1234") {
            const newUser = { email, name: "Mario Rossi" };

            setUser(newUser);

            // 2. GUARDAR: Al loguearse, lo grabamos en el navegador
            localStorage.setItem('user', JSON.stringify(newUser));

            toast.success("¡Bienvenido de nuevo, Mario! 👋", {
                style: { background: '#10B981', color: '#fff' }
            });
            return true;
        } else {
            toast.error("Contraseña incorrecta (Prueba con 1234) ❌");
            return false;
        }
    };

    const logout = () => {
        setUser(null);

        // 3. BORRAR: Al salir, limpiamos el rastro del navegador
        localStorage.removeItem('user');

        toast("Sesión cerrada", { icon: '👋' });
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};