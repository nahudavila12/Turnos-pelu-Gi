"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const servicios = {
  'corte-de-cabello': {
    nombre: 'Corte de cabello',
    descripcion: 'Corte de cabello personalizado según tus preferencias.',
    opciones: [
      { nombre: 'Corte básico', precio: '20€' },
      { nombre: 'Corte y peinado', precio: '30€' },
      { nombre: 'Corte de barba', precio: '15€' },
    ],
  },
  'tinte': {
    nombre: 'Tinte',
    descripcion: 'Coloración del cabello con productos de alta calidad.',
    opciones: [
      { nombre: 'Tinte completo', precio: '50€' },
      { nombre: 'Mechas', precio: '70€' },
      { nombre: 'Balayage', precio: '90€' },
    ],
  },
  'peinados': {
    nombre: 'Peinados',
    descripcion: 'Peinados para ocasiones especiales o uso diario.',
    opciones: [
      { nombre: 'Peinado básico', precio: '30€' },
      { nombre: 'Peinado de fiesta', precio: '50€' },
      { nombre: 'Recogido', precio: '40€' },
    ],
  },
  'tratamientos-capilares': {
    nombre: 'Tratamientos capilares',
    descripcion: 'Tratamientos para mejorar la salud y apariencia de tu cabello.',
    opciones: [
      { nombre: 'Hidratación profunda', precio: '40€' },
      { nombre: 'Tratamiento anticaída', precio: '60€' },
      { nombre: 'Queratina', precio: '80€' },
    ],
  },
  'manicura': {
    nombre: 'Manicura',
    descripcion: 'Cuidado y embellecimiento de tus uñas.',
    opciones: [
      { nombre: 'Manicura básica', precio: '25€' },
      { nombre: 'Manicura con gel', precio: '35€' },
      { nombre: 'Manicura con diseño', precio: '40€' },
    ],
  },
  'depilacion': {
    nombre: 'Depilación',
    descripcion: 'Eliminación del vello corporal.',
    opciones: [
      { nombre: 'Depilación de cejas', precio: '15€' },
      { nombre: 'Depilación de piernas', precio: '30€' },
      { nombre: 'Depilación de axilas', precio: '20€' },
    ],
  },
}

export default function ServicioDetalle({ params }: { params: { servicio: string } }) {
  const router = useRouter()
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('')
  const servicio = servicios[params.servicio as keyof typeof servicios]

  if (!servicio) {
    return <div>Servicio no encontrado</div>
  }

  const handleReserva = () => {
    if (opcionSeleccionada) {
      router.push(`/reserva?servicio=${params.servicio}&opcion=${opcionSeleccionada}`)
    } else {
      alert('Por favor, selecciona una opción antes de reservar.')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-purple-700 text-white p-4">
        <div className="container mx-auto">
          <Link href="/" className="text-2xl font-bold">Peluquería Gisela</Link>
        </div>
      </header>

      <main className="container mx-auto mt-8 p-4">
        <h1 className="text-3xl font-bold mb-4">{servicio.nombre}</h1>
        <p className="text-lg mb-6">{servicio.descripcion}</p>

        <h2 className="text-2xl font-semibold mb-4">Opciones disponibles:</h2>
        <div className="space-y-4">
          {servicio.opciones.map((opcion, index) => (
            <div key={index} className="flex items-center">
              <input
                type="radio"
                id={`opcion-${index}`}
                name="opcion"
                value={opcion.nombre}
                onChange={(e) => setOpcionSeleccionada(e.target.value)}
                className="mr-2"
              />
              <label htmlFor={`opcion-${index}`} className="text-lg">
                {opcion.nombre} - {opcion.precio}
              </label>
            </div>
          ))}
        </div>

        <button
          onClick={handleReserva}
          className="mt-8 bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors"
        >
          Reservar
        </button>
      </main>
    </div>
  )
}