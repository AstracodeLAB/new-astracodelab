export const schemaTiendaOnline = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "serviceType": "Diseño y Desarrollo de Tienda Online",
      "name": "Servicio de Diseño y Desarrollo de Tiendas Online y E-commerce",
      "description": "Servicio profesional de diseño y desarrollo de tiendas online y e-commerce para pymes y autónomos. Incluye diseño personalizado, catálogo de productos, pasarelas de pago seguras, diseño responsive y optimización SEO.",
      "url": "https://astracodelab.com/servicios/tienda-online/",
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
          "Pymes",
          "Autónomos",
          "Pequeños comercios",
          "Emprendedores",
          "Negocios retail",
          "Marcas emergentes"
        ],
        "name": "Pymes y autónomos que buscan vender online y expandir su negocio digitalmente"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios incluidos en tienda online",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Diseño personalizado",
              "description": "Diseño único adaptado a tu marca, ofreciendo experiencia visual coherente y profesional en todos los dispositivos."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Catálogo de productos optimizado",
              "description": "Gestión y carga inicial de productos, con opciones para ampliar el catálogo de forma ilimitada."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Pasarelas de pago seguras",
              "description": "Configuración de métodos de pago (tarjeta, PayPal, etc.) con máxima seguridad para transacciones."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Diseño responsive y multidispositivo",
              "description": "Tu e-commerce funcionará perfectamente en ordenadores, tablets y móviles."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Soporte post-lanzamiento",
              "description": "Acompañamiento y asistencia durante el primer mes tras la publicación de tu tienda."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Formación y autonomía en la gestión",
              "description": "Te capacitamos para que puedas actualizar y administrar tu tienda de forma autónoma."
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
          "name": "Tienda online",
          "item": "https://astracodelab.com/servicios/tienda-online/"
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Beneficios clave de un e-commerce profesional",
      "description": "Principales ventajas de tener una tienda online profesional",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Venta sin horarios",
          "description": "Tu tienda online no cierra nunca. Tus productos o servicios están disponibles para clientes de todo el mundo, en cualquier momento."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Aumento en conversiones",
          "description": "Desde la facilidad de navegación hasta un proceso de pago seguro y eficiente, cada elemento está diseñado para guiar al usuario hacia la compra, maximizando tus tasas de conversión."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Costes operativos más bajos",
          "description": "A diferencia de un local físico, una tienda online reduce gastos fijos y te permite escalar con mayor libertad. Automatiza pagos, envíos y gestión de pedidos fácilmente."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Datos reales para mejores decisiones",
          "description": "Analiza qué buscan tus clientes, cómo navegan, qué productos generan más interés y optimiza tu estrategia con información tangible."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Mayor visibilidad en buscadores",
          "description": "Un e-commerce optimizado para SEO te ayuda a aparecer en los primeros resultados de Google, lo que significa más visitas y más oportunidades de venta."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿La tienda online estará adaptada para móviles y tablets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. Tu ecommerce se verá y funcionará perfectamente en cualquier dispositivo (ordenadores, tablets y smartphones)."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuántos productos puedo subir y gestionar yo mismo en mi e-commerce? ¿Me enseñaréis a hacerlo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Podrás incluir productos ilimitados en tu tienda online. Al finalizar el proyecto, te daremos un manual y una formación básica para que puedas gestionar tu inventario, precios, descripciones y pedidos de forma autónoma. Si prefieres delegar esta tarea, nuestro equipo puede encargarse de la gestión del contenido por ti."
          }
        },
        {
          "@type": "Question",
          "name": "¿El servicio de e-commerce incluye dominio y hosting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, nuestros servicios incluyen la gestión inicial y configuración de tu dominio y hosting."
          }
        }
      ]
    }
  ]
};