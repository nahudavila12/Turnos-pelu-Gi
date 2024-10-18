import Link from 'next/link'
import {
  Button,
  Container,
  Heading,
  Grid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text
} from "@chakra-ui/react"

const entradas = [
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

export default function BlogBelleza() {
  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h2" size="xl" textAlign="center" mb={8}>
        Blog de Belleza
      </Heading>
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6}>
        {entradas.map((entrada) => (
          <Card key={entrada.id} shadow="md" borderWidth="1px">
            <CardHeader>
              <Heading as="h3" size="md">
                {entrada.titulo}
              </Heading>
            </CardHeader>
            <CardBody>
              <Text>{entrada.resumen}</Text>
            </CardBody>
            <CardFooter display="flex" justifyContent="space-between" alignItems="center">
              <Text fontSize="sm" color="gray.500">{entrada.fecha}</Text>
              <Button as={Link} href={`/blog/${entrada.id}`} variant="outline" colorScheme="purple">
                Leer más
              </Button>
            </CardFooter>
          </Card>
        ))}
      </Grid>
    </Container>
  )
}
