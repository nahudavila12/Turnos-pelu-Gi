"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Slider } from "@/components/ui/slider"

const transformaciones = [
  {
    id: 1,
    antes: "/placeholder.svg?height=400&width=300",
    despues: "/placeholder.svg?height=400&width=300",
    descripcion: "Cambio de look completo con corte y color"
  },
  {
    id: 2,
    antes: "/placeholder.svg?height=400&width=300",
    despues: "/placeholder.svg?height=400&width=300",
    descripcion: "Tratamiento de alisado y cambio de color"
  },
  {
    id: 3,
    antes: "/placeholder.svg?height=400&width=300",
    despues: "/placeholder.svg?height=400&width=300",
    descripcion: "Corte de pelo y peinado para evento especial"
  }
]

export function GaleriaAntesDespues() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliderValue, setSliderValue] = useState(50)

  const handleSliderChange = (value: number[]) => {
    setSliderValue(value[0])
  }

  const nextTransformacion = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % transformaciones.length)
    setSliderValue(50)
  }

  const prevTransformacion = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + transformaciones.length) % transformaciones.length)
    setSliderValue(50)
  }

  const transformacion = transformaciones[currentIndex]

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-purple-700 text-white p-4">
        <h2 className="text-xl font-bold text-center">Transformaciones Increíbles</h2>
      </div>
      <div className="p-4">
        <div className="relative w-full h-[400px]">
          <Image
            src={transformacion.antes}
            alt="Antes"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute top-0 right-0 bottom-0 left-0 overflow-hidden">
            <div style={{ width: `${sliderValue}%`, height: '100%', position: 'relative' }}>
              <Image
                src={transformacion.despues}
                alt="Después"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-0.5 h-full bg-white opacity-50"></div>
          </div>
        </div>
        <Slider
          value={[sliderValue]}
          onValueChange={handleSliderChange}
          max={100}
          step={1}
          className="mt-4"
        />
        <p className="text-center mt-4">{transformacion.descripcion}</p>
        <div className="flex justify-between mt-4">
          <button onClick={prevTransformacion} className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
            Anterior
          </button>
          <button onClick={nextTransformacion} className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
            Siguiente
          </button>
        </div>
      </div>
    </div>
  )
}