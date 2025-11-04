export const schemaSistemasReservas = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "serviceType": "Sistemas de Reservas Online",
      "name": "Servicio de Implementación de Sistemas de Reservas Online",
      "description": "Servicio profesional de implementación de sistemas de reservas online a medida que automatizan la gestión de citas, reservas y servicios. Incluye configuración, integración de pagos, automatización de recordatorios y sincronización con calendarios.",
      "url": "https://astracodelab.com/servicios/sistemas-de-reservas/",
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
          "Gimnasios",
          "Centros de belleza",
          "Clínicas de salud",
          "Consultorías",
          "Instructores",
          "Peluquerías",
          "Servicios de alquiler",
          "Abogados",
          "Negocios con citas"
        ],
        "name": "Negocios que gestionan citas, clases, eventos o servicios con disponibilidad limitada"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios incluidos en sistemas de reservas",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Implementación y configuración del sistema",
              "description": "Instalación y personalización de la plataforma de reservas elegida adaptada a tu negocio."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Diseño de interfaz de reserva personalizada",
              "description": "Integración visual y funcional en tu web para una experiencia de usuario fluida."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Configuración de servicios, horarios y recursos",
              "description": "Adaptación de la disponibilidad y oferta a las necesidades específicas de tu negocio."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Integración de pasarelas de pago seguras",
              "description": "Conexión con los principales métodos de pago online para facilitar las transacciones."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Automatización de confirmaciones y recordatorios",
              "description": "Emails y/o SMS automáticos para clientes y administradores."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sincronización con calendarios",
              "description": "Integración con Google Calendar y Outlook para una gestión unificada de tus citas y disponibilidades."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Formación detallada para la gestión del sistema",
              "description": "Te capacitamos para que administres tu sistema de reservas de forma autónoma."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Optimización para dispositivos móviles (Responsive)",
              "description": "Tus clientes podrán reservar cómodamente desde cualquier smartphone o tablet."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Soporte Post-Implementación",
              "description": "Acompañamiento y asistencia durante el primer mes tras la puesta en marcha."
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
          "name": "Funcionalidades y optimización web",
          "item": "https://astracodelab.com/servicios/funcionalidades-optimizacion-web/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Sistemas de reservas",
          "item": "https://astracodelab.com/servicios/sistemas-de-reservas/"
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Beneficios clave de un sistema de reservas profesional",
      "description": "Principales ventajas de implementar un sistema de reservas online",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Disponibilidad continua",
          "description": "Tu sistema de reservas nunca duerme. Tus clientes pueden reservar citas, clases o servicios en cualquier momento, incluso fuera de tu horario laboral, aumentando las oportunidades de venta."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Menos tareas manuales, más tiempo para lo importante",
          "description": "Automatiza la gestión de citas, pagos y confirmaciones. Tu equipo liberará horas de trabajo administrativo para dedicar a tareas más estratégicas."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Una experiencia de usuario más fluida",
          "description": "Ofrecer una forma fácil, rápida y cómoda de reservar genera confianza y satisfacción en tus clientes."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Reducción de ausencias y cancelaciones inesperadas",
          "description": "Los recordatorios automáticos (emails, SMS) ayudan a tus clientes a no olvidar sus citas y reducen drásticamente las ausencias de última hora."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Recopilación de datos estratégicos",
          "description": "Accede a información valiosa sobre preferencias de clientes, horarios de mayor demanda y servicios más populares para optimizar tu oferta y estrategias de marketing."
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Total flexibilidad según tu forma de trabajar",
          "description": "Configura horarios, disponibilidades, precios y servicios. El sistema de reservas se adapta a ti, no al revés."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Qué tipos de negocios se benefician más de un sistema de reservas online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Un sistema de reservas online es ideal para cualquier negocio que gestione citas, clases, eventos o servicios con disponibilidad limitada. Esto incluye gimnasios, centros de belleza, clínicas de salud, consultorías, instructores, peluquerías, servicios de alquiler, abogados, etc."
          }
        },
        {
          "@type": "Question",
          "name": "¿Es un sistema de reservas seguro para los pagos online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. Implementamos pasarelas de pago seguras. Esto garantiza que los datos financieros de tus clientes estén siempre protegidos durante el proceso de reserva y pago."
          }
        },
        {
          "@type": "Question",
          "name": "¿Puedo gestionar las disponibilidades y horarios de mi personal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. La mayoría de los sistemas de reservas profesionales permiten configurar horarios individuales para cada miembro de tu equipo, así como gestionar sus servicios, días libres y capacidades. Esto te da un control total sobre tu agenda y recursos."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué ocurre si un cliente cancela o necesita reprogramar una cita?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Los sistemas de reservas online incluyen funcionalidades para que los clientes puedan cancelar o reprogramar sus citas de forma autónoma (dentro de las políticas que establezcas), lo que reduce el trabajo administrativo para tu equipo y mejora la satisfacción del cliente."
          }
        },
        {
          "@type": "Question",
          "name": "¿Puedo ofrecer diferentes tipos de servicios o clases con precios variados?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, los sistemas de reservas te permiten configurar un catálogo ilimitado de servicios, clases o eventos, cada uno con sus propias duraciones, precios, disponibilidades y descripciones, ofreciendo total flexibilidad a tu negocio."
          }
        }
      ]
    }
  ]
};