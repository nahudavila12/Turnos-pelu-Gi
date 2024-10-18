"use client"

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Container,
} from "@chakra-ui/react"
import { FAQProps } from "../../lib/interfaces"

export function FAQ({ faqs }: FAQProps) {
  return (
    <Container maxW="2xl" bg="white" rounded="lg" shadow="md" overflow="hidden">
      <Box bg="purple.700" color="white" p={4}>
        <Heading as="h2" size="lg" textAlign="center">
          Preguntas Frecuentes
        </Heading>
      </Box>
      <Accordion allowToggle>
        {faqs.map((faq, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton _expanded={{ bg: "purple.100" }}>
                <Box flex="1" textAlign="left">
                  {faq.pregunta}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {faq.respuesta}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  )
}
