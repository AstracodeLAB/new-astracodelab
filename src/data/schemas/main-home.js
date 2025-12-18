export const schemaMainHome = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://astracodelab.com/#organization",
      "name": "AstracodeLAB",
      "alternateName": ["Astracode LAB", "Astracode", "AstracodeLab","astracodelab, astracodeLAB"],
      "url": "https://astracodelab.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://astracodelab.com/logoColor.svg",
        "width": 200,
        "height": 60
      },
      "image": "https://astracodelab.com/logoColor.svg",
      "description": "Agencia de diseño y desarrollo web especializada en crear páginas web a medida, tiendas online y landing pages. Equipo 100% femenino con sede en Castellón, Barcelona y Málaga. Sin plantillas genéricas, solo diseño personalizado.",
      "slogan": "Tu página web profesional, diseñada a medida",
      "foundingDate": "2023",
      "founder": [
        {
          "@type": "Person",
          "name": "Aida Blaya Balaguer"
        },
        {
          "@type": "Person",
          "name": "Lourdes Juárez Porto"
        },
        {
          "@type": "Person",
          "name": "Maria Robles"
        }
      ],
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "minValue": 3,
        "maxValue": 3
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "España"
        },
        {
          "@type": "City",
          "name": "Castellón de la Plana"
        },
        {
          "@type": "City",
          "name": "Barcelona"
        },
        {
          "@type": "City",
          "name": "Málaga"
        },
        {
          "@type": "City",
          "name": "Valencia"
        },
        {
          "@type": "City",
          "name": "Alicante"
        },
        {
          "@type": "City",
          "name": "Granada"
        },
        {
          "@type": "City",
          "name": "Madrid"
        },
        {
          "@type": "City",
          "name": "Orense"
        },
        {
          "@type": "City",
          "name": "Oviedo"
        },
        {
          "@type": "City",
          "name": "Sevilla"
        },
        {
          "@type": "City",
          "name": "Zaragoza"
        }
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+34-623-752-940",
          "contactType": "customer service",
          "availableLanguage": ["Spanish", "Catalan", "English"],
          "areaServed": "ES"
        },
        {
          "@type": "ContactPoint",
          "email": "info@astracodelab.com",
          "contactType": "sales",
          "availableLanguage": ["Spanish", "Catalan", "English"]
        }
      ],
      "sameAs": [
        "https://www.linkedin.com/company/astracodelab",
        "https://www.instagram.com/astracodelab",
        "https://www.facebook.com/astracodelab",
        "https://www.threads.net/@astracodelab",
        "https://www.sortlist.es/agency/astracodelab",
        "https://www.goodfirms.co/company/astracodelab",
        "https://castellon-de-la-plana.infoisinfo.es/ficha/astracodelab/3785787",
        "https://clutch.co/profile/astracodelab"

      ],
      "knowsAbout": [
        "Diseño web",
        "Desarrollo web",
        "Astro.js",
        "React",
        "WordPress",
        "Tiendas online",
        "E-commerce",
        "Landing pages",
        "SEO",
        "Accesibilidad web",
        "WCAG",
        "Diseño responsive",
        "UX/UI"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Verificación",
          "name": "Agencia verificada en Sortlist"
        }
      ]
    },

    {
      "@type": "ProfessionalService",
      "@id": "https://astracodelab.com/#localbusiness",
      "name": "AstracodeLAB - Agencia de Diseño Web en Castellón",
      "image": "https://astracodelab.com/logoColor.svg",
      "url": "https://astracodelab.com",
      "telephone": "+34-623-752-940",
      "email": "info@astracodelab.com",
      "priceRange": "€€",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Paseo Morella, 39",
        "addressLocality": "Castellón de la Plana",
        "addressRegion": "Castellón",
        "postalCode": "12002",
        "addressCountry": "ES"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 39.9864,
        "longitude": -0.0513
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "12",
        "bestRating": "5",
        "worstRating": "1"
      },
      "parentOrganization": {
        "@id": "https://astracodelab.com/#organization"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://astracodelab.com/#website",
      "url": "https://astracodelab.com",
      "name": "AstracodeLAB",
      "description": "Agencia de diseño y desarrollo web en Castellón, Barcelona y Málaga. Creamos páginas web profesionales a medida para empresas y autónomos.",
      "publisher": {
        "@id": "https://astracodelab.com/#organization"
      },
      "inLanguage": "es-ES",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://astracodelab.com/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://astracodelab.com/#webpage",
      "url": "https://astracodelab.com",
      "name": "Diseño Web Profesional a Medida | AstracodeLAB",
      "description": "Agencia de diseño y desarrollo web en Castellón, Barcelona y Málaga. Creamos webs corporativas, tiendas online y landing pages sin plantillas genéricas. Consultoría gratuita.",
      "isPartOf": {
        "@id": "https://astracodelab.com/#website"
      },
      "about": {
        "@id": "https://astracodelab.com/#organization"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://astracodelab.com/logoColor.svg"
      },
      "datePublished": "2023-01-01",
      "dateModified": "2025-12-16",
      "inLanguage": "es-ES",
      "breadcrumb": {
        "@id": "https://astracodelab.com/#breadcrumb"
      },
      "potentialAction": [
        {
          "@type": "ReadAction",
          "target": ["https://astracodelab.com"]
        },
        {
          "@type": "ContactAction",
          "target": "https://astracodelab.com/contacto/"
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://astracodelab.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://astracodelab.com/"
        }
      ]
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://astracodelab.com/#services",
      "name": "Servicios de Diseño y Desarrollo Web",
      "description": "Catálogo completo de servicios de diseño web, desarrollo y mantenimiento ofrecidos por AstracodeLAB",
      "provider": {
        "@id": "https://astracodelab.com/#organization"
      },
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://astracodelab.com/servicios/landing-page/#service",
            "serviceType": "Landing Page",
            "name": "Diseño de Landing Pages",
            "description": "Landing pages optimizadas para conversión con diseño atractivo y llamadas a la acción efectivas. Ideales para campañas de marketing y captación de leads.",
            "url": "https://astracodelab.com/servicios/landing-page/",
            "provider": {
              "@id": "https://astracodelab.com/#organization"
            },
            "areaServed": {
              "@type": "Country",
              "name": "España"
            },
            "offers": {
              "@type": "Offer",
              "price": "500.00",
              "priceCurrency": "EUR",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "500.00",
                "priceCurrency": "EUR",
                "unitText": "desde"
              },
              "availability": "https://schema.org/InStock"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://astracodelab.com/servicios/web-corporativa/#service",
            "serviceType": "Web Corporativa",
            "name": "Diseño de Páginas Web Corporativas",
            "description": "Páginas web profesionales para empresas y autónomos. Diseño a medida, responsive y optimizado para SEO. Incluye formularios de contacto, integración con redes sociales y panel de gestión.",
            "url": "https://astracodelab.com/servicios/web-corporativa/",
            "provider": {
              "@id": "https://astracodelab.com/#organization"
            },
            "areaServed": {
              "@type": "Country",
              "name": "España"
            },
            "offers": {
              "@type": "Offer",
              "price": "900.00",
              "priceCurrency": "EUR",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "900.00",
                "priceCurrency": "EUR",
                "unitText": "desde"
              },
              "availability": "https://schema.org/InStock"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://astracodelab.com/servicios/tienda-online/#service",
            "serviceType": "E-commerce",
            "name": "Desarrollo de Tiendas Online",
            "description": "Tiendas online completas con carrito de compra, pasarela de pago, gestión de inventario y diseño personalizado. Soluciones e-commerce para vender productos y servicios online.",
            "url": "https://astracodelab.com/servicios/tienda-online/",
            "provider": {
              "@id": "https://astracodelab.com/#organization"
            },
            "areaServed": {
              "@type": "Country",
              "name": "España"
            },
            "offers": {
              "@type": "Offer",
              "price": "1400.00",
              "priceCurrency": "EUR",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "1400.00",
                "priceCurrency": "EUR",
                "unitText": "desde"
              },
              "availability": "https://schema.org/InStock"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://astracodelab.com/servicios/redisenio-web/#service",
            "serviceType": "Rediseño Web",
            "name": "Rediseño de Páginas Web",
            "description": "Renovación completa de tu web existente. Actualizamos el diseño, mejoramos la experiencia de usuario, optimizamos la velocidad y adaptamos a las últimas tendencias.",
            "url": "https://astracodelab.com/servicios/redisenio-web/",
            "provider": {
              "@id": "https://astracodelab.com/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://astracodelab.com/servicios/web-multilingue/#service",
            "serviceType": "Web Multilingüe",
            "name": "Desarrollo de Webs Multilingües",
            "description": "Páginas web en múltiples idiomas con gestión de traducciones, SEO internacional y adaptación cultural para alcanzar mercados globales.",
            "url": "https://astracodelab.com/servicios/web-multilingue/",
            "provider": {
              "@id": "https://astracodelab.com/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://astracodelab.com/servicios/sistemas-de-reservas/#service",
            "serviceType": "Sistemas de Reservas",
            "name": "Integración de Sistemas de Reservas Online",
            "description": "Sistemas de reservas y citas online integrados en tu web. Calendarios sincronizados, confirmaciones automáticas y gestión de disponibilidad.",
            "url": "https://astracodelab.com/servicios/sistemas-de-reservas/",
            "provider": {
              "@id": "https://astracodelab.com/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://astracodelab.com/servicios/accesibilidad-web/#service",
            "serviceType": "Accesibilidad Web WCAG",
            "name": "Diseño y Auditoría de Accesibilidad Web",
            "description": "Webs accesibles que cumplen con las pautas WCAG 2.2. Auditorías de accesibilidad, optimización para lectores de pantalla, contraste y navegación por teclado.",
            "url": "https://astracodelab.com/servicios/accesibilidad-web/",
            "provider": {
              "@id": "https://astracodelab.com/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://astracodelab.com/servicios/cartas-digitales-restaurantes/#service",
            "serviceType": "Cartas Digitales",
            "name": "Cartas Digitales para Restaurantes",
            "description": "Menús digitales interactivos con código QR para restaurantes, bares y cafeterías. Fácil actualización de platos y precios sin reimprimir.",
            "url": "https://astracodelab.com/servicios/cartas-digitales-restaurantes/",
            "provider": {
              "@id": "https://astracodelab.com/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://astracodelab.com/servicios/mantenimiento-web/#service",
            "serviceType": "Mantenimiento Web",
            "name": "Servicio de Mantenimiento Web",
            "description": "Mantenimiento técnico continuo: actualizaciones de seguridad, copias de seguridad, optimización de rendimiento y soporte técnico.",
            "url": "https://astracodelab.com/servicios/mantenimiento-web/",
            "provider": {
              "@id": "https://astracodelab.com/#organization"
            }
          }
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://astracodelab.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Qué diferencia hay entre \"web corporativa\" y \"landing page\"?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Una web corporativa es un sitio completo para reflejar tu imagen de tu marca, con secciones como \"Quienes somos\", \"Servicios\" o \"Contacto\", y está optimizada para tener un diseño web elegante y profesional. Una landing page, en cambio, es una sola completa específica enfocada en una acción concreta y un mensaje muy directo."
          }
        },
        {
          "@type": "Question",
          "name": "¿Ofrece AstracodeLAB soporte y mantenimiento web después de la entrega?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. Disponemos de planes de mantenimiento web, puedes consultarlos desde nuestra sección de Mantenimiento y Soporte."
          }
        },
        {
          "@type": "Question",
          "name": "¿Mi página web se verá bien en móviles y otros dispositivos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Por supuesto, la página web estará adaptada para que se vea correctamente en móviles, tablets y ordenadores (diseño responsive)."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuántos productos puedo subir y gestionar yo mismo? ¿Me enseñaréis?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Podrás incluir productos ilimitados. Al finalizar el proyecto te proporcionaremos un manual para que puedas gestionar tu web. Si por el contrario prefieres delegar esta tarea, nuestro equipo puede encargarse de hacer esta gestión por ti."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuál es la diferencia entre un rediseño y una web nueva?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Un rediseño web reaprovecha la estructura y contenidos existentes, focalizándose en renovar la estética y la experiencia de usuario. Una web nueva implica la creación desde cero de todo el sitio."
          }
        },
        {
          "@type": "Question",
          "name": "¿Podéis rediseñar solo el logotipo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, podemos rediseñar únicamente el logotipo. Nos adaptamos siempre a tus necesidades."
          }
        },
        {
          "@type": "Question",
          "name": "¿Quién escribirá los textos de la web? ¿Me debo encargar de enviaros las imágenes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lo ideal es que nos facilites tus propios textos e imágenes para reflejar al máximo la esencia de tu marca. No obstante, si lo prefieres, nuestro equipo puede encargarse de redactar los textos."
          }
        },
        {
          "@type": "Question",
          "name": "¿El precio incluye IVA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "En la página web se muestran los precios sin IVA para facilitar la comparación de precios. En la factura final se aplicará el 21% de IVA según lo establecido por la legislación española."
          }
        },
        {
          "@type": "Question",
          "name": "¿Seré el propietario de mi web?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. Al completar el pago, eres propietario de tu página web, sin licencias ocultas ni permanencias."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué tipo de webs hacemos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "En AstracodeLAB desarrollamos soluciones digitales adaptadas a la meta de cada negocio. Nos especializamos en: webs corporativas, webs a medida, portfolios profesionales, tiendas online (e-commerce), y rediseño y renovación web. Para más detalles, visita nuestra sección de Diseño y Desarrollo Web."
          }
        },
        {
          "@type": "Question",
          "name": "¿Dónde presta sus servicios AstracodeLAB?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AstracodeLAB está ubicada en Barcelona, Castellón y Málaga, pero presta servicios para toda España."
          }
        }
      ]
    },
    {
      "@type": "AggregateRating",
      "@id": "https://astracodelab.com/#aggregaterating",
      "itemReviewed": {
        "@id": "https://astracodelab.com/#organization"
      },
      "ratingValue": "5.0",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "5",
      "reviewCount": "5"
    },
    {
      "@type": "Review",
      "@id": "https://astracodelab.com/#review1",
      "itemReviewed": {
        "@id": "https://astracodelab.com/#organization"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Helena Heras"
      },
      "datePublished": "2025-12-13",
      "reviewBody": "La experiencia con Astracodelab está siendo fantástica. Acompañan tu proyecto con una gran atención, flexibilidad, disponibilidad, haciendo propuestas interesantes y buscando responder de la mejor manera a las exigencias del proyecto. El hecho de que propongan un servicio de accesibilidad web me parece algo fundamental."
    },
    {
      "@type": "Review",
      "@id": "https://astracodelab.com/#review2",
      "itemReviewed": {
        "@id": "https://astracodelab.com/#organization"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Thais Hidalgo"
      },
      "datePublished": "2025-12-09",
      "reviewBody": "Las chicas son estupendas. Atentas y profesionales. Adaptan perfectamente tus ideas a la web. 100% recomendables!!"
    },
    {
      "@type": "Review",
      "@id": "https://astracodelab.com/#review3",
      "itemReviewed": {
        "@id": "https://astracodelab.com/#organization"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Elisa Martin-Caro Zapardiel"
      },
      "datePublished": "2025-08-16",
      "reviewBody": "Ha sido genial trabajar con el equipo AstraCodeLab. Desde el principio han mostrado una gran profesionalidad y han cumplido con todo lo acordado y plazos propuestos. Su implicación en el proyecto ha hecho obtener un diseño de la web maravilloso. Nos encanta el resultado. Sin duda cuento con ellas para futuros trabajos."
    },
    {
      "@type": "Review",
      "@id": "https://astracodelab.com/#review4",
      "itemReviewed": {
        "@id": "https://astracodelab.com/#organization"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Alex N"
      },
      "datePublished": "2025-06-16",
      "reviewBody": "Muy satisfecho con el resultado obtenido, la web que me han diseñado funciona estupendamente y a un precio muy competitivo. El trato recibido estupendo, no se puede ser más profesional."
    },
    {
      "@type": "Review",
      "@id": "https://astracodelab.com/#review5",
      "itemReviewed": {
        "@id": "https://astracodelab.com/#organization"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Roji M"
      },
      "datePublished": "2025-06-16",
      "reviewBody": "Muy contenta con el trabajo de esta empresa. Les di el contacto para un familiar y ha quedado encantado. Estuvieron en todo momento en contacto, supieron plasmar sus ideas y, además, aportaron mucha creatividad al proyecto."
    },

    {
      "@type": "HowTo",
      "@id": "https://astracodelab.com/#howto",
      "name": "Cómo trabajamos en AstracodeLAB: Proceso de creación de tu web",
      "description": "Nuestro método de trabajo en 4 fases para crear tu página web profesional",
      "totalTime": "P4W",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "EUR",
        "minValue": "500",
        "maxValue": "5000"
      },
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Reunión inicial",
          "text": "Estudiamos tu proyecto. Hacemos una primera toma de contacto por la vía que prefieras, videollamada o llamada, donde nos cuentas tus necesidades y objetivos.",
          "url": "https://astracodelab.com/#proceso"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Análisis y toma de requisitos",
          "text": "Recopilamos ejemplos, funcionalidades imprescindibles y contenido disponible. Analizamos tu mercado y las búsquedas clave para definir una arquitectura enfocada al usuario. Creamos un prototipo en el que podrás ajustar colores, tipografía y jerarquía hasta que digas «ahora sí».",
          "url": "https://astracodelab.com/#proceso"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Desarrollo ágil",
          "text": "Convertimos el diseño en código accesible y disponible para todos los dispositivos.",
          "url": "https://astracodelab.com/#proceso"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Revisión, lanzamiento y soporte",
          "text": "Probamos rendimiento, seguridad y usabilidad; lanzamos tu web y te acompañamos 30 días para ajustes y dudas. Si quieres, también podemos ofrecerte planes de mantenimiento continuos.",
          "url": "https://astracodelab.com/#proceso"
        }
      ]
    },
    {
      "@type": "WebPage",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".hero-title", ".hero-description", ".services-intro"]
      },
      "url": "https://astracodelab.com"
    }
  ]
};