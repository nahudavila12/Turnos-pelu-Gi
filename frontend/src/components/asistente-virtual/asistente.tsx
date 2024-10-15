"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

type Message = {
  text: string
  isUser: boolean
}

const respuestas = {
  "corte": "Tenemos varios estilos de corte disponibles. ¿Buscas algo corto, mediano o largo?",
  "color": "Ofrecemos una amplia gama de colores y técnicas como mechas, balayage, y tinte completo. ¿Qué estilo te interesa?",
  "cuidado": "El cuidado del cabello es esencial. Recomendamos usar productos específicos para tu tipo de cabello y hacer tratamientos hidratantes regularmente.",
  "precio": "Nuestros precios varían según el servicio. Los cortes empiezan desde 20€, y los tintes desde 50€. ¿Quieres saber sobre un servicio en particular?",
  "default": "Lo siento, no entiendo tu pregunta. ¿Puedes reformularla o preguntar sobre cortes, colores, cuidado del cabello o precios?"
}

export function AsistenteVirtual() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hola, soy el asistente virtual de la Peluquería Gisela. ¿En qué puedo ayudarte hoy?", isUser: false }
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (input.trim() === "") return

    const newMessages = [...messages, { text: input, isUser: true }]
    setMessages(newMessages)
    setInput("")

    // Simular respuesta del asistente
    setTimeout(() => {
      const lowerInput = input.toLowerCase()
      let respuesta = respuestas.default
      for (const [key, value] of Object.entries(respuestas)) {
        if (lowerInput.includes(key)) {
          respuesta = value
          break
        }
      }
      setMessages([...newMessages, { text: respuesta, isUser: false }])
    }, 1000)
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-purple-700 text-white p-4">
        <h2 className="text-xl font-bold">Asistente Virtual de Estilo</h2>
      </div>
      <ScrollArea className="h-[400px] p-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 ${message.isUser ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-2 rounded-lg ${message.isUser ? 'bg-purple-100' : 'bg-gray-100'}`}>
              {message.text}
            </div>
          </div>
        ))}
      </ScrollArea>
      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Escribe tu pregunta aquí..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button onClick={handleSend}>Enviar</Button>
        </div>
      </div>
    </div>
  )
}