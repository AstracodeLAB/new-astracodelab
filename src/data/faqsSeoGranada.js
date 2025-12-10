export const schemaLocalGranada= {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://astracodelab.com/diseno-web-granada#AstracodeLABGranada",
      "name": "AstracodeLAB - Diseño Web en Granada",
      "alternateName": "Agencia de Diseño Web Granada",
      "description": "Agencia de diseño y desarrollo web en Granada. Creamos páginas web profesionales para empresas y autónomos de Granada y provincia. Diseño responsive, SEO local y soporte personalizado.",
      "url": "https://astracodelab.com/diseno-web-granada",
      "telephone": "+34-623-752-940",
      "priceRange": "700€",
      "image": "https://astracodelab.com/granada.png",

      // CRÍTICO para SEO Local
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Granada",
        "addressRegion": "Aragón",
        "postalCode": "50001",
        "addressCountry": "ES"
      },

      // Área de servicio específica
      "areaServed": [
        {
          "@type": "City",
          "name": "Granada"
        },
        {
          "@type": "State",
          "name": "Provincia de Granada"
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
        "name": "Servicios de diseño web en Granada",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Diseño web para empresas de Granada",
              "description": "Páginas web profesionales para empresas y negocios de Granada",
              "areaServed": {
                "@type": "City",
                "name": "Granada"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Tiendas online Granada",
              "description": "Desarrollo de ecommerce para comercios de Granada",
              "areaServed": {
                "@type": "City",
                "name": "Granada"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO local Granada",
              "description": "Posicionamiento web para negocios locales de Granada",
              "areaServed": {
                "@type": "City",
                "name": "Granada"
              }
            }
          }
        ]
      },

    },
    {
      "@type": "FAQPage",
      "@id": "https://astracodelab.com/diseno-web-granada#FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Ofrecéis servicios de diseño web en Granada?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, AstracodeLAB ofrece servicios de diseño y desarrollo web en Granada. Aunque nuestras oficinas están ubicadas en Barcelona, Málaga y Castellón, trabajamos con clientes de toda Aragón y España. Nos adaptamos a reuniones presenciales en Granada o videollamadas según tu preferencia."
          }
        },
        {
          "@type": "Question",
          "name": "¿Trabajáis con empresas y autónomos de Granada?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, trabajamos con empresas, autónomos, startups y profesionales independientes de Granada y toda la provincia. Tenemos experiencia en diversos sectores como turismo, hostelería, comercio local, servicios profesionales y sector industrial característico de la zona."
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
          "name": "¿Ofrece AstracodeLAB mantenimiento web en Granada?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, ofrecemos planes de mantenimiento y soporte web para empresas de Granada. Esto incluye actualizaciones de seguridad, copias de seguridad, resolución de incidencias y modificaciones de contenido. Puedes consultar nuestros planes desde la sección de Mantenimiento y Soporte."
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
          "name": "¿Incluye SEO local para aparecer en búsquedas de Granada?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, todas nuestras webs incluyen optimización SEO on-page básica."
          }
        },

        {
          "@type": "Question",
          "name": "¿Qué necesito para empezar mi proyecto web en Granada?",
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
      "@id": "https://astracodelab.com/diseno-web-granada#Breadcrumb",
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
          "name": "Diseño web Granada",
          "item": "https://astracodelab.com/diseno-web-granada"
        }
      ]
    },

    // 4. WebPage
    {
      "@type": "WebPage",
      "@id": "https://astracodelab.com/diseno-web-granada#WebPage",
      "url": "https://astracodelab.com/diseno-web-granada",
      "name": "Diseño Web en Granada | Agencia Web Local - AstracodeLAB",
      "description": "Diseño y desarrollo web profesional en Granada. Páginas web a medida para empresas y autónomos de Granada. Presupuesto sin compromiso.",
      "inLanguage": "es-ES",
      "isPartOf": {
        "@id": "https://astracodelab.com#WebSite"
      },
      "breadcrumb": {
        "@id": "https://astracodelab.com/diseno-web-granada#Breadcrumb"
      },
      "about": {
        "@id": "https://astracodelab.com/diseno-web-granada#AstracodeLABGranada"
      }
    }
  ]
};