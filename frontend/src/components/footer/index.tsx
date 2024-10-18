import { Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-purple-800 text-purple-100">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Peluquería Gisela</h3>
            <p className="text-sm">Realzando tu belleza natural desde 2010.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
              <li><Link href="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
              <li><Link href="/reserva" className="hover:text-white transition-colors">Reservar Cita</Link></li>
              <li><Link href="/sobre-nosotros" className="hover:text-white transition-colors">Sobre Nosotros</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <address className="not-italic">
              <p>Capital,Catamarca,Argentina</p>
              <p className="mt-2">Teléfono: +34 123 456 789</p>
              <p>Email: atencion.giselaechavarria@gmail.com</p>
            </address>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/peinados.gi.9" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.instagram.com/gisella_echavarria/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-purple-700 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Peluquería Gisela. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}