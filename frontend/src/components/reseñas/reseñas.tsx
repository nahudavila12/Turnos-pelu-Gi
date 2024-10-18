"use client"

import { useState } from "react"
import { Box, Button, Card, CardBody, Container, Flex, Icon, Text } from "@chakra-ui/react"
import { Star } from "lucide-react"

const resenas = [
  { id: 1, nombre: "María García", texto: "Excelente servicio, me encantó mi nuevo look.", calificacion: 5 },
  { id: 2, nombre: "Juan Pérez", texto: "Muy profesionales y atentos. Volveré seguro.", calificacion: 4 },
  { id: 3, nombre: "Ana Rodríguez", texto: "El mejor lugar para cuidar de tu cabello.", calificacion: 5 },
]

export default function ResenasClientes() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % resenas.length)
  }

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + resenas.length) % resenas.length)
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
    </Container>
  )
}
