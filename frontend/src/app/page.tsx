"use client"

import Image from 'next/image'
import { Box, Container, Heading, Text, SimpleGrid } from "@chakra-ui/react"

import { useState } from "react"
import { FAQ } from '@/components/FAQ/faq'

export default function Home() {
  const [faqs] = useState([
    {
      pregunta: "¿Necesito hacer una cita con anticipación?",
      respuesta: "Se recomienda hacer una cita para asegurar disponibilidad, pero también aceptamos visitas sin cita."
    },
    {
      pregunta: "¿Qué productos utilizan para el cuidado del cabello?",
      respuesta: "Utilizamos productos de alta calidad de marcas reconocidas que garantizan el mejor cuidado para tu cabello."
    },
    {
      pregunta: "¿Ofrecen asesoría personalizada para cambios de look?",
      respuesta: "¡Claro! Gisela y su equipo estarán encantados de ayudarte a encontrar el estilo perfecto para ti."
    },
    {
      pregunta: "¿Qué tipo de técnicas de coloración ofrecen?",
      respuesta: "Ofrecemos diversas técnicas de coloración, incluyendo balayage, mechas y tintes permanentes o semipermanentes."
    },
    {
      pregunta: "¿Hay algún tratamiento especial para cabello dañado?",
      respuesta: "Sí, ofrecemos tratamientos específicos para reparar y revitalizar el cabello dañado, incluyendo tratamientos de keratina."
    },
    {
      pregunta: "¿Puedo cancelar o reprogramar mi cita?",
      respuesta: "Sí, puedes cancelar o reprogramar tu cita con al menos 24 horas de anticipación para evitar cargos adicionales."
    },
    {
      pregunta: "¿Ofrecen servicios de maquillaje?",
      respuesta: "Sí, ofrecemos servicios de maquillaje para ocasiones especiales, como bodas, fiestas y sesiones de fotos."
    },
    {
      pregunta: "¿Tienen opciones para eventos grandes, como bodas?",
      respuesta: "Sí, ofrecemos paquetes especiales para eventos grandes y estaremos encantados de trabajar contigo para crear el look perfecto."
    },
  ])

  const servicios = [
    "Corte de Cabello",
    "Coloración",
    "Mechas",
    "Tratamientos Capilares",
    "Peinados Especiales",
    "Maquillaje",
  ]

  const testimonios = [
    {
      nombre: "Ana López",
      comentario: "¡El mejor salón al que he ido! Gisela entiende exactamente lo que quiero."
    },
    {
      nombre: "María Pérez",
      comentario: "La atención es excepcional y siempre salgo feliz con mi nuevo look."
    },
    {
      nombre: "Laura García",
      comentario: "Me encanta la calidad de los productos que utilizan. ¡Recomendadísimo!"
    },
    {
      nombre: "Juana Colem",
      comentario: "Gran Atencion . Volveria una y otra vez"
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 font-poppins">
      {/* Sección de bienvenida */}
      <section id="inicio" className="flex-grow py-20 bg-purple-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Bienvenidos a Peluquería Gisela</h2>
          <p className="text-xl mb-8">Donde la belleza se encuentra con la experiencia</p>
          <Image
            src="/images/gisela.jpg" // Asegúrate de que la imagen esté en la carpeta public/images
            alt="Gisela Echavarria"
            width={300}
            height={300}
            className="rounded-full mx-auto shadow-lg"
          />
        </div>
      </section>

      {/* Sección de historia */}
      <section id="historia" className="py-16 bg-white">
        <Container maxW="2xl">
          <Heading as="h2" size="lg" mb={4} textAlign="center">
            Nuestra Historia
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={6}>
            Gisela comenzó su viaje en el mundo de la peluquería hace más de 15 años, dedicándose con pasión a transformar la belleza de cada persona que entra por la puerta de su salón. Su enfoque en el detalle y la satisfacción del cliente la han convertido en un referente de calidad y estilo.
          </Text>
          <Text fontSize="lg" textAlign="center">
            Con un equipo comprometido y siempre al tanto de las últimas tendencias, Gisela se asegura de brindar una experiencia única, donde cada cliente se sienta especial y salga con una sonrisa. ¡Tu cabello está en las mejores manos!
          </Text>
        </Container>
      </section>

      {/* Sección de testimonios */}
      <section id="testimonios" className="py-16 bg-white">
        <Container maxW="2xl">
          <Heading as="h2" size="lg" mb={4} textAlign="center">
            Testimonios de Clientes
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} textAlign="center">
            {testimonios.map((testimonio, index) => (
              <Box key={index} bg="purple.100" rounded="md" p={4} shadow="md">
                <Text fontWeight="bold">{testimonio.nombre}</Text>
                <Text>"{testimonio.comentario}"</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </section>

      {/* Sección de preguntas frecuentes (FAQ) */}
      <section id="faq" className="py-16 bg-purple-100">
        <FAQ faqs={faqs} />
      </section>
    </div>
  )
}
