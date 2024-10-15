import Image from 'next/image'
import { Phone, MapPin, Clock } from 'lucide-react'
import { Navbar } from './components/Navbar'
import CalendarioCitas from './components/CalendarioCitas'
import GaleriaTrabajo from './components/GaleriaTrabajo'
import ResenasClientes from './components/ResenasClientes'
import BlogBelleza from './components/BlogBelleza'
import { AsistenteVirtual } from './components/AsistenteVirtual'
import { GaleriaAntesDespues } from './components/GaleriaAntesDespues'
import { FAQ } from './components/FAQ'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 font-poppins">
      <Navbar />

      {/* Sección de bienvenida */}
      <section id="inicio" className="py-20 bg-purple-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Bienvenidos a Peluquería Gisela</h2>
          <p className="text-xl mb-8">Donde la belleza se encuentra con la experiencia</p>
          <Image
            src="/placeholder.svg?height=300&width=300"
            alt="Gisela Echavarria"
            width={300}
            height={300}
            className="rounded-full mx-auto shadow-lg"
          />
        </div>
      </section>

      {/* Calendario de citas */}
      <section id="calendario" className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Reserva tu cita</h2>
          <CalendarioCitas />
        </div>
      </section>

      {/* Galería de trabajos */}
      <section id="galeria" className="py-20 bg-gray-100">
        <GaleriaTrabajo />
      </section>

      {/* Galería Antes/Después */}
      <section id="antes-despues" className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Transformaciones Increíbles</h2>
          <GaleriaAntesDespues />
        </div>
      </section>

      {/* Reseñas de clientes */}
      <section id="resenas" className="py-20 bg-gray-100">
        <ResenasClientes />
      </section>

      {/* Asistente Virtual de Estilo */}
      <section id="asistente-virtual" className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Asistente Virtual de Estilo</h2>
          <AsistenteVirtual />
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section id="faq" className="py-20 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
          <FAQ />
        </div>
      
      </section>

      {/* Blog de belleza */}
      <section id="blog" className="py-20 bg-white">
        <BlogBelleza />
      </section>

      {/* Sección de contacto */}
      <section id="contacto" className="py-20 bg-purple-700 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Contáctanos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
              <p>+34 123 456 789</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dirección</h3>
              <p>Calle Principal 123, Ciudad</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Horario</h3>
              <p>Lunes a Sábado: 9:00 - 20:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pie de página */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Peluquería Gisela. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}