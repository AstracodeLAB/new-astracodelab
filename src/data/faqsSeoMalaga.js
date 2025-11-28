export const schemaLocalMalaga = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://astracodelab.com/diseno-web-malaga#AstracodeLABMalaga",
      "name": "AstracodeLAB - Diseño Web en Málaga",
      "alternateName": "Agencia de Diseño Web Málaga",
      "description": "Agencia de diseño y desarrollo web en Málaga. Creamos páginas web profesionales para empresas y autónomos de Málaga y provincia. Diseño responsive, SEO local y soporte personalizado.",
      "url": "https://astracodelab.com/diseno-web-malaga",
      "telephone": "+34-623-752-940",
      "priceRange": "700€",
      "image": "https://astracodelab.com/og_diseño_web_desarrollo_web_malaga.png",

      // CRÍTICO para SEO Local
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Málaga",
        "addressRegion": "Andalucía",
        "postalCode": "29001",
        "addressCountry": "ES"
      },

      // Área de servicio específica
      "areaServed": [
        {
          "@type": "City",
          "name": "Málaga"
        },
        {
          "@type": "State",
          "name": "Provincia de Málaga"
        },
        {
          "@type": "State",
          "name": "Andalucía"
        }
      ],

   
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "36.7213", // Coordenadas de Málaga
        "longitude": "-4.4214"
      },

      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:30",
          "closes": "17:00"
        }
      ],

      "sameAs": [
        "https://www.linkedin.com/company/astracodelab",
        "https://www.instagram.com/astracodelab"
      ],

      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios de diseño web en Málaga",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Diseño web para empresas de Málaga",
              "description": "Páginas web profesionales para empresas y negocios de Málaga",
              "areaServed": {
                "@type": "City",
                "name": "Málaga"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Tiendas online Málaga",
              "description": "Desarrollo de ecommerce para comercios de Málaga",
              "areaServed": {
                "@type": "City",
                "name": "Málaga"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO local Málaga",
              "description": "Posicionamiento web para negocios locales de Málaga",
              "areaServed": {
                "@type": "City",
                "name": "Málaga"
              }
            }
          }
        ]
      },

    },
    {
      "@type": "FAQPage",
      "@id": "https://astracodelab.com/diseno-web-malaga#FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Ofrecéis servicios de diseño web en Málaga?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, AstracodeLAB ofrece servicios de diseño y desarrollo web en Málaga. Aunque nuestras oficinas están ubicadas en Barcelona, Málaga y Castellón, trabajamos con clientes de toda Andalucía y España. Nos adaptamos a reuniones presenciales en Málaga o videollamadas según tu preferencia."
          }
        },
        {
          "@type": "Question",
          "name": "¿Podemos reunirnos en persona en Málaga para hablar de mi proyecto web?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Por supuesto. Realizamos reuniones presenciales en Málaga para conocer tu proyecto en detalle. También ofrecemos videollamadas si prefieres un formato más flexible. Lo importante es entender tus necesidades y definir juntos los objetivos de tu página web."
          }
        },
        {
          "@type": "Question",
          "name": "¿Trabajáis con empresas y autónomos de Málaga?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, trabajamos con empresas, autónomos, startups y profesionales independientes de Málaga y toda la provincia. Tenemos experiencia en diversos sectores como turismo, hostelería, comercio local, servicios profesionales y sector industrial característico de la zona."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué diferencia hay entre web corporativa y landing page?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Una web corporativa es un sitio completo para reflejar la imagen de tu marca, con secciones como Quiénes somos, Servicios o Contacto, optimizada para tener un diseño web elegante y profesional. Una landing page, en cambio, es una sola página específica enfocada en una acción concreta y un mensaje muy directo, ideal para campañas de marketing o promociones."
          }
        },
        {
          "@type": "Question",
          "name": "¿Ofrece AstracodeLAB mantenimiento web en Málaga?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, ofrecemos planes de mantenimiento y soporte web para empresas de Málaga. Esto incluye actualizaciones de seguridad, copias de seguridad, resolución de incidencias y modificaciones de contenido. Puedes consultar nuestros planes desde la sección de Mantenimiento y Soporte."
          }
        },
        {
          "@type": "Question",
          "name": "¿Mi página web se verá bien en móviles y otros dispositivos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Por supuesto, todas las páginas web que desarrollamos están completamente adaptadas para verse correctamente en móviles, tablets y ordenadores con diseño responsive. Esto es fundamental para el SEO y para la experiencia de tus usuarios."
          }
        },
        {
          "@type": "Question",
          "name": "¿Incluye SEO local para aparecer en búsquedas de Málaga?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, todas nuestras webs incluyen optimización SEO on-page básica."
          }
        },

        {
          "@type": "Question",
          "name": "¿Qué necesito para empezar mi proyecto web en Málaga?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Para empezar solo necesitas tener clara la idea de tu proyecto. En la reunión inicial definiremos juntos los objetivos, funcionalidades necesarias y el estilo visual. Si ya tienes logotipo, imágenes y textos, perfecto, pero si no los tienes podemos ayudarte a crearlos."
          }
        }
      ]
    },

    // 3. BreadcrumbList
    {
      "@type": "BreadcrumbList",
      "@id": "https://astracodelab.com/diseno-web-malaga#Breadcrumb",
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
          "name": "Diseño web Málaga",
          "item": "https://astracodelab.com/diseno-web-malaga"
        }
      ]
    },

    // 4. WebPage
    {
      "@type": "WebPage",
      "@id": "https://astracodelab.com/diseno-web-malaga#WebPage",
      "url": "https://astracodelab.com/diseno-web-malaga",
      "name": "Diseño Web en Málaga | Agencia Web Local - AstracodeLAB",
      "description": "Diseño y desarrollo web profesional en Málaga. Páginas web a medida para empresas y autónomos de Málaga. Presupuesto sin compromiso.",
      "inLanguage": "es-ES",
      "isPartOf": {
        "@id": "https://astracodelab.com#WebSite"
      },
      "breadcrumb": {
        "@id": "https://astracodelab.com/diseno-web-malaga#Breadcrumb"
      },
      "about": {
        "@id": "https://astracodelab.com/diseno-web-malaga#AstracodeLABMalaga"
      }
    }
  ]
};