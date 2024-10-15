import Image from 'next/image'

const trabajos = [
  { id: 1, titulo: 'Corte moderno', imagen: '/placeholder.svg?height=300&width=300' },
  { id: 2, titulo: 'Peinado de novia', imagen: '/placeholder.svg?height=300&width=300' },
  { id: 3, titulo: 'Coloración', imagen: '/placeholder.svg?height=300&width=300' },
  { id: 4, titulo: 'Tratamiento capilar', imagen: '/placeholder.svg?height=300&width=300' },
  { id: 5, titulo: 'Mechas', imagen: '/placeholder.svg?height=300&width=300' },
  { id: 6, titulo: 'Recogido elegante', imagen: '/placeholder.svg?height=300&width=300' },
]

export default function GaleriaTrabajo() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Nuestros Trabajos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {trabajos.map((trabajo) => (
          <div key={trabajo.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={trabajo.imagen}
              alt={trabajo.titulo}
              width={300}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{trabajo.titulo}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}