"use client"

import { useState } from 'react';
import { AppointmentTable } from './admin-appoinment';
import AdminCarga from './admin-carga';

export default function AdminView() {
  const [appointments] = useState([
    { id: 1, client: 'María García', service: 'Corte de cabello', date: '2023-06-01 10:00' },
    { id: 2, client: 'Juan Pérez', service: 'Tinte', date: '2023-06-01 11:30' },
    { id: 3, client: 'Ana Rodríguez', service: 'Peinado', date: '2023-06-01 14:00' },
  ]);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-purple-600 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl text-center font-bold">Panel de Administración, ¡Bienvenida Gisela!</h1>
        </div>
      </header>

      <main className="container mx-auto mt-8 p-4">
        <h2 className="text-xl font-semibold mb-4">Citas Programadas</h2>
        <AppointmentTable appointments={appointments} />

        {/* Sección de Carga de Servicios y Fotos */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 ">Gestión de Servicios</h2>
          <AdminCarga />
        </div>
      </main>
    </div>
  );
}
