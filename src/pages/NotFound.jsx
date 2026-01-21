import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-9xl font-bold text-orange-500">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Ups, se nos ha quemado esta pizza (Página no encontrada)</p>
        <Link to="/" className="bg-slate-900 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-500 transition-colors">
            Volver al Inicio
        </Link>
    </div>
);