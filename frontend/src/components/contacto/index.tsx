"use client"
import {
    Box,
    Card,
    CardBody,
    CardHeader,
    Heading,
    Input,
    Textarea,
    Button,
    FormControl,
    FormLabel,
    Stack,
    Flex,
    Text,
    Icon,
  } from '@chakra-ui/react';
  import { Phone, MapPin, Mail } from 'lucide-react';
  
  export default function Contacto() {
    return (
      <Card maxW="4xl" mx="auto" bg="purple.50" p={6} borderRadius="md" boxShadow="lg">
        <CardHeader bg="purple.600" borderRadius="md" py={4} px={6}>
          <Heading as="h2" size="lg" textAlign="center" color="white">
            Contacto
          </Heading>
        </CardHeader>
        <CardBody>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={6} mt={6}>
            <Stack spacing={4}>
              <Flex align="center" gap={2}>
                <Icon as={Phone} color="purple.600" />
                <Text color="purple.900">+54 383 402-4572</Text>
              </Flex>
              <Flex align="center" gap={2}>
                <Icon as={MapPin} color="purple.600" />
                <Text color="purple.900">Capital,Catamarca,Argentina</Text>
              </Flex>
              <Flex align="center" gap={2}>
                <Icon as={Mail} color="purple.600" />
                <Text color="purple.900">atencion.giselaechavarria@gmail.com</Text>
              </Flex>
            </Stack>
            <Box as="form" width="100%">
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel htmlFor="name" color="purple.800">
                    Nombre
                  </FormLabel>
                  <Input
                    id="name"
                    placeholder="Tu nombre"
                    focusBorderColor="purple.500"
                    borderColor="purple.300"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email" color="purple.800">
                    Email
                  </FormLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    focusBorderColor="purple.500"
                    borderColor="purple.300"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="message" color="purple.800">
                    Mensaje
                  </FormLabel>
                  <Textarea
                    id="message"
                    placeholder="Tu mensaje"
                    focusBorderColor="purple.500"
                    borderColor="purple.300"
                  />
                </FormControl>
                <Button type="submit" bg="purple.600" _hover={{ bg: "purple.700" }} color="white">
                  Enviar mensaje
                </Button>
              </Stack>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    );
  }
  