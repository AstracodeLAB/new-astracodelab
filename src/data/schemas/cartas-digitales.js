export const schemaCartasDigitales = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "serviceType": "Diseño de Cartas Digitales para Restaurantes",
      "name": "Servicio de Cartas Digitales y Menús QR para Restaurantes",
      "description": "Servicio profesional para diseñar e implementar cartas digitales y menús QR personalizados para restaurantes. Moderniza tu menú con códigos QR, actualización instantánea, información de alérgenos y diseño adaptado a tu marca.",
      "url": "https://astracodelab.com/servicios/cartas-digitales-restaurantes/",
      "provider": {
        "@type": "Organization",
        "@id": "https://astracodelab.com#AstracodeLAB",
        "name": "AstracodeLAB",
        "url": "https://astracodelab.com",
        "logo": "https://astracodelab.com/assets/brand/logo.svg",
        "areaServed": "ES",
        "sameAs": ["https://www.linkedin.com/company/astracodelab", "https://www.instagram.com/astracodelab"]
      },
      "areaServed": {
        "@type": "Country",
        "name": "Spain"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": ["Restaurantes", "Cafeterías", "Bares", "Hoteles con restaurante", "Negocios de hostelería"],
        "name": "Restaurantes y negocios de hostelería que buscan modernizar su menú"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Características del servicio",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Diseño exclusivo y personalizado",
              "description": "Carta digital con estética única que refleja la personalidad de tu restaurante."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Funcionalidades de alérgenos y filtros",
              "description": "Permite a los clientes consultar información sobre ingredientes y alérgenos."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Carga inicial de contenido",
              "description": "Digitalización y carga de platos y descripciones iniciales del menú."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Estructura de menú intuitiva",
              "description": "Categorización clara de platos y bebidas para navegación sencilla."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Soporte multilingüe",
              "description": "Opción de ofrecer el menú en varios idiomas para ampliar clientela."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Generación de códigos QR personalizados",
              "description": "Códigos QR listos para imprimir y distribuir en el local."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Soporte post-lanzamiento",
              "description": "Acompañamiento y asistencia durante el primer mes tras la publicación."
            }
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://astracodelab.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Funcionalidades y Optimización",
          "item": "https://astracodelab.com/servicios/funcionalidades-optimizacion-web/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Cartas digitales para restaurantes",
          "item": "https://astracodelab.com/servicios/cartas-digitales-restaurantes/"
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Beneficios clave de una carta digital profesional",
      "description": "Principales ventajas de implementar un menú digital en tu restaurante",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Más higiene",
          "description": "Evitas el manejo de menús impresos, reforzando la sensación de seguridad y cuidado en el local."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Menú actualizado en segundos",
          "description": "Actualiza tu carta digital al instante desde cualquier dispositivo, sin costes de impresión. Tu menú siempre estará al día."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Una experiencia más clara y completa",
          "description": "Los clientes acceden a tu menú escaneando un código QR, con descripciones detalladas, fotos de calidad, alérgenos y opciones de idioma."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Ahorro en impresión y logística",
          "description": "Una carta digital es una inversión única que elimina gastos recurrentes en impresión y reimpresión de menús."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Mejora tu imagen de marca",
          "description": "Una carta digital moderna transmite innovación y diferencia tu restaurante en un sector competitivo."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Qué es un código QR y cómo funciona para mi carta digital?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Un código QR (Quick Response) es un código de barras bidimensional que los clientes escanean con la cámara de su smartphone. Al escanearlo, el teléfono los dirige automáticamente a tu carta digital online."
          }
        },
        {
          "@type": "Question",
          "name": "¿La carta digital estará disponible en varios idiomas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, la opción de una carta digital multilingüe es una de nuestras funcionalidades clave. Podrás ofrecer tu menú en los idiomas que necesites, permitiendo a tus clientes extranjeros sentirse más cómodos y facilitando su elección."
          }
        },
        {
          "@type": "Question",
          "name": "¿Puedo incluir fotos de mis platos en la carta digital?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Por supuesto. Incluir fotos de alta calidad de tus platos aumentan el atractivo visual de tu carta digital y pueden influir positivamente en la decisión de tus clientes."
          }
        },
        {
          "@type": "Question",
          "name": "¿Los clientes necesitan descargar una app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Los clientes solo necesitan escanear el código QR con la cámara de su smartphone para acceder directamente al menú en su navegador web, sin descargas ni instalaciones."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué pasa si mis clientes no están familiarizados con la tecnología?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Diseñamos menús digitales con interfaces intuitivas y sencillas. Escanear un código QR es cada vez más común y la mayoría de los smartphones lo hacen automáticamente con la cámara. Además, puedes mantener algunas cartas físicas como alternativa durante la transición."
          }
        }
      ]
    }
  ]
}