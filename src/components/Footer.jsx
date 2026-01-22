import React from 'react';
import { ChefHat, Instagram, Github, X } from 'lucide-react'; // <--- Importamos X y Github
import { Link } from 'react-router-dom';

export const Footer = () => {
    const socialLink = "https://github.com/gabri98gim"; // Tu enlace para todos

    return (
        <footer className="bg-gray-900 dark:bg-slate-950 text-white py-12 border-t-0 dark:border-t dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* COLUMNA 1: LOGO */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <ChefHat className="text-orange-500" size={32} />
                            <span className="text-xl font-bold tracking-wider">IL PASTICCIO</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            La auténtica cocina italiana hecha con pasión y los mejores ingredientes.
                            Del horno a tu mesa.
                        </p>
                    </div>

                    {/* COLUMNA 2: ENLACES */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-white">Enlaces Rápidos</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link to="/" className="hover:text-orange-500 transition-colors">Inicio</Link></li>
                            <li><Link to="/menu" className="hover:text-orange-500 transition-colors">Menú Completo</Link></li>
                            <li><Link to="/contacto" className="hover:text-orange-500 transition-colors">Reservas</Link></li>
                            <li><Link to="/login" className="hover:text-orange-500 transition-colors">Mi Cuenta</Link></li>
                        </ul>
                    </div>

                    {/* COLUMNA 3: SOCIAL */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-white">Síguenos</h3>
                        <div className="flex gap-4">
                            {/* INSTAGRAM (Se queda, pero con tu link) */}
                            <a
                                href={socialLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-slate-800 dark:bg-slate-900 p-2 rounded-full hover:bg-orange-500 hover:text-white transition-all text-gray-400"
                            >
                                <Instagram size={20} />
                            </a>

                            {/* FACEBOOK -> X (Nuevo) */}
                            <a
                                href={socialLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-slate-800 dark:bg-slate-900 p-2 rounded-full hover:bg-orange-500 hover:text-white transition-all text-gray-400"
                            >
                                <X size={20} /> {/* Icono de X */}
                            </a>

                            {/* TWITTER -> GITHUB (Nuevo) */}
                            <a
                                href={socialLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-slate-800 dark:bg-slate-900 p-2 rounded-full hover:bg-orange-500 hover:text-white transition-all text-gray-400"
                            >
                                <Github size={20} /> {/* Icono de GitHub */}
                            </a>
                        </div>
                    </div>
                </div>

                {/* LÍNEA SEPARADORA DEL COPYRIGHT */}
                <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-gray-500">
                    © 2026 Il Pasticcio Ristorante. Todos los derechos reservados.
                </div>

            </div>
        </footer>
    );
};