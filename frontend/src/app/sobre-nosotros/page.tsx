import { Box, Flex, Text, Heading, Avatar, Stack } from '@chakra-ui/react';

export default function sobreNosotros() {
  return (
    <Box maxW="4xl" mx="auto" bg="purple.100" p={6} borderRadius="md" boxShadow="lg" my={10}>
      <Box bg="purple.600" borderRadius="md" py={4} px={6}>
        <Heading as="h2" size="lg" textAlign="center" color="white">
          Sobre Nosotros
        </Heading>
      </Box>
      <Stack mt={6} spacing={6}>
        <Text textAlign="center" color="purple.800">
          En Peluquería Gisela, nos dedicamos a realzar tu belleza natural y a brindarte una experiencia de cuidado capilar excepcional.
        </Text>
        
        <Flex direction={{ base: 'column', md: 'row' }} gap={6}>
          <Box>
            <Heading as="h3" size="md" color="purple.700" mb={2}>
              Nuestra Historia
            </Heading>
            <Text color="purple.900">
              Fundada en 2010, Peluquería Estilo ha sido un referente en innovación y calidad en el mundo del cuidado capilar. Nuestro equipo de estilistas altamente capacitados se mantiene al día con las últimas tendencias y técnicas.
            </Text>
          </Box>
          <Box>
            <Heading as="h3" size="md" color="purple.700" mb={2}>
              Nuestra Misión
            </Heading>
            <Text color="purple.900">
              Nos esforzamos por ofrecer servicios de peluquería de primera clase que no solo mejoren tu apariencia, sino que también aumenten tu confianza. Creemos que cada cliente es único y merece un servicio personalizado.
            </Text>
          </Box>
        </Flex>

        <Box mt={8}>
          <Heading as="h3" size="md" textAlign="center" color="purple.700" mb={4}>
            Nuestro Equipo
          </Heading>
          <Flex wrap="wrap" justify="center" gap={4}>
            {['Gisela Echavarria'].map((name) => (
              <Box key={name} textAlign="center">
                <Avatar
                  name={name}
                  src={`/placeholder.svg?height=96&width=96`}
                  size="xl"
                  borderWidth={2}
                  borderColor="purple.300"
                />
                <Text mt={2} fontWeight="medium" color="purple.800">
                  {name}
                </Text>
              </Box>
            ))}
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
}
