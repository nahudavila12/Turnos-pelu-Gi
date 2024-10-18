export type ServiceItem = {
    id: string;
    name: string;
    priceRange: string;
    description: string;
  };
  
  export type SubService = {
    id: string;
    name: string;
    items: ServiceItem[];
  };
  
  export type Service = {
    id: string;
    name: string;
    icon: string;
    subServices: SubService[];
  };
  
  export const services: Service[] = [
    {
      id: "peluqueria",
      name: "Peluquería",
      icon: "Scissors",
      subServices: [
        {
          id: "peinados",
          name: "Peinados",
          items: [
            {
              id: "novia",
              name: "Peinado para Novia",
              priceRange: "100€ - 150€",
              description: "Peinado elegante y duradero para tu día especial."
            },
            {
              id: "fiesta",
              name: "Peinado para Fiesta",
              priceRange: "60€ - 90€",
              description: "Looks glamurosos para tus eventos más importantes."
            },
            {
              id: "casual",
              name: "Peinado Casual",
              priceRange: "40€ - 60€",
              description: "Estilos frescos y modernos para el día a día."
            }
          ]
        },
        {
          id: "cortes",
          name: "Cortes",
          items: [
            {
              id: "dama",
              name: "Corte para Dama",
              priceRange: "30€ - 50€",
              description: "Cortes personalizados que realzan tu belleza natural."
            },
            {
              id: "caballero",
              name: "Corte para Caballero",
              priceRange: "20€ - 35€",
              description: "Estilos clásicos y modernos para todo tipo de cabello."
            }
          ]
        },
        {
          id: "coloracion",
          name: "Coloración",
          items: [
            {
              id: "tinte",
              name: "Tinte Completo",
              priceRange: "60€ - 100€",
              description: "Coloración completa con productos de alta calidad."
            },
            {
              id: "mechas",
              name: "Mechas",
              priceRange: "80€ - 120€",
              description: "Técnicas de mechas para un look dimensional."
            }
          ]
        }
      ]
    },
    {
      id: "maquillaje",
      name: "Maquillaje",
      icon: "Palette",
      subServices: [
        {
          id: "social",
          name: "Maquillaje Social",
          items: [
            {
              id: "evento",
              name: "Maquillaje para Evento",
              priceRange: "50€ - 80€",
              description: "Maquillaje profesional para lucir radiante en cualquier ocasión."
            }
          ]
        },
        {
          id: "novia",
          name: "Maquillaje de Novia",
          items: [
            {
              id: "boda",
              name: "Maquillaje de Novia",
              priceRange: "100€ - 150€",
              description: "Maquillaje duradero y fotogénico para tu día especial."
            }
          ]
        }
      ]
    },
    {
      id: "cosmetica",
      name: "Cosmética",
      icon: "Sparkles",
      subServices: [
        {
          id: "facial",
          name: "Tratamientos Faciales",
          items: [
            {
              id: "limpieza",
              name: "Limpieza Facial Profunda",
              priceRange: "60€ - 90€",
              description: "Limpieza profunda para revitalizar tu piel."
            },
            {
              id: "hidratacion",
              name: "Tratamiento de Hidratación",
              priceRange: "70€ - 100€",
              description: "Hidratación intensiva para todo tipo de piel."
            }
          ]
        },
        {
          id: "corporal",
          name: "Tratamientos Corporales",
          items: [
            {
              id: "masaje",
              name: "Masaje Relajante",
              priceRange: "50€ - 80€",
              description: "Masaje corporal para aliviar el estrés y la tensión."
            }
          ]
        }
      ]
    }
  ];