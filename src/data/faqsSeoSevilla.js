export const schemaLocalSevilla = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://astracodelab.com/diseno-web-sevilla#AstracodeLABSevilla ",
      "name": "AstracodeLAB - Diseño Web en Sevilla ",
      "alternateName": "Agencia de Diseño Web Sevilla ",
      "description": "Agencia de diseño y desarrollo web en Sevilla . Creamos páginas web profesionales para empresas y autónomos de Sevilla  y provincia. Diseño responsive, SEO local y soporte personalizado.",
      "url": "https://astracodelab.com/diseno-web-sevilla",
      "telephone": "+34-623-752-940",
      "priceRange": "700€",
      "image": "https://astracodelab.com/sevilla.png",

      // CRÍTICO para SEO Local
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sevilla ",
        "addressRegion": "Aragón",
        "postalCode": "50001",
        "addressCountry": "ES"
      },

      // Área de servicio específica
      "areaServed": [
        {
          "@type": "City",
          "name": "Sevilla "
        },
        {
          "@type": "State",
          "name": "Provincia de Sevilla "
        },
        {
          "@type": "State",
          "name": "Aragón"
        }
      ],

   
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "40.4168",
        "longitude": "-3.7038"
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
        "name": "Servicios de diseño web en Sevilla ",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Diseño web para empresas de Sevilla ",
              "description": "Páginas web profesionales para empresas y negocios de Sevilla ",
              "areaServed": {
                "@type": "City",
                "name": "Sevilla "
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Tiendas online Sevilla ",
              "description": "Desarrollo de ecommerce para comercios de Sevilla ",
              "areaServed": {
                "@type": "City",
                "name": "Sevilla "
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO local Sevilla ",
              "description": "Posicionamiento web para negocios locales de Sevilla ",
              "areaServed": {
                "@type": "City",
                "name": "Sevilla "
              }
            }
          }
        ]
      },

    },
    {
      "@type": "FAQPage",
      "@id": "https://astracodelab.com/diseno-web-sevilla#FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Ofrecéis servicios de diseño web en Sevilla ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, AstracodeLAB ofrece servicios de diseño y desarrollo web en Sevilla . Aunque nuestras oficinas están ubicadas en Barcelona, Málaga y Castellón, trabajamos con clientes de toda Aragón y España. Nos adaptamos a reuniones presenciales en Sevilla  o videollamadas según tu preferencia."
          }
        },
        {
          "@type": "Question",
          "name": "¿Trabajáis con empresas y autónomos de Sevilla ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, trabajamos con empresas, autónomos, startups y profesionales independientes de Sevilla  y toda la provincia. Tenemos experiencia en diversos sectores como turismo, hostelería, comercio local, servicios profesionales y sector industrial característico de la zona."
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
          "name": "¿Ofrece AstracodeLAB mantenimiento web en Sevilla ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, ofrecemos planes de mantenimiento y soporte web para empresas de Sevilla . Esto incluye actualizaciones de seguridad, copias de seguridad, resolución de incidencias y modificaciones de contenido. Puedes consultar nuestros planes desde la sección de Mantenimiento y Soporte."
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
          "name": "¿Incluye SEO local para aparecer en búsquedas de Sevilla ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, todas nuestras webs incluyen optimización SEO on-page básica."
          }
        },

        {
          "@type": "Question",
          "name": "¿Qué necesito para empezar mi proyecto web en Sevilla ?",
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
      "@id": "https://astracodelab.com/diseno-web-sevilla#Breadcrumb",
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
          "name": "Diseño web Sevilla ",
          "item": "https://astracodelab.com/diseno-web-sevilla"
        }
      ]
    },

    // 4. WebPage
    {
      "@type": "WebPage",
      "@id": "https://astracodelab.com/diseno-web-sevilla#WebPage",
      "url": "https://astracodelab.com/diseno-web-sevilla",
      "name": "Diseño Web en Sevilla  | Agencia Web Local - AstracodeLAB",
      "description": "Diseño y desarrollo web profesional en Sevilla . Páginas web a medida para empresas y autónomos de Sevilla . Presupuesto sin compromiso.",
      "inLanguage": "es-ES",
      "isPartOf": {
        "@id": "https://astracodelab.com#WebSite"
      },
      "breadcrumb": {
        "@id": "https://astracodelab.com/diseno-web-sevilla#Breadcrumb"
      },
      "about": {
        "@id": "https://astracodelab.com/diseno-web-sevilla#AstracodeLABSevilla "
      }
    }
  ]
};