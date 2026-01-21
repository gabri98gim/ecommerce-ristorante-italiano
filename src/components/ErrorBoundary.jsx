import React from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Si hay un error, cambiamos el estado para mostrar la alerta
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Aquí podríamos enviar el error a un servicio de reportes
        console.error("ErrorBoundary capturó un error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // ESTO ES LO QUE SE VE SI LA APP EXPLOTA
            return (
                <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-4">
                    <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md">
                        <h2 className="text-4xl font-bold text-red-500 mb-4">¡Mamma Mia! 🍕</h2>
                        <p className="text-gray-600 text-lg mb-6">
                            Se nos ha quemado la pizza. Ha ocurrido un error inesperado en la aplicación.
                        </p>
                        <button
                            onClick={() => window.location.href = "/"} // Recarga forzada a inicio
                            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-colors"
                        >
                            Volver a la cocina (Recargar)
                        </button>
                    </div>
                </div>
            );
        }

        // Si no hay error, renderiza la app normal
        return this.props.children;
    }
}

export default ErrorBoundary;