"use client"

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from 'lucide-react'

const resenas = [
  { id: 1, nombre: 'María García', texto: 'Excelente servicio, me encantó mi nuevo look.', calificacion: 5 },
  { id: 2, nombre: 'Juan Pérez', texto: 'Muy profesionales y atentos. Volveré seguro.', calificacion: 4 },
  { id: 3, nombre: 'Ana Rodríguez', texto: 'El mejor lugar para cuidar de tu cabello.', calificacion: 5 },
]

export default function ResenasClientes() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % resenas.length)
  }

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + resenas.length) % resenas.length)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Lo que dicen nuestros clientes</h2>
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <Button onClick={prevReview} variant="outline">&lt; Anterior</Button>
            <Button onClick={nextReview} variant="outline">Siguiente &gt;</Button>
          </div>
          <div className="text-center">
            <p className="text-lg mb-4">&quot;{resenas[currentIndex].texto}&quot;</p>
            <p className="font-semibold">{resenas[currentIndex].nombre}</p>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < resenas[currentIndex].calificacion ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}