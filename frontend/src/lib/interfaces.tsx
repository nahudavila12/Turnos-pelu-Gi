import { FC } from "react";

// Interfaces para el Asistente Virtual
export interface Message {
    text: string;
    isUser: boolean;
  }
  
  export interface AsistenteVirtualProps {
    initialMessage?: string;
  }
  
  // Interfaces para la Galería Antes/Después
  export interface Transformacion {
    id: number;
    antes: string;
    despues: string;
    descripcion: string;
  }
  
  export interface GaleriaAntesDespuesProps {
    transformaciones: Transformacion[];
  }
  
  // Interfaces para las Preguntas Frecuentes (FAQ)
  export interface FAQ {
    pregunta: string;
    respuesta: string;
  }
  
  export interface FAQProps {
    faqs: FAQ[];
  }
  
  // Interfaces para el Calendario de Citas
  export interface Cita {
    id: number;
    start: Date;
    end: Date;
    title: string;
  }
  
  export interface CalendarioCitasProps {
    citas: Cita[];
    onCitaSelect?: (cita: Cita) => void;
  }
  
  // Interfaces para la Galería de Trabajos
  export interface Trabajo {
    id: number;
    titulo: string;
    imagen: string;
  }
  
  export interface GaleriaTrabajoProps {
    trabajos: Trabajo[];
  }
  
  // Interfaces para las Reseñas de Clientes
  export interface Resena {
    id: number;
    nombre: string;
    texto: string;
    calificacion: number;
  }
  
  export interface ResenasClientesProps {
    resenas: Resena[];
  }
  
  // Interfaces para el Blog de Belleza
  export interface EntradaBlog {
    id: number;
    titulo: string;
    resumen: string;
    fecha: string;
  }
  
  export interface BlogBellezaProps {
    entradas: EntradaBlog[];
  }
  
  // Interfaces para la Navbar
  export interface NavItem {
    title: string;
    href: string;
    description?: string;
  }
  
  export interface NavbarProps {
    logo?: string;
    navItems: NavItem[];
  }
  export interface EstadisticasProps {
    datos: {
      servicios: string[]
      ingresos: number[]
    }

    
  }
  export interface Event {
    start: Date;
    end: Date;
    title: string;
  }

  export const AsistenteVirtual: FC<AsistenteVirtualProps> = () => null
export const GaleriaAntesDespues: FC<GaleriaAntesDespuesProps> = () => null
export const FAQ: FC<FAQProps> = () => null
export const CalendarioCitas: FC<CalendarioCitasProps> = () => null
export const GaleriaTrabajo: FC<GaleriaTrabajoProps> = () => null
export const ResenasClientes: FC<ResenasClientesProps> = () => null
export const BlogBelleza: FC<BlogBellezaProps> = () => null
export const Navbar: FC<NavbarProps> = () => null