"use client"

import { useState } from 'react'

export default function AdminDashboard() {
  const [appointments] = useState([
    { id: 1, client: 'María García', service: 'Corte de cabello', date: '2023-06-01 10:00' },
    { id: 2, client: 'Juan Pérez', service: 'Tinte', date: '2023-06-01 11:30' },
    { id: 3, client: 'Ana Rodríguez', service: 'Peinado', date: '2023-06-01 14:00' },
  ])

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-purple-700 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Panel de Administración - Peluquería Gisela</h1>
        </div>
      </header>
      <main className="container mx-auto mt-8 p-4">
        <h2 className="text-xl font-semibold mb-4">Citas Programadas</h2>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Servicio</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha y Hora</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{appointment.client}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{appointment.service}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{appointment.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
