"use client";

import { useServices } from '../../utils/useservices';
import {
  Box,
  Button,
  Heading,
  Text,
  Stack,
  Icon,
  Flex, // Importa Flex
} from "@chakra-ui/react";
import { ChevronLeft, Scissors, Palette, Sparkles } from "lucide-react";

// Mapeo de iconos
const iconMap = {
  Scissors,
  Palette,
  Sparkles
};

export default function Servicios() {
  const {
    services,
    selectedService,
    selectedSubService,
    selectedItem,
    selectService,
    selectSubService,
    selectItem,
    goBack
  } = useServices();

  const renderServiceList = () => (
    <Stack spacing={4} align="center">
      {services.map((service) => {
        const IconComponent = iconMap[service.icon as keyof typeof iconMap];
        return (
          <Box
            key={service.id}
            p={6}
            bg="white"
            shadow="md"
            borderRadius="md"
            w="full"
            maxW="400px"
            onClick={() => selectService(service.id)}
            cursor="pointer"
          >
            <Stack align="center" spacing={3}>
              <Icon as={IconComponent} boxSize={10} color="purple.600" />
              <Text fontSize="xl" fontWeight="bold" textAlign="center">
                {service.name}
              </Text>
            </Stack>
          </Box>
        );
      })}
    </Stack>
  );

  const renderSubServiceList = () => (
    <Stack spacing={4} align="center">
      {selectedService?.subServices.map((subService) => (
        <Box
          key={subService.id}
          p={6}
          bg="white"
          shadow="md"
          borderRadius="md"
          w="full"
          maxW="400px"
          onClick={() => selectSubService(subService.id)}
          cursor="pointer"
        >
          <Text fontSize="xl" fontWeight="bold" textAlign="center">
            {subService.name}
          </Text>
        </Box>
      ))}
    </Stack>
  );

  const renderItemList = () => (
    <Stack spacing={4} align="center">
      {selectedSubService?.items.map((item) => (
        <Box
          key={item.id}
          p={6}
          bg="white"
          shadow="md"
          borderRadius="md"
          w="full"
          maxW="400px"
          onClick={() => selectItem(item.id)}
          cursor="pointer"
        >
          <Stack direction="row" justify="space-between" align="center">
            <Text fontSize="lg">{item.name}</Text>
            <Text color="purple.600" fontWeight="bold">{item.priceRange}</Text>
          </Stack>
        </Box>
      ))}
    </Stack>
  );

  const renderItemDetails = () => (
    <Stack spacing={4}>
      <Heading size="lg" color="purple.800">{selectedItem?.name}</Heading>
      <Text color="gray.600">{selectedItem?.description}</Text>
      <Text fontSize="xl" fontWeight="bold" color="purple.600">{selectedItem?.priceRange}</Text>
      <Button bg="purple.600" color="white" _hover={{ bg: "purple.700" }} w="full">
        Reservar este servicio
      </Button>
    </Stack>
  );

  const renderContent = () => {
    if (selectedItem) return renderItemDetails();
    if (selectedSubService) return renderItemList();
    if (selectedService) return renderSubServiceList();
    return renderServiceList();
  };

  const renderTitle = () => {
    if (selectedItem) return selectedItem.name;
    if (selectedSubService) return selectedSubService.name;
    if (selectedService) return selectedService.name;
    return "Nuestros Servicios";
  };

  return (
    <Box maxW="4xl" mx="auto" bg="purple.50" p={6} borderRadius="md">
      <Box bg="purple.600" p={6} borderRadius="md" textAlign="center">
        <Heading color="white" size="xl">{renderTitle()}</Heading>
        <Text color="purple.100" fontSize="lg">
          Descubre nuestra amplia gama de servicios de belleza
        </Text>
      </Box>
      <Box mt={6}>
        {/* Usa Flex para alinear el botón a la izquierda */}
        <Flex justify="flex-start">
          {(selectedService || selectedSubService || selectedItem) && (
            <Button variant="ghost" onClick={goBack} leftIcon={<ChevronLeft />} mb={4}>
              Volver
            </Button>
          )}
        </Flex>
        <Box textAlign="center">
          {renderContent()}
        </Box>
      </Box>
    </Box>
  );
}
