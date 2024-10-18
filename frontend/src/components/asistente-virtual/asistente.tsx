"use client";

import { useState } from "react";
import {
  Box,
  Button,
  VStack,
  HStack,
  Text,
  Input,
  useDisclosure,
  IconButton,
  Slide,
  Portal,
  useToast,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons"; // Importa CloseIcon para el botón de cerrar
import { Message, AsistenteVirtualProps } from "../../lib/interfaces";

const respuestas: { [key: string]: string } = {
  corte: "Tenemos varios estilos de corte disponibles. ¿Buscas algo corto, mediano o largo?",
  color: "Ofrecemos una amplia gama de colores y técnicas como mechas, balayage, y tinte completo. ¿Qué estilo te interesa?",
  cuidado: "El cuidado del cabello es esencial. Recomendamos usar productos específicos para tu tipo de cabello y hacer tratamientos hidratantes regularmente.",
  precio: "Nuestros precios varían según el servicio. Los cortes empiezan desde 20€, y los tintes desde 50€. ¿Quieres saber sobre un servicio en particular?",
  default: "Lo siento, no entiendo tu pregunta. ¿Puedes reformularla o preguntar sobre cortes, colores, cuidado del cabello o precios?",
};

export function AsistenteVirtual({
  initialMessage = "Hola, soy el asistente virtual de la Peluquería Gisela. ¿En qué puedo ayudarte hoy?",
}: AsistenteVirtualProps) {
  const [messages, setMessages] = useState<Message[]>([
    { text: initialMessage, isUser: false },
  ]);
  const [input, setInput] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleSend = () => {
    if (input.trim() === "") {
      toast({
        title: "Error",
        description: "Por favor, escribe un mensaje antes de enviar.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const newMessages = [...messages, { text: input, isUser: true }];
    setMessages(newMessages);
    setInput("");

    // Simular respuesta del asistente
    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      let respuesta = respuestas.default;
      for (const [key, value] of Object.entries(respuestas)) {
        if (lowerInput.includes(key)) {
          respuesta = value;
          break;
        }
      }
      setMessages([...newMessages, { text: respuesta, isUser: false }]);
    }, 1000);
  };

  return (
    <Portal>
      <Box position="fixed" bottom={4} right={4} zIndex={1000}>
        {/* Botón de Asistente Virtual */}
        <Button onClick={onOpen} colorScheme="purple" size="sm">
          Asistente Virtual
        </Button>
        {/* Ventana emergente */}
        <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
          <Box
            bg="white"
            boxShadow="lg"
            borderRadius="md"
            p={2}
            width="280px"
            border="1px solid"
            borderColor="purple.300"
            position="absolute"
            bottom="calc(100% + 10px)" // Ajustar para que esté encima del botón
            right={0} // Alinear a la derecha
          >
            <HStack justify="space-between">
              <Text fontWeight="bold" fontSize="lg">
                Asistente
              </Text>
              <IconButton
                aria-label="Cerrar"
                icon={<CloseIcon />}
                onClick={() => {
                  onClose(); // Cerrar la ventana emergente
                  setMessages([]); // Limpiar mensajes al cerrar
                }}
                variant="ghost"
                size="sm"
              />
            </HStack>
            <Box mt={2} maxH="200px" overflowY="auto">
              <VStack spacing={2} align="stretch">
                {messages.map((message, index) => (
                  <Box
                    key={index}
                    alignSelf={message.isUser ? "flex-end" : "flex-start"}
                    bg={message.isUser ? "purple.100" : "gray.100"}
                    borderRadius="md"
                    p={1}
                    maxW="80%"
                    shadow="sm"
                  >
                    <Text fontSize="sm">{message.text}</Text>
                  </Box>
                ))}
              </VStack>
            </Box>
            <HStack spacing={1} mt={2}>
              <Input
                placeholder="Pregunta..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                size="sm"
              />
              <Button onClick={handleSend} colorScheme="purple" size="sm">
                Enviar
              </Button>
            </HStack>
          </Box>
        </Slide>
      </Box>
    </Portal>
  );
}
