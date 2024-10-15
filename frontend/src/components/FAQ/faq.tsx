"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
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

export function FAQ() {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-purple-700 text-white p-4">
        <h2 className="text-xl font-bold text-center">Preguntas Frecuentes</h2>
      </div>
      <Accordion type="single" collapsible className="p-4">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.pregunta}</AccordionTrigger>
            <AccordionContent>{faq.respuesta}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}