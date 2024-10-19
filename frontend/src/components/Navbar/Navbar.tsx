"use client"

import * as React from "react"
import Link from "next/link"
import { Scissors } from "lucide-react"
import { Box, Button, Container, Flex, Icon, Text } from "@chakra-ui/react"

export function Navbar() {
  return (
    <Box bg="purple.700" color="white" p={4}>
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <Link href="/">
            <Flex align="center">
              <Icon as={Scissors} w={6} h={6} />
              <Text ml={2} fontSize="2xl" fontWeight="bold">Peluquería Gisela</Text>
            </Flex>
          </Link>
          <Flex gap={4}>
            <Link href="/servicios">
              <Button variant="ghost" _hover={{ bg: "purple.600" }}>
                Servicios
              </Button>
            </Link>
            <Link href="/resenas">
              <Button variant="ghost" _hover={{ bg: "purple.600" }}>Reseñas</Button>
            </Link>
            <Link href="/admin">
              <Button variant="ghost" _hover={{ bg: "purple.600" }}>Admin</Button>
            </Link>
            <Link href="/blog">
              <Button variant="ghost" _hover={{ bg: "purple.600" }}>Blog</Button>
            </Link>
            <Link href="/contacto">
              <Button variant="ghost" _hover={{ bg: "purple.600" }}>Contacto</Button>
            </Link>
          </Flex>
          <Flex gap={2}>
            <Link href="/login">
              <Button variant="outline" borderColor="white" _hover={{ bg: "purple.600" }}>
                Iniciar Sesión
              </Button>
            </Link>
            <Link href="/register">
              <Button bg="white" color="purple.700" _hover={{ bg: "gray.200" }}>
                Registrarse
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}
