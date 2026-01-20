import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                {/* Columna 1: Marca */}
                <div>
                    <h3 className="text-2xl font-bold text-orange-500 mb-4">IL PASTICCIO</h3>
                    <p className="text-gray-400">
                        La auténtica cocina italiana hecha con pasión y los mejores ingredientes.
                        Del horno a tu mesa.
                    </p>
                </div>

                {/* Columna 2: Enlaces */}
                <div>
                    <h4 className="text-xl font-bold mb-4">Enlaces Rápidos</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="/" className="hover:text-orange-500 transition-colors">Inicio</a></li>
                        <li><a href="/menu" className="hover:text-orange-500 transition-colors">Menú Completo</a></li>
                        <li><a href="/contacto" className="hover:text-orange-500 transition-colors">Reservas</a></li>
                    </ul>
                </div>

                {/* Columna 3: Social */}
                <div>
                    <h4 className="text-xl font-bold mb-4">Síguenos</h4>
                    <div className="flex justify-center md:justify-start gap-4">
                        <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-orange-500 transition-colors">
                            <Instagram size={24} />
                        </a>
                        <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-orange-500 transition-colors">
                            <Facebook size={24} />
                        </a>
                        <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-orange-500 transition-colors">
                            <Twitter size={24} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
                <p>© 2024 Il Pasticcio Ristorante. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};