"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
} from "@chakra-ui/react";
import { GaleriaAntesDespuesProps } from "../../lib/interfaces";

export function GaleriaAntesDespues({ transformaciones }: GaleriaAntesDespuesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
  };

  const nextTransformacion = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % transformaciones.length);
    setSliderValue(50);
  };

  const prevTransformacion = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + transformaciones.length) % transformaciones.length);
    setSliderValue(50);
  };

  const transformacion = transformaciones[currentIndex];

  return (
    <Container maxW="2xl" bg="white" rounded="lg" shadow="md" overflow="hidden">
      <Box bg="purple.700" color="white" p={4}>
        <Heading as="h2" size="lg" textAlign="center">
          Transformaciones Increíbles
        </Heading>
      </Box>
      <Box p={4}>
        <Box position="relative" w="full" h="500px"> {/* Aumentar la altura a 500px */}
          <Image
            src={transformacion.antes}
            alt="Antes"
            layout="fill"
            objectFit="cover"
          />
          <Box position="absolute" top={0} right={0} bottom={0} left={0} overflow="hidden">
            <Box width={`${sliderValue}%`} height="100%" position="relative">
              <Image
                src={transformacion.despues}
                alt="Después"
                layout="fill"
                objectFit="cover"
              />
            </Box>
          </Box>
          <Box position="absolute" inset={0} display="flex" alignItems="center" justifyContent="center" pointerEvents="none">
            <Box width="1px" height="full" bg="white" opacity={0.5}></Box>
          </Box>
        </Box>
        <Slider
          value={sliderValue}
          onChange={handleSliderChange}
          max={100}
          step={1}
          mt={4}
        >
          <SliderTrack bg="gray.200">
            <SliderFilledTrack bg="purple.500" />
          </SliderTrack>
          <SliderThumb boxSize={4} bg="purple.600" />
        </Slider>
        <Text textAlign="center" mt={2} fontSize="sm" color="gray.600">
          Desliza para comparar: el lado izquierdo muestra el <strong>Antes</strong> y el derecho el <strong>Después</strong>.
        </Text>
        <Text textAlign="center" mt={4}>
          {transformacion.descripcion}
        </Text>
        <Flex justify="space-between" mt={4}>
          <Button onClick={prevTransformacion} bg="purple.600" color="white" _hover={{ bg: "purple.700" }}>
            Anterior
          </Button>
          <Button onClick={nextTransformacion} bg="purple.600" color="white" _hover={{ bg: "purple.700" }}>
            Siguiente
          </Button>
        </Flex>
      </Box>
    </Container>
  );
}
