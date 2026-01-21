import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { User, Lock, ArrowRight } from 'lucide-react';

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useAuth(); // Usamos nuestro contexto
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Intentamos loguear
        const success = login(email, password);
        if (success) {
            navigate('/perfil'); // Si sale bien, le mandamos al perfil
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Bienvenido</h1>
                    <p className="text-gray-500">Introduce tus datos para entrar en Il Pasticcio</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <div className="relative">
                            <User className="absolute left-3 top-3 text-gray-400" size={20} />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
                                placeholder="usuario@ejemplo.com"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
                                placeholder="••••••••" // Pista visual
                                required
                            />
                        </div>
                        <p className="text-xs text-right text-gray-500 mt-2">Pista: la contraseña es 1234</p>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                        Iniciar Sesión <ArrowRight size={20} />
                    </button>
                </form>
            </div>
        </div>
    );
};