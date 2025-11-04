export const schemaMantenimientoWeb = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "serviceType": "Mantenimiento y Soporte Web",
      "name": "Servicio de Mantenimiento y Soporte Web Profesional",
      "description": "Servicio profesional de mantenimiento y soporte web que mantiene tu sitio seguro, actualizado, rápido y optimizado. Incluye actualizaciones de seguridad, optimización de velocidad, soporte técnico y prevención de errores.",
      "url": "https://astracodelab.com/servicios/mantenimiento-web/",
      "provider": {
        "@type": "Organization",
        "@id": "https://astracodelab.com#AstracodeLAB",
        "name": "AstracodeLAB",
        "url": "https://astracodelab.com",
        "logo": "https://astracodelab.com/logoColor.svg",
        "areaServed": "ES",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "ES",
          "addressLocality": ["Barcelona", "Málaga", "Valencia"]
        },
        "sameAs": [
          "https://www.linkedin.com/company/astracodelab",
          "https://www.instagram.com/astracodelab"
        ]
      },
      "areaServed": {
        "@type": "Country",
        "name": "Spain"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": [
          "Empresas",
          "Negocios online",
          "Tiendas online",
          "Autónomos",
          "Startups",
          "Organizaciones"
        ],
        "name": "Empresas y negocios que necesitan mantener su web segura, actualizada y funcionando óptimamente"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios incluidos en mantenimiento web",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Actualización del sistema",
              "description": "Mantenemos tu software al día para garantizar seguridad y funcionalidad óptima."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Revisión de enlaces rotos",
              "description": "Buscamos y corregimos enlaces que ya no funcionan para mejorar navegación y evitar penalizaciones de buscadores."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Optimización de velocidad de carga",
              "description": "Ajustes técnicos para que tu web funcione con agilidad, mejorando experiencia de usuario y posicionamiento."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Soporte técnico prioritario",
              "description": "Acceso rápido a nuestro equipo con respuestas claras y soluciones concretas cuando necesitas ayuda."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Pequeñas modificaciones de contenido",
              "description": "Flexibilidad para realizar ajustes rápidos sin coste adicional."
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
          "name": "Mantenimiento web",
          "item": "https://astracodelab.com/servicios/mantenimiento-web/"
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Beneficios clave del mantenimiento y soporte web",
      "description": "Principales ventajas de contar con un servicio profesional de mantenimiento web",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Seguridad activa y constante",
          "description": "Actualizaciones de seguridad continuas para proteger tu web de amenazas digitales, ataques de hackers, malware y virus."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Velocidad optimizada",
          "description": "Revisiones de configuraciones internas para que tu sitio cargue con agilidad y ofrezca mejor experiencia de usuario."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Mejor visibilidad en buscadores",
          "description": "El mantenimiento periódico ayuda a que todo esté en orden técnicamente, repercutiendo directamente en el posicionamiento SEO."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Prevención de errores",
          "description": "Detección y corrección de problemas antes de que afecten a visitantes: enlaces rotos, funciones que fallan o comportamientos inusuales."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Compatibilidad tecnológica garantizada",
          "description": "Mantenemos tu sitio preparado para cambios en navegadores, sistemas y extensiones, evitando conflictos y asegurando funcionamiento fluido."
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Soporte técnico cercano y resolutivo",
          "description": "Equipo disponible para resolver problemas o realizar modificaciones con respuestas claras y directas, sin procesos engorrosos."
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Menos preocupaciones, más enfoque",
          "description": "Delegar el mantenimiento web en manos expertas te libera tiempo para dedicarte al desarrollo de tu negocio."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿El mantenimiento web mejora mi SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. Una web rápida, segura y sin errores técnicos tiene más posibilidades de aparecer bien posicionada en buscadores. Las acciones de mantenimiento web ayudan a que Google vea tu sitio como confiable y bien optimizado."
          }
        },
        {
          "@type": "Question",
          "name": "¿Necesito mantenimiento web si mi web es nueva?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, incluso más recomendable. Empezar con una base sólida evita que se acumulen errores o fallos con el tiempo. Además, mantiene el sitio en condiciones óptimas desde el inicio y alarga su vida útil."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué incluye el soporte técnico?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "El soporte técnico cubre la resolución de incidencias, la asistencia con el funcionamiento de tu web, respuesta a preguntas y pequeñas modificaciones o ajustes de contenido. Nuestro objetivo es que tengas un punto de contacto experto para cualquier necesidad que surja con tu plataforma digital."
          }
        }
      ]
    }
  ]
};