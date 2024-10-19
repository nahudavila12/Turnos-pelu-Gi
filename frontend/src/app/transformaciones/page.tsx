"use client"


import { Box } from "@chakra-ui/react"
import { GaleriaAntesDespuesProps } from "../../lib/interfaces"
import { GaleriaAntesDespues } from "@/components/galeria-antes-despues/galeria-antes-despues"

const data: GaleriaAntesDespuesProps = {
  transformaciones: [
    {
        id:1,
      antes: "/images/antes1.jpg",
      despues: "/images/despues1.jpg",
      descripcion: "Transformación de corte y color espectacular."
    },
    {
        id:2,
        antes: "/images/imagen1.png",
        despues: "/images/imagen2.png",
        
      descripcion: "Cambio radical con mechas y tratamiento de hidratación."
    },
    {
        id:3,
      antes: "/images/antes3.jpg",
      despues: "/images/despues3.jpg",
      descripcion: "Un estilo fresco y moderno para lucir fabulosa."
    },
  ],
}

export default function GaleriaAntesDespuesView() {
  return (
    <Box p={6}>
      <GaleriaAntesDespues transformaciones={data.transformaciones} />
    </Box>
  )
}
