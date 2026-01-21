import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export const Contacto = () => {
    return (
        <div className="min-h-screen py-12 px-4 flex items-center justify-center animate-fade-in">

            {/* CAJA PRINCIPAL: dark:bg-slate-800 */}
            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-slate-700 transition-colors">

                {/* LADO IZQUIERDO (Info) - Este ya era oscuro, lo dejamos igual */}
                <div className="bg-slate-900 p-10 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10">
                        <h2 className="text-4xl font-bold mb-6 text-orange-500">Contáctanos</h2>
                        <p className="text-slate-300 mb-8 text-lg">
                            ¿Quieres reservar mesa o celebrar un evento? Escríbenos y te confirmaremos la disponibilidad al instante.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400">Llámanos</p>
                                    <p className="font-bold">+34 912 345 678</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400">Escríbenos</p>
                                    <p className="font-bold">ciao@napoles.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400">Visítanos</p>
                                    <p className="font-bold">C. de Violeta Parra 24, Zaragoza</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 mt-12 pt-8 border-t border-slate-800">
                        <div className="flex items-center gap-2 text-orange-500 mb-2">
                            <Clock size={18} /> <span className="font-bold uppercase tracking-wider text-sm">Horario</span>
                        </div>
                        <p className="text-slate-400">Lun - Dom: 13:00 - 23:30</p>
                    </div>
                </div>

                {/* LADO DERECHO (Formulario) - AQUÍ APLICAMOS EL MODO OSCURO */}
                <div className="p-10 bg-white dark:bg-slate-800 transition-colors">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nombre Completo</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none transition-colors"
                                    placeholder="Ej: Mario Rossi"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none transition-colors"
                                    placeholder="tucorreo@ejemplo.com"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Fecha</label>
                                <input
                                    type="date"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Personas</label>
                                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none transition-colors">
                                    <option>2 Personas</option>
                                    <option>3 Personas</option>
                                    <option>4 Personas</option>
                                    <option>+5 Personas</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mensaje (Opcional)</label>
                            <textarea
                                rows="4"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none transition-colors resize-none"
                                placeholder="¿Alguna alergia o petición especial?"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-slate-900 hover:bg-orange-500 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 group"
                        >
                            Solicitar Reserva <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};