export const schemaHostingDominio = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "serviceType": "Hosting y Dominio Web",
      "name": "Servicio de Gestión de Hosting y Dominio Web",
      "description": "Servicio profesional de gestión integral de hosting y dominio web: registro de dominio, selección de hosting optimizado, instalación de certificado SSL, configuración de correos corporativos y soporte técnico continuo.",
      "url": "https://astracodelab.com/servicios/hosting-dominio/",
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
          "Negocios",
          "Autónomos",
          "Startups",
          "Profesionales",
          "Emprendedores"
        ],
        "name": "Empresas y profesionales que necesitan hosting y dominio profesional para su web"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios de hosting y dominio incluidos",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Selección y registro de dominio web",
              "description": "Te ayudamos a elegir el dominio adecuado que represente tu marca, comprobamos disponibilidad y lo registramos a tu nombre para que tengas control total."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Selección del plan de hosting óptimo",
              "description": "Analizamos las necesidades de tu web para elegir el plan de hosting más adecuado. Configuramos el servidor para garantizar máxima velocidad y rendimiento."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Instalación y configuración de certificado SSL",
              "description": "Protegemos los datos que se envían desde y hacia tu sitio, garantizando seguridad y mejorando tu SEO."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Configuración de correos corporativos",
              "description": "Creamos y configuramos tus cuentas de correo electrónico personalizadas con tu propio dominio."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Soporte técnico continuo",
              "description": "Estamos disponibles para resolver cualquier duda o incidencia relacionada con tu hosting y dominio, asegurando que tu web esté siempre operativa."
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
          "name": "Hosting y dominio",
          "item": "https://astracodelab.com/servicios/hosting-dominio/"
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "Proceso de gestión de hosting y dominio en AstracodeLAB",
      "description": "Nuestro proceso integral para gestionar tu hosting y dominio web liberándote de complejidades técnicas",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Selección del dominio adecuado",
          "text": "Buscamos un nombre de dominio que represente bien a tu marca y comprobamos que esté disponible. Una vez definido, lo registramos a tu nombre para que tengas el control total."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Selección del mejor plan de hosting",
          "text": "Analizamos las necesidades de tu web (tipo de proyecto, tráfico esperado) para elegir el plan de hosting más adecuado. Configuramos el servidor para garantizar la máxima velocidad y rendimiento."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Instalación y configuración del certificado SSL",
          "text": "Este paso protege los datos que se envían desde y hacia tu sitio, garantizando la seguridad y mejorando tu SEO."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Configuración de correos con dominio propio",
          "text": "Creamos y configuramos tus cuentas de correo electrónico personalizadas con tu propio dominio (ej., info@tuempresa.com)."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Soporte técnico continuo",
          "text": "Estamos disponibles para resolver cualquier duda o incidencia relacionada con tu hosting y dominio, asegurando que tu web esté siempre operativa."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Qué es un dominio web y por qué es importante tener uno propio?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Un dominio web es la dirección única de tu página en internet (ej., astracodelab.com). Es importante porque es la identidad digital de tu marca, te da profesionalidad, credibilidad y facilita que tus clientes te encuentren con facilidad."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué es el hosting web y qué hace?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "El hosting web es el servicio que te permite almacenar todos los archivos y datos de tu página web (textos, imágenes, vídeos, código) en un servidor conectado a internet. Es lo que hace posible que tu web esté accesible para los usuarios 24 horas al día, 7 días a la semana."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué es un certificado SSL y por qué lo necesito?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Un certificado SSL (Secure Sockets Layer) es un protocolo de seguridad que cifra la información que se transmite entre tu web y los navegadores de los usuarios. Es el responsable del candadito en la barra de dirección. Lo necesitas para proteger los datos de tus clientes, generar confianza y porque es un factor de SEO que Google exige para todas las webs."
          }
        },
        {
          "@type": "Question",
          "name": "¿Es el hosting y dominio un pago único o hay que renovarlo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tanto el dominio como el hosting son servicios que se contratan por períodos definidos. El dominio, por lo general, se renueva cada año, mientras que el hosting puede contratarse de forma anual o mensual, según el proveedor. Ambos requieren renovación periódica para que tu sitio siga activo y accesible. En AstracodeLAB te ayudamos a gestionar todo este proceso para que no tengas que preocuparte por fechas, pagos o interrupciones."
          }
        }
      ]
    }
  ]
};