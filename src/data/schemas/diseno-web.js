export const schemaDisenoWeb = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "name": "AstracodeLAB - Agencia de Diseño y Desarrollo Web",
      "description": "Agencia de diseño y desarrollo web a medida en España. Creamos páginas web rápidas, accesibles y optimizadas para SEO que convierten visitantes en clientes.",
      "url": "https://astracodelab.com/servicios/diseno-web/",
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
        "sameAs": ["https://www.linkedin.com/company/astracodelab", "https://www.instagram.com/astracodelab"]
      },
      "areaServed": {
        "@type": "Country",
        "name": "Spain"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": [
          "Empresas",
          "Negocios",
          "Autónomos",
          "Profesionales independientes",
          "Creativos",
          "Startups"
        ],
        "name": "Empresas y profesionales que buscan presencia digital profesional"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios de diseño y desarrollo web",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web corporativa",
              "description": "Web corporativa profesional que refuerza la identidad de tu marca y presenta tus servicios de forma clara y atractiva.",
              "url": "https://astracodelab.com/servicios/web-corporativa/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Landing page",
              "description": "Landing page optimizada para conversión, ideal para campañas específicas que maximizan cada visita.",
              "url": "https://astracodelab.com/servicios/landing-page/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Rediseño web",
              "description": "Renovación completa de sitios web obsoletos para mejorar imagen y cumplir expectativas actuales.",
              "url": "https://astracodelab.com/servicios/redisenio-web/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Tienda online",
              "description": "Soluciones de ecommerce para lanzar tu catálogo de productos con venta 24/7.",
              "url": "https://astracodelab.com/servicios/tienda-online/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Blog corporativo y revista digital",
              "description": "Blogs y revistas online para compartir conocimiento y atraer tráfico orgánico constante."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Portfolio online",
              "description": "Portfolios personalizados para creativos y profesionales que muestran su trabajo de forma impactante."
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
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Beneficios clave de un diseño y desarrollo web a medida",
      "description": "Principales ventajas de tener una página web profesional",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Primeras impresiones",
          "description": "Un diseño web profesional y cuidado comunica seriedad, calidad y confianza desde el primer clic."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Credibilidad y confianza reforzadas",
          "description": "Una web funcional, segura y bien estructurada refuerza la fiabilidad de tu marca."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Generación de Oportunidades Reales",
          "description": "Una página web optimizada facilita la conversión de visitantes en leads cualificados y en ventas."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Velocidad y Claridad para una Experiencia Óptima",
          "description": "Priorizamos la velocidad de carga y una navegación intuitiva para asegurar una experiencia de usuario fluida."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Visibilidad en buscadores",
          "description": "Solo el código optimizado y el contenido bien estructurado permiten que Google te muestre por delante de tu competencia."
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Adaptabilidad y Escalabilidad Futura",
          "description": "Diseñamos soluciones web a medida que pueden crecer contigo, permitiéndote añadir nuevas funcionalidades cuando las necesites."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Ventajas de elegir AstracodeLAB como tu agencia web",
      "description": "Qué ganas al trabajar con nuestra agencia de diseño y desarrollo web",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Carga rápida",
          "description": "Nos aseguramos de que tu web cargue en cuestión de segundos. La optimización del rendimiento web es clave."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Diseño centrado en el usuario",
          "description": "Navegación sencilla y lectura cómoda. Nuestras webs son accesibles para todos, garantizando una experiencia positiva."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Contenido listo para buscadores",
          "description": "Mayor visibilidad en Google sin trucos. Estructuramos el contenido y desarrollamos tu sitio con un código optimizado."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Proyectos escalables y adaptables",
          "description": "Tu proyecto puede crecer. Añade tienda online, sistemas de reservas o funcionalidades multilingües cuando lo necesites."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Acompañamiento cercano y personalizado",
          "description": "Te acompañamos en cada etapa. Respondemos a tus mensajes, llamadas o mails siempre en tu horario y con la atención que mereces."
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "Proceso de desarrollo de una página web en AstracodeLAB",
      "description": "Nuestro proceso de creación de tu página web profesional es transparente, colaborativo y diseñado para garantizar tu tranquilidad",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Reunión inicial y definición de objetivos",
          "text": "Empezamos con una reunión para entender tu idea, tus objetivos y las referencias que te inspiran. Así dibujamos un alcance de proyecto realista y alineado con tus plazos."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Arquitectura web y análisis",
          "text": "Trazamos un mapa detallado con las secciones, flujos del usuario y la estructura de contenidos. Realizamos un análisis de tu mercado y de las palabras clave para definir una buena arquitectura web. Creamos un prototipo en el que podrás ajustar colores, tipografía y jerarquía."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Diseño visual y prototipo",
          "text": "Con la estructura firme, trabajamos en el estilo visual de tu marca: colores, tipografías y elementos gráficos. Creamos un prototipo donde podrás previsualizar y ajustar el diseño."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Desarrollo y programación",
          "text": "Nos ponemos manos a la obra con el código. Convertimos el diseño en una web funcional, accesible y adaptada a todos los dispositivos (móviles, tablets y ordenadores), asegurando un rendimiento óptimo."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Lanzamiento y soporte continuo",
          "text": "Después de activar tu web, te proporcionamos un manual básico y te acompañamos durante el primer mes para cualquier ajuste o duda. Puedes optar por nuestro plan de mantenimiento web mensual."
        }
      ]
    }
  ]
}