"use client"

import { useState } from "react"
import { Box, Button, Card, CardBody, Container, Flex, Icon, Input, Textarea, Text } from "@chakra-ui/react"
import { Star } from "lucide-react"

const resenasIniciales = [
  { id: 1, nombre: "María García", texto: "Excelente servicio, me encantó mi nuevo look.", calificacion: 5 },
  { id: 2, nombre: "Juan Pérez", texto: "Muy profesionales y atentos. Volveré seguro.", calificacion: 4 },
  { id: 3, nombre: "Ana Rodríguez", texto: "El mejor lugar para cuidar de tu cabello.", calificacion: 5 },
]

export default function ResenasClientes() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [resenas, setResenas] = useState(resenasIniciales)
  const [nuevoNombre, setNuevoNombre] = useState("")
  const [nuevoTexto, setNuevoTexto] = useState("")
  const [nuevaCalificacion, setNuevaCalificacion] = useState(5)

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % resenas.length)
  }

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + resenas.length) % resenas.length)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (nuevoNombre && nuevoTexto) {
      const nuevaResena = {
        id: resenas.length + 1,
        nombre: nuevoNombre,
        texto: nuevoTexto,
        calificacion: nuevaCalificacion,
      }
      setResenas((prevResenas) => [...prevResenas, nuevaResena])
      setNuevoNombre("")
      setNuevoTexto("")
      setNuevaCalificacion(5)
    }
  }

  return (
    <Container maxW="container.md" py={8}>
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={8}>
        Lo que dicen nuestros clientes
      </Text>
      <Card>
        <CardBody>
          <Flex justify="space-between" mb={4}>
            <Button onClick={prevReview} variant="outline">&lt; Anterior</Button>
            <Button onClick={nextReview} variant="outline">Siguiente &gt;</Button>
          </Flex>
          <Box textAlign="center">
            <Text fontSize="lg" mb={4}>&quot;{resenas[currentIndex].texto}&quot;</Text>
            <Text fontWeight="semibold">{resenas[currentIndex].nombre}</Text>
            <Flex justify="center" mt={2}>
              {[...Array(5)].map((_, i) => (
                <Icon
                  as={Star}
                  key={i}
                  boxSize={5}
                  color={i < resenas[currentIndex].calificacion ? "yellow.400" : "gray.300"}
                />
              ))}
            </Flex>
          </Box>
        </CardBody>
      </Card>

      {/* Sección para dejar una reseña */}
      <Box mt={8} p={4} bg="gray.100" borderRadius="md">
        <Text fontSize="2xl" fontWeight="bold" mb={4}>Deja tu reseña</Text>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Tu nombre"
            value={nuevoNombre}
            onChange={(e) => setNuevoNombre(e.target.value)}
            mb={4}
            required
          />
          <Textarea
            placeholder="Escribe tu reseña aquí..."
            value={nuevoTexto}
            onChange={(e) => setNuevoTexto(e.target.value)}
            mb={4}
            required
          />
          <Text fontWeight="semibold">Calificación:</Text>
          <Flex mb={4}>
            {[...Array(5)].map((_, i) => (
              <Button
                key={i}
                onClick={() => setNuevaCalificacion(i + 1)}
                colorScheme={i < nuevaCalificacion ? "yellow" : "gray"}
                variant="outline"
                mr={2}
              >
                {i + 1}
              </Button>
            ))}
          </Flex>
          <Button type="submit" colorScheme="purple">Enviar Reseña</Button>
        </form>
      </Box>
    </Container>
  )
}
