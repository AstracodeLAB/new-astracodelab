export const schemaRedisenioWeb = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "serviceType": "Rediseño Web",
      "name": "Servicio de Rediseño Web Profesional",
      "description": "Servicio profesional de rediseño web que transforma sitios obsoletos en herramientas digitales modernas, rápidas y optimizadas para conversión. Incluye análisis exhaustivo, diseño centrado en usuario, desarrollo técnico y migración de contenido.",
      "url": "https://astracodelab.com/servicios/redisenio-web/",
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
          "Empresas con web obsoleta",
          "Negocios",
          "Autónomos",
          "Startups",
          "Organizaciones",
          "Profesionales"
        ],
        "name": "Empresas y profesionales con páginas web obsoletas que necesitan modernización"
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
          "name": "Rediseño web",
          "item": "https://astracodelab.com/servicios/redisenio-web/"
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Señales de que necesitas un rediseño web",
      "description": "Indicadores claros de que tu web necesita un rediseño profesional",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Diseño obsoleto o poco atractivo",
          "description": "Si tu web parece anclada en el pasado con interfaz poco intuitiva que no refleja la imagen actual de tu marca. Un diseño web moderno es crucial para generar confianza y credibilidad."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "No es responsive (no adaptable a móviles)",
          "description": "Más de la mitad del tráfico web proviene de móviles. Si tu web no se ve bien en smartphones y tablets, estás perdiendo clientes potenciales."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Baja tasa de conversión",
          "description": "Si recibes muchas visitas pero pocas consultas o ventas. Un rediseño web centrado en conversión optimiza formularios, llamadas a la acción y flujo de usuario."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Carga lenta",
          "description": "Los usuarios abandonan una web si tarda más de 3 segundos en cargar. Google también penaliza webs lentas. Un rediseño optimizado mejora drásticamente la velocidad."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Funcionalidades limitadas o inexistentes",
          "description": "Tu web no permite integrar nuevas funcionalidades (blog, sistema de reservas, tienda online) o las existentes no funcionan correctamente."
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "Proceso de rediseño web en AstracodeLAB",
      "description": "Nuestro proceso estratégico para transformar tu web obsoleta en una herramienta digital moderna",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Análisis exhaustivo",
          "text": "Comenzamos con un análisis profundo de tu web actual: usabilidad (UX), diseño (UI), rendimiento, comportamiento en buscadores y contenido. Detectamos lo que no funciona y descubrimos dónde está el verdadero potencial de mejora."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Definición de objetivos",
          "text": "Definimos qué esperas lograr (más ventas, consultas, mejor imagen) e identificamos a tu público objetivo para crear una experiencia pensada especialmente para ellos."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Diseño centrado en el usuario y tu marca",
          "text": "Creamos un nuevo diseño con experiencia intuitiva, moderna y alineada con tu identidad de marca. Te mostramos prototipos antes de avanzar para asegurar que todo encaje visual y funcionalmente."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Desarrollo técnico",
          "text": "Construimos tu web usando tecnología actual, limpia y fiable, garantizando compatibilidad en todos los dispositivos."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Migración de contenido",
          "text": "Todo tu contenido actual se traslada al nuevo sitio sin riesgos. Antes de lanzar, hacemos pruebas para confirmar que nada se rompe, no hay enlaces caídos y la experiencia de usuario es fluida."
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Lanzamiento y soporte",
          "text": "Una vez online, durante el primer mes estamos a tu lado para resolver cualquier duda, ajustar detalles o darte soporte técnico que garantiza una transición sin tropiezos."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Es lo mismo rediseñar una web que crear una desde cero?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No exactamente. Un rediseño parte de tu web actual: se aprovecha lo que funciona, se corrige lo que no y se renueva el conjunto. En cambio, una web nueva se crea desde cero, ideal si tu negocio aún no tiene presencia online o si necesitas empezar con un enfoque completamente distinto."
          }
        },
        {
          "@type": "Question",
          "name": "¿Mi web rediseñada será compatible con móviles y tablets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "¡Absolutamente! Todos nuestros proyectos de rediseño web incluyen un diseño responsive, lo que garantiza que tu sitio se verá y funcionará perfectamente en cualquier dispositivo (ordenadores, tablets y smartphones), ofreciendo una experiencia de usuario óptima."
          }
        },
        {
          "@type": "Question",
          "name": "¿Ofrecéis mantenimiento web después del rediseño?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. Una vez finalizado el rediseño web, el mantenimiento web es crucial para asegurar que tu sitio siga seguro, actualizado y funcionando a pleno rendimiento. En AstracodeLAB, disponemos de planes de mantenimiento web continuos adaptados a tus necesidades."
          }
        },
        {
          "@type": "Question",
          "name": "¿Necesito proporcionar el contenido (textos e imágenes) para el rediseño?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lo ideal es que nos facilites tus propios textos e imágenes para reflejar al máximo la esencia y la voz de tu marca. No obstante, si lo prefieres, nuestro equipo de copywriting puede encargarse de redactar los textos optimizados y puede ayudarte con la selección de imágenes."
          }
        }
      ]
    }
  ]
};