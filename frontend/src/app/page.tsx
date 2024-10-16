import Image from 'next/image'
import { Phone, MapPin, Clock } from 'lucide-react'
import { Navbar } from '@/components/Navbar/Navbar'
import CalendarioCitas from '@/components/calendario-citas/calendario'
import GaleriaTrabajo from '@/components/galeria-trabajos/galeria'
import { GaleriaAntesDespues } from '@/components/galeria-antes-despues/galeria-antes-despues'
import ResenasClientes from '@/components/reseñas/reseñas'
import { AsistenteVirtual } from '@/components/asistente-virtual/asistente'
import { FAQ } from '@/components/FAQ/faq'
import BlogBelleza from '@/components/blog-belleza/blog'
import { Transformacion, FAQ as FAQType, NavItem, Trabajo, Resena, EntradaBlog } from '../lib/interfaces'

const navItems: NavItem[] = [
  { title: "Inicio", href: "#inicio" },
  { title: "Servicios", href: "#servicios" },
  { title: "Galería", href: "#galeria" },
  { title: "Contacto", href: "#contacto" },
]

const transformaciones: Transformacion[] = [
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

const faqs: FAQType[] = [
  {
    pregunta: "¿Cuáles son sus horarios de atención?",
    respuesta: "Nuestro horario de atención es de lunes a sábado de 9:00 AM a 8:00 PM. Los domingos permanecemos cerrados."
  },
  {
    pregunta: "¿Necesito hacer cita previa?",
    respuesta: "Aunque aceptamos clientes sin cita previa, recomendamos hacer una reserva para asegurar la disponibilidad y reducir los tiempos de espera. Puedes hacer tu cita a través de nuestro sitio web o llamándonos directamente."
  },
  {
    pregunta: "¿Qué métodos de pago aceptan?",
    respuesta: "Aceptamos efectivo, tarjetas de crédito/débito (Visa, MasterCard, American Express) y pagos móviles como Apple Pay y Google Pay."
  },
  {
    pregunta: "¿Ofrecen servicios de coloración para el cabello?",
    respuesta: "Sí, ofrecemos una amplia gama de servicios de coloración, incluyendo tinte completo, mechas, balayage, y técnicas de coloración personalizadas. Nuestros estilistas pueden ayudarte a elegir el color y la técnica que mejor se adapte a tu estilo y tono de piel."
  },
  {
    pregunta: "¿Tienen productos para el cuidado del cabello a la venta?",
    respuesta: "Sí, vendemos una selección de productos profesionales para el cuidado del cabello. Nuestros estilistas pueden recomendarte los productos más adecuados para tu tipo de cabello y necesidades específicas."
  },
  {
    pregunta: "¿Cuál es su política de cancelación?",
    respuesta: "Pedimos que las cancelaciones se realicen con al menos 24 horas de antelación. Las cancelaciones con menos de 24 horas de anticipación o las ausencias sin aviso pueden estar sujetas a un cargo."
  }
]

const trabajos: Trabajo[] = [
  { id: 1, titulo: 'Corte moderno', imagen: '/placeholder.svg?height=300&width=300' },
  { id: 2, titulo: 'Peinado de novia', imagen:  '/placeholder.svg?height=300&width=300' },
  { id: 3, titulo: 'Coloración', imagen: '/placeholder.svg?height=300&width=300' },
  { id: 4, titulo: 'Tratamiento capilar', imagen: '/placeholder.svg?height=300&width=300' },
  { id: 5, titulo: 'Mechas', imagen: '/placeholder.svg?height=300&width=300' },
  { id: 6, titulo: 'Recogido elegante', imagen: '/placeholder.svg?height=300&width=300' },
]

const resenas: Resena[] = [
  { id: 1, nombre: 'María García', texto: 'Excelente servicio, me encantó mi nuevo look.', calificacion: 5 },
  { id: 2, nombre: 'Juan Pérez', texto: 'Muy profesionales y atentos. Volveré seguro.', calificacion: 4 },
  { id: 3, nombre: 'Ana Rodríguez', texto: 'El mejor lugar para cuidar de tu cabello.', calificacion: 5 },
]

const entradasBlog: EntradaBlog[] = [
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

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 font-poppins">
      <Navbar navItems={navItems} />

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
          <CalendarioCitas citas={[]} />
        </div>
      </section>

      {/* Galería de trabajos */}
      <section id="galeria" className="py-20 bg-gray-100">
        <GaleriaTrabajo trabajos={trabajos} />
      </section>

      {/* Galería Antes/Después */}
      <section id="antes-despues" className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Transformaciones Increíbles</h2>
          <GaleriaAntesDespues transformaciones={transformaciones} />
        </div>
      </section>

      {/* Reseñas de clientes */}
      <section id="resenas" className="py-20 bg-gray-100">
        <ResenasClientes resenas={resenas} />
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
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* Blog de belleza */}
      <section id="blog" className="py-20 bg-white">
        <BlogBelleza entradas={entradasBlog} />
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