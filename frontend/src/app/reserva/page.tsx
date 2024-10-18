"use client";

import { useState } from "react";
import {
  Box,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  Select,
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
  Flex,
  Icon,
  Grid,
} from "@chakra-ui/react";
import { Scissors, Clock } from "lucide-react";
import { DayPicker } from "react-day-picker"; // Importa el DayPicker

const servicios = [
  { id: 1, nombre: "Corte de cabello", duracion: 30, precio: 25 },
  { id: 2, nombre: "Tinte", duracion: 90, precio: 50 },
  { id: 3, nombre: "Peinado", duracion: 45, precio: 35 },
  { id: 4, nombre: "Tratamiento capilar", duracion: 60, precio: 40 },
];

const horarios = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
];

export default function ReservarCita() {
  const [fecha, setFecha] = useState<Date | undefined>(new Date());
  const [servicio, setServicio] = useState("");
  const [hora, setHora] = useState("");

  return (
    <Card maxW="4xl" mx="auto" bg="purple.50" p={6} borderRadius="md" boxShadow="lg">
      <CardHeader bg="purple.600" borderRadius="md" py={4} px={6}>
        <Heading as="h2" size="lg" textAlign="center" color="white">
          Reservar Cita
        </Heading>
      </CardHeader>
      <CardBody>
        <Stack spacing={6} mt={6}>
          <Flex direction={{ base: "column", md: "row" }} gap={6}>
            <Box>
              <FormControl>
                <FormLabel color="purple.800">Selecciona un servicio</FormLabel>
                <Select
                  placeholder="Elige un servicio"
                  value={servicio}
                  onChange={(e) => setServicio(e.target.value)}
                  borderColor="purple.300"
                  focusBorderColor="purple.500"
                >
                  {servicios.map((s) => (
                    <option key={s.id} value={s.nombre}>
                      {s.nombre} - {s.precio}€
                    </option>
                  ))}
                </Select>
              </FormControl>

              {servicio && (
                <Box bg="purple.100" p={4} borderRadius="md" mt={4}>
                  <Text fontWeight="semibold" color="purple.800" mb={2}>
                    {servicio}
                  </Text>
                  <Flex align="center" color="purple.700">
                    <Icon as={Clock} mr={2} />
                    <Text>{servicios.find((s) => s.nombre === servicio)?.duracion} minutos</Text>
                  </Flex>
                  <Flex align="center" color="purple.700" mt={2}>
                    <Icon as={Scissors} mr={2} />
                    <Text>{servicios.find((s) => s.nombre === servicio)?.precio}€</Text>
                  </Flex>
                </Box>
              )}
            </Box>

            <Box>
              <FormControl>
                <FormLabel color="purple.800">Elige una fecha</FormLabel>
                <DayPicker
                  mode="single"
                  selected={fecha}
                  onDayClick={(day) => setFecha(day)}
                  styles={{
                    day: {
                      borderRadius: "8px",
                      borderColor: "purple.300",
                    },
                    day_selected: { // Cambiar aquí
                      backgroundColor: "purple.600",
                      color: "white",
                    },
                    day_today: { // Cambiar aquí
                      fontWeight: "bold",
                      color: "purple.600",
                    },
                  }}
                />
              </FormControl>
            </Box>
          </Flex>

          <Box>
            <FormLabel color="purple.800">Selecciona una hora</FormLabel>
            <Grid templateColumns="repeat(3, 1fr)" gap={2}>
              {horarios.map((h) => (
                <Button
                  key={h}
                  onClick={() => setHora(h)}
                  colorScheme={hora === h ? "purple" : "gray"}
                  variant={hora === h ? "solid" : "outline"}
                >
                  {h}
                </Button>
              ))}
            </Grid>
          </Box>

          <Box>
            <FormLabel color="purple.800">Tus datos</FormLabel>
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
              <Input placeholder="Nombre" borderColor="purple.300" />
              <Input placeholder="Apellido" borderColor="purple.300" />
              <Input placeholder="Email" type="email" borderColor="purple.300" />
              <Input placeholder="Teléfono" type="tel" borderColor="purple.300" />
            </Grid>
          </Box>

          <Button
            colorScheme="purple"
            width="full"
            onClick={() => {
              /* Handle form submission */
            }}
          >
            Confirmar Reserva
          </Button>

          {servicio && fecha && hora && (
            <Box bg="purple.100" p={4} borderRadius="md">
              <Heading as="h3" size="md" color="purple.800" mb={2}>
                Resumen de tu reserva
              </Heading>
              <Text color="purple.700">
                <strong>Servicio:</strong> {servicio}
              </Text>
              <Text color="purple.700">
                <strong>Fecha:</strong> {fecha?.toLocaleDateString()}
              </Text>
              <Text color="purple.700">
                <strong>Hora:</strong> {hora}
              </Text>
            </Box>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
}
