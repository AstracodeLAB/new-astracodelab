export const schemaAccesibilidadWeb = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "serviceType": "Diseño y Auditoría de Accesibilidad Web (WCAG)",
      "name": "Servicio de Creación de Páginas Web Accesibles",
      "description": "Servicio profesional para diseñar, desarrollar y auditar sitios web que cumplen con las Pautas de Accesibilidad para el Contenido Web (WCAG 2.2). Nos enfocamos en accesibilidad para navegación, contraste, lectores de pantalla y etiquetas ARIA.",
      "url": "https://astracodelab.com/servicios/accesibilidad-web/",
      "provider": {
        "@type": "Organization",
        "@id": "https://astracodelab.com#AstracodeLAB",
        "name": "AstracodeLAB",
        "url": "https://astracodelab.com",
        "logo": "https://astracodelab.com/logoColor.svg",
        "areaServed": "ES",
        "sameAs": ["https://www.linkedin.com/company/astracodelab", "https://www.instagram.com/astracodelab"]
      },
      "areaServed": {
        "@type": "Country",
        "name": "Spain"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "EUR",
        "price": "540.00",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "unitText": "Por Proyecto Base"
        },
        "availability": "https://schema.org/InStock",
        "url": "https://astracodelab.com/servicios/accesibilidad-web/",
        "validFrom": "2025-09-01"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": ["Entidades públicas", "Empresas", "ONGs", "Startups", "Autónomos", "Pymes"],
        "name": "Empresas y organizaciones que buscan cumplir con la normativa de accesibilidad (WCAG)"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios incluidos",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Optimización para navegación",
              "description": "Garantía de que toda la web es funcional sin el uso del ratón."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Soporte post-lanzamiento",
              "description": "Acompañamiento y asistencia durante el primer mes tras la publicación, con opciones de mantenimiento web continuo para asegurar la accesibilidad a largo plazo."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Auditoría de Contraste de colores y Tipografía accesible",
              "description": "Selección de combinaciones visuales que aseguren la legibilidad para todos."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Estructura semántica (Encabezados y Listas)",
              "description": "Uso adecuado de encabezados y listas para una mejor comprensión por parte de usuarios y herramientas."
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
          "name": "Accesibilidad web",
          "item": "https://astracodelab.com/servicios/accesibilidad-web/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Qué son las WCAG y por qué son importantes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Las WCAG (Web Content Accessibility Guidelines) son un conjunto de directrices internacionales desarrolladas por el W3C (World Wide Web Consortium) para hacer el contenido web más accesible para personas con discapacidad. Son importantes porque proporcionan un estándar reconocido que asegura que tu web accesible sea usable para todos y te ayuda a cumplir con posibles requisitos legales."
          }
        },
        {
          "@type": "Question",
          "name": "¿La accesibilidad web solo beneficia a las personas con discapacidad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Aunque están diseñadas pensando en personas con discapacidad, las prácticas de accesibilidad web benefician a todos los usuarios. Por ejemplo, una buena estructura de encabezados ayuda a los lectores de pantalla, pero también mejora la legibilidad para cualquier persona. La optimización para teclado es clave para algunos usuarios con movilidad reducida, pero también útil para usuarios avanzados."
          }
        },
        {
          "@type": "Question",
          "name": "¿Una web accesible mejora mi posicionamiento SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. Muchos principios de la accesibilidad web (como la buena estructura de encabezados, el texto alternativo para imágenes, la navegación clara, la velocidad de carga y el diseño responsive) son también factores importantes para el SEO. Una web que Google considera accesible suele ser mejor ranqueada."
          }
        }
      ]
    }
  ]
}