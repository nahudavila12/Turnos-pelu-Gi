"use client";

import { useState } from "react";
import {
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Heading,
  Stack,
  Card,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";

export default function AdminCarga() {
  const [newService, setNewService] = useState({ name: "", description: "" });
  const [newPhoto, setNewPhoto] = useState<File | null>(null);

  const handleServiceSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el nuevo servicio al backend
    console.log("Nuevo servicio:", newService);
    // Resetear el formulario
    setNewService({ name: "", description: "" });
  };

  const handlePhotoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPhoto) return;
    // Aquí iría la lógica para subir la foto al backend
    console.log("Nueva foto:", newPhoto);
    // Resetear el formulario
    setNewPhoto(null);
  };

  return (
    <Box minH="100vh" bg="purple.50" p={4}>
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgImage="url('/images/gisela.jpg')" // Reemplaza con la ruta de tu imagen
        bgSize="cover"
        bgPosition="center"
        zIndex={-1} // Asegura que el fondo esté detrás del contenido
      />
      <Box maxW="600px" mx="auto" position="relative" zIndex={1}>
        <Heading as="h1" size="xl" mb={6} color="purple.800">
          Panel de Administración
        </Heading>
        <Tabs variant="enclosed" defaultIndex={0}>
          <TabList>
            <Tab _selected={{ bg: "purple.700", color: "white" }}>Servicios</Tab>
            <Tab _selected={{ bg: "purple.700", color: "white" }}>Galería</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Card variant="outline" bg="white" shadow="lg">
                <CardHeader>
                  <Heading size="md" color="purple.800">
                    Agregar Nuevo Servicio
                  </Heading>
                </CardHeader>
                <CardBody>
                  <form onSubmit={handleServiceSubmit}>
                    <Stack spacing={4}>
                      <FormControl isRequired>
                        <FormLabel color="purple.700">Nombre del Servicio</FormLabel>
                        <Input
                          value={newService.name}
                          onChange={(e) =>
                            setNewService({ ...newService, name: e.target.value })
                          }
                          borderColor="purple.300"
                          _focus={{ borderColor: "purple.500", ring: "purple.500" }}
                        />
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel color="purple.700">Descripción</FormLabel>
                        <Textarea
                          value={newService.description}
                          onChange={(e) =>
                            setNewService({ ...newService, description: e.target.value })
                          }
                          borderColor="purple.300"
                          _focus={{ borderColor: "purple.500", ring: "purple.500" }}
                        />
                      </FormControl>
                      <Button
                        type="submit"
                        colorScheme="purple"
                      >
                        Agregar Servicio
                      </Button>
                    </Stack>
                  </form>
                </CardBody>
              </Card>
            </TabPanel>
            <TabPanel>
              <Card variant="outline" bg="white" shadow="lg">
                <CardHeader>
                  <Heading size="md" color="purple.800">
                    Agregar Foto a la Galería
                  </Heading>
                </CardHeader>
                <CardBody>
                  <form onSubmit={handlePhotoSubmit}>
                    <Stack spacing={4}>
                      <FormControl isRequired>
                        <FormLabel color="purple.700">Seleccionar Foto</FormLabel>
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => setNewPhoto(e.target.files?.[0] || null)}
                          borderColor="purple.300"
                          _focus={{ borderColor: "purple.500", ring: "purple.500" }}
                        />
                      </FormControl>
                      <Button
                        type="submit"
                        isDisabled={!newPhoto}
                        colorScheme="purple"
                      >
                        Subir Foto
                      </Button>
                    </Stack>
                  </form>
                </CardBody>
              </Card>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}
