export const schemaLocalCastellon = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://astracodelab.com/diseno-web-castellon#AstracodeLABCastellon",
      "name": "AstracodeLAB - Diseño Web en Castellón",
      "alternateName": "Agencia de Diseño Web Castellón",
      "description": "Agencia de diseño y desarrollo web en Castellón. Creamos páginas web profesionales para empresas y autónomos de Castellón y provincia. Diseño responsive, SEO local y soporte personalizado.",
      "url": "https://astracodelab.com/diseno-web-castellon",
      "telephone": "+34-623-752-940",
      "priceRange": "700€",
      "image": "https://astracodelab.com/og_diseño_web_desarrollo_web_castellón.png",

      // CRÍTICO para SEO Local
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Castellón de la Plana",
        "addressRegion": "Comunidad Valenciana",
        "postalCode": "12001", 
        "addressCountry": "ES"
      },

      // Área de servicio específica
      "areaServed": [
        {
          "@type": "City",
          "name": "Castellón de la Plana"
        },
        {
          "@type": "State",
          "name": "Provincia de Castellón"
        },
        {
          "@type": "State",
          "name": "Comunidad Valenciana"
        }
      ],

   
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "39.9864", // Coordenadas de Castellón
        "longitude": "-0.0513"
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
        "name": "Servicios de diseño web en Castellón",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Diseño web para empresas de Castellón",
              "description": "Páginas web profesionales para empresas y negocios de Castellón",
              "areaServed": {
                "@type": "City",
                "name": "Castellón de la Plana"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Tiendas online Castellón",
              "description": "Desarrollo de ecommerce para comercios de Castellón",
              "areaServed": {
                "@type": "City",
                "name": "Castellón de la Plana"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO local Castellón",
              "description": "Posicionamiento web para negocios locales de Castellón",
              "areaServed": {
                "@type": "City",
                "name": "Castellón de la Plana"
              }
            }
          }
        ]
      },

    },
    {
      "@type": "FAQPage",
      "@id": "https://astracodelab.com/diseno-web-castellon#FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Ofrecéis servicios de diseño web en Castellón?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, AstracodeLAB ofrece servicios de diseño y desarrollo web en Castellón. Aunque nuestras oficinas están ubicadas en Barcelona, Málaga y Castellón, trabajamos con clientes de toda la Comunidad Valenciana y España. Nos adaptamos a reuniones presenciales en Castellón o videollamadas según tu preferencia."
          }
        },
        {
          "@type": "Question",
          "name": "¿Podemos reunirnos en persona en Castellón para hablar de mi proyecto web?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Por supuesto. Realizamos reuniones presenciales en Castellón para conocer tu proyecto en detalle. También ofrecemos videollamadas si prefieres un formato más flexible. Lo importante es entender tus necesidades y definir juntos los objetivos de tu página web."
          }
        },
        {
          "@type": "Question",
          "name": "¿Trabajáis con empresas y autónomos de Castellón?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, trabajamos con empresas, autónomos, startups y profesionales independientes de Castellón y toda la provincia. Tenemos experiencia en diversos sectores como turismo, hostelería, comercio local, servicios profesionales y sector industrial característico de la zona."
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
          "name": "¿Ofrece AstracodeLAB mantenimiento web en Castellón?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, ofrecemos planes de mantenimiento y soporte web para empresas de Castellón. Esto incluye actualizaciones de seguridad, copias de seguridad, resolución de incidencias y modificaciones de contenido. Puedes consultar nuestros planes desde la sección de Mantenimiento y Soporte."
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
          "name": "¿Incluye SEO local para aparecer en búsquedas de Castellón?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, todas nuestras webs incluyen optimización SEO on-page básica."
          }
        },

        {
          "@type": "Question",
          "name": "¿Qué necesito para empezar mi proyecto web en Castellón?",
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
      "@id": "https://astracodelab.com/diseno-web-castellon#Breadcrumb",
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
          "name": "Diseño web Castellón",
          "item": "https://astracodelab.com/diseno-web-castellon"
        }
      ]
    },

    // 4. WebPage
    {
      "@type": "WebPage",
      "@id": "https://astracodelab.com/diseno-web-castellon#WebPage",
      "url": "https://astracodelab.com/diseno-web-castellon",
      "name": "Diseño Web en Castellón | Agencia Web Local - AstracodeLAB",
      "description": "Diseño y desarrollo web profesional en Castellón. Páginas web a medida para empresas y autónomos de Castellón. Presupuesto sin compromiso.",
      "inLanguage": "es-ES",
      "isPartOf": {
        "@id": "https://astracodelab.com#WebSite"
      },
      "breadcrumb": {
        "@id": "https://astracodelab.com/diseno-web-castellon#Breadcrumb"
      },
      "about": {
        "@id": "https://astracodelab.com/diseno-web-castellon#AstracodeLABCastellon"
      }
    }
  ]
};