import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

export const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();

    if (!user) {
        // Si no hay usuario, lo mandamos al login
        // Usamos setTimeout para que no choque con el renderizado
        setTimeout(() => {
            toast.error("Debes iniciar sesión para ver esta página 🔒");
        }, 100);

        return <Navigate to="/login" replace />;
    }

    // Si hay usuario, renderizamos la página (el hijo)
    return children;
};