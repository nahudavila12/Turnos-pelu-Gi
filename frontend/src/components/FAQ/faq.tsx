"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FAQProps } from '../../lib/interfaces'

export function FAQ({ faqs }: FAQProps) {
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