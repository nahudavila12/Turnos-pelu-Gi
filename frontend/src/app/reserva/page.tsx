"use client"

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Reserva() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [hora, setHora] = useState('')
  const [servicio, setServicio] = useState('')
  const [opcion, setOpcion] = useState('')

  useEffect(() => {
    setServicio(searchParams.get('servicio') || '')
    setOpcion(searchParams.get('opcion') || '')
  }, [searchParams])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para procesar la reserva
    console.log('Reserva realizada:', { nombre, email, fecha, hora, servicio, opcion })
    alert('Reserva realizada con éxito!')
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-purple-700 text-white p-4">
        <div className="container mx-auto">
          <Link href="/" className="text-2xl font-bold">Peluquería Gisela</Link>
        </div>
      </header>

      <main className="container mx-auto mt-8 p-4">
        <h1 className="text-3xl font-bold mb-6">Reservar Cita</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre completo</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fecha" className="block text-sm font-medium text-gray-700">Fecha</label>
            <input
              type="date"
              id="fecha"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="hora" className="block text-sm font-medium text-gray-700">Hora</label>
            <input
              type="time"
              id="hora"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              required
              
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="servicio" className="block text-sm font-medium text-gray-700">Servicio</label>
            <input
              type="text"
              id="servicio"
              value={servicio}
              readOnly
              className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="opcion" className="block text-sm font-medium text-gray-700">Opción seleccionada</label>
            <input
              type="text"
              id="opcion"
              value={opcion}
              readOnly
              className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors"
          >
            Confirmar Reserva
          </button>
        </form>
      </main>
    </div>
  )
}