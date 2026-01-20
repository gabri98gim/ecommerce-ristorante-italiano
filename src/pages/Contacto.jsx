import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contacto = () => {
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que la página se recargue
        alert("¡Gracias! Tu solicitud de reserva ha sido enviada. 🍝");
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-xl overflow-hidden">

                {/* Lado Izquierdo: Información */}
                <div className="bg-slate-900 p-10 text-white flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-orange-500">Contáctanos</h2>
                        <p className="text-gray-300 mb-8">
                            ¿Quieres reservar mesa o celebrar un evento? Escríbenos y te confirmaremos la disponibilidad al instante.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="bg-orange-500/20 p-3 rounded-full text-orange-500">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Llámanos</p>
                                    <p className="font-semibold">+34 912 345 678</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-orange-500/20 p-3 rounded-full text-orange-500">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Escríbenos</p>
                                    <p className="font-semibold">ciao@napoles.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-orange-500/20 p-3 rounded-full text-orange-500">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Visítanos</p>
                                    <p className="font-semibold">C. de Violeta Parra 24, Zaragoza</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-700">
                        <div className="flex items-center gap-2 text-orange-400 mb-2">
                            <Clock size={20} />
                            <span className="font-bold">Horario</span>
                        </div>
                        <p className="text-gray-400">Lun - Dom: 13:00 - 23:30</p>
                    </div>
                </div>

                {/* Lado Derecho: Formulario */}
                <div className="p-10 bg-white">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                                placeholder="Ej: Mario Rossi"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                                placeholder="tucorreo@ejemplo.com"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Fecha</label>
                                <input
                                    type="date"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Personas</label>
                                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none">
                                    <option>2 Personas</option>
                                    <option>4 Personas</option>
                                    <option>6 Personas</option>
                                    <option>+8 (Grupo)</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje (Opcional)</label>
                            <textarea
                                rows="4"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                                placeholder="¿Alguna alergia o petición especial?"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-slate-900 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                        >
                            Solicitar Reserva
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};