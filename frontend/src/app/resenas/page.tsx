// src/app/reviews/page.tsx


import ResenasClientes from '@/components/reseñas/reseñas';
import { Box, Container } from '@chakra-ui/react';

export default function ReviewsPage() {
  return (
    <Container maxW="container.xl" py={8}>
      <Box mb={8}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>
          Reseñas de Nuestros Clientes
        </h1>
      </Box>
      <ResenasClientes />
    </Container>
  );
}
