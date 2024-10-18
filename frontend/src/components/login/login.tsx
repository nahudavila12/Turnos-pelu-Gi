"use client";

import { useState } from "react";
import {
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Spinner,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons"; // Asegúrate de que tus iconos sean compatibles con Chakra UI.
import Link from "next/link";

export default function LoginComponent() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    // Simular un proceso de inicio de sesión
    setTimeout(() => {
      setIsLoading(false);
      // Aquí puedes manejar la lógica de inicio de sesión o redirigir después de iniciar sesión
    }, 3000);
  }

  return (
    <Box mt={10} mb={10}> {/* Agregar márgenes arriba y abajo */}
      <Card width="full" maxW="md" mx="auto" bg="purple.50">
        <CardHeader bg="purple.600" color="white" textAlign="center">
          <Heading as="h2" size="lg" fontWeight="bold">
            Iniciar Sesión
          </Heading>
          <Text color="purple.100">Accede a tu cuenta para gestionar tus citas</Text>
        </CardHeader>
        <CardBody>
          <Tabs defaultIndex={0} width="full">
            <TabList>
              <Tab width="50%">Cuenta Local</Tab>
              <Tab width="50%">Google</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <form onSubmit={onSubmit}>
                  <Box mt={4}>
                    <FormControl id="email" isRequired>
                      <FormLabel>Email</FormLabel>
                      <Input
                        placeholder="nombre@ejemplo.com"
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        isDisabled={isLoading}
                        borderColor="purple.300"
                      />
                    </FormControl>
                    <FormControl id="password" mt={4} isRequired>
                      <FormLabel>Contraseña</FormLabel>
                      <Input
                        placeholder="••••••••"
                        type="password"
                        autoCapitalize="none"
                        autoComplete="current-password"
                        isDisabled={isLoading}
                        borderColor="purple.300"
                      />
                    </FormControl>
                    <Checkbox id="remember" mt={4} isDisabled={isLoading}>
                      Recordarme
                    </Checkbox>
                    <Button
                      mt={4}
                      colorScheme="purple"
                      width="full"
                      isLoading={isLoading}
                      type="submit"
                    >
                      Iniciar Sesión
                      {isLoading && <Spinner size="sm" ml={2} />}
                    </Button>
                  </Box>
                </form>
              </TabPanel>
              <TabPanel>
                <Button
                  variant="outline"
                  colorScheme="purple"
                  width="full"
                  onClick={() => {}}
                  mt={4}
                  borderColor="purple.300"
                >
                  <Icon name="google" boxSize={4} marginRight={2} />
                  Iniciar Sesión con Google
                </Button>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </CardBody>
        <CardFooter display="flex" flexDirection="column" alignItems="center">
          <Button variant="link" colorScheme="purple">
            ¿Olvidaste tu contraseña?
          </Button>
          <Text mt={2} textAlign="center" fontSize="sm" color="gray.600">
            ¿No tienes una cuenta?{" "}
            <Link href="/register"> 
            <Button variant="link" colorScheme="purple">
              Regístrate
            </Button>
            </Link>
          </Text>
        </CardFooter>
      </Card>
    </Box>
  );
}
