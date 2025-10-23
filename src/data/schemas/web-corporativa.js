export const schemaWebCorporativa = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "serviceType": "Diseño de Web Corporativa",
      "name": "Servicio de Diseño y Desarrollo de Web Corporativa Profesional",
      "description": "Servicio profesional de diseño y desarrollo de webs corporativas a medida que reflejan la esencia de tu marca y comunican tu mensaje con claridad. Incluye diseño exclusivo, estructura optimizada, diseño responsive e integración de funcionalidades clave.",
      "url": "https://astracodelab.com/servicios/web-corporativa/",
      "provider": {
        "@type": "Organization",
        "@id": "https://astracodelab.com#AstracodeLAB",
        "name": "AstracodeLAB",
        "url": "https://astracodelab.com",
        "logo": "https://astracodelab.com/assets/brand/logo.svg",
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
          "Corporaciones",
          "Pymes",
          "Organizaciones",
          "Negocios B2B",
          "Startups"
        ],
        "name": "Empresas y organizaciones que buscan reforzar su presencia digital profesional"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios incluidos en web corporativa",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Diseño exclusivo y personalizado",
              "description": "Tu web corporativa reflejará la esencia de tu marca con un diseño único, sin plantillas."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Estructura web optimizada",
              "description": "Navegación intuitiva y arquitectura de contenidos pensada para el usuario y los motores de búsqueda."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Diseño responsive multidispositivo",
              "description": "Tu web corporativa se verá y funcionará perfectamente en ordenadores, tablets y móviles."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Integración de funcionalidades clave",
              "description": "Formularios de contacto, mapas interactivos y más funcionalidades según tus necesidades."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Soporte post-lanzamiento",
              "description": "Acompañamiento y asistencia durante el primer mes tras la publicación de tu web, con planes de mantenimiento continuo disponibles."
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
          "name": "Diseño y desarrollo web",
          "item": "https://astracodelab.com/servicios/diseno-web/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Web corporativa",
          "item": "https://astracodelab.com/servicios/web-corporativa/"
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Importancia de una web corporativa estratégica",
      "description": "Principales beneficios de contar con una web corporativa profesional",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Refuerza la credibilidad y confianza",
          "description": "Una web corporativa profesional transmite seriedad, estabilidad y confianza. Un sitio bien estructurado y con diseño cuidado es sinónimo de profesionalidad."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Genera oportunidades de negocio",
          "description": "Una web corporativa efectiva está diseñada para guiar al visitante hacia la acción, convirtiendo visitas en leads cualificados."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Soporte al cliente y comunicación eficaz",
          "description": "Permite integrar funcionalidades de soporte, secciones de FAQ o formularios de contacto que mejoran la experiencia del usuario y optimizan la gestión de consultas."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Ventajas de una web corporativa profesional frente a redes sociales",
      "description": "Por qué tu web corporativa es el centro de tu estrategia digital",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Autonomía y Control",
          "description": "En tu propia página web, tú decides la estructura, el estilo y la narrativa, sin depender de constantes cambios de algoritmo de terceros o limitaciones de formato."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "SEO y posicionamiento",
          "description": "Tu sitio web es la base de tu estrategia SEO. Una web bien optimizada es crucial para aparecer en las búsquedas de tus clientes potenciales."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Credibilidad Inmediata",
          "description": "Un dominio propio y un sitio web corporativo de calidad transmiten profesionalismo y seriedad al instante."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Análisis y Datos Propios",
          "description": "Tienes acceso completo a tus propias métricas de tráfico y comportamiento de usuario, permitiendo tomar decisiones informadas."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿La web corporativa estará adaptada para móviles y tablets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "¡Absolutamente! Todas nuestras webs corporativas se desarrollan con un diseño responsive, lo que garantiza que tu sitio se verá y funcionará perfectamente en cualquier dispositivo (ordenadores, tablets y smartphones), ofreciendo una experiencia de usuario óptima y mejorando tu posicionamiento SEO."
          }
        },
        {
          "@type": "Question",
          "name": "¿Por qué es tan importante el mantenimiento web?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "El mantenimiento web es absolutamente crucial. Tu web corporativa es como tu coche: si no le haces revisiones periódicas, tarde o temprano se estropeará o no rendirá como debería. En Astracodelab, disponemos de planes de mantenimiento web corporativo continuos para asegurar que tu sitio esté siempre seguro, actualizado y funcionando a pleno rendimiento."
          }
        },
        {
          "@type": "Question",
          "name": "¿El servicio de web corporativa incluye dominio y hosting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, nuestros servicios de creación de web corporativa profesional incluyen la gestión inicial y configuración de tu dominio y hosting. Gestionamos la activación o migración de tu dominio, y tu web se alojará en servidores optimizados para garantizar velocidad de carga excepcional y máxima fiabilidad. Nos aseguramos de que todos los elementos fundamentales de tu presencia digital estén perfectamente integrados y optimizados desde el inicio."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué pasa si necesito soporte después del lanzamiento?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ofrecemos un mes de soporte gratuito tras el lanzamiento y planes de mantenimiento continuo para asegurar que tu web esté siempre actualizada y funcionando correctamente."
          }
        }
      ]
    }
  ]
};