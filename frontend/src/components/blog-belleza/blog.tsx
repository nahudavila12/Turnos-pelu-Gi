import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const entradas = [
  {
    id: 1,
    titulo: 'Cómo mantener tu color de pelo',
    resumen: 'Descubre los mejores consejos para que tu tinte dure más tiempo...',
    fecha: '2023-06-01'
  },
  {
    id: 2,
    titulo: 'Tendencias de peinados para este verano',
    resumen: 'Te mostramos los estilos que serán tendencia esta temporada...',
    fecha: '2023-05-15'
  },
  {
    id: 3,
    titulo: 'Cuidados para el cabello rizado',
    resumen: 'Aprende a cuidar y potenciar tus rizos con estos consejos...',
    fecha: '2023-05-01'
  }
]

export default function BlogBelleza() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Blog de Belleza</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {entradas.map((entrada) => (
          <Card key={entrada.id}>
            <CardHeader>
              <CardTitle>{entrada.titulo}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{entrada.resumen}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <span className="text-sm text-gray-500">{entrada.fecha}</span>
              <Button variant="outline">
                <Link href={`/blog/${entrada.id}`}>Leer más</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}