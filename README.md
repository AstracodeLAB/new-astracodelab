# AstracodeLAB - Sitio Web Corporativo

Sitio web corporativo de AstracodeLAB, agencia especializada en diseño y desarrollo web, construido con Astro 5.

🌐 **[astracodelab.com](https://astracodelab.com)**

---

## 🚀 Tecnologías Principales

- **[Astro 5.0.5](https://astro.build)** - Framework web estático
- **[Tailwind CSS](https://tailwindcss.com)** - Framework CSS utility-first
- **[Sass/SCSS](https://sass-lang.com)** - Preprocesador CSS
- **[Swiper](https://swiperjs.com)** - Carruseles y sliders
- **[PhotoSwipe](https://photoswipe.com)** - Galería de imágenes lightbox
- **[@fontsource/roboto](https://fontsource.org)** - Fuentes self-hosted optimizadas

---

## 📁 Estructura del Proyecto

```
new-astracodelab/
├── public/
│   ├── _redirects          # Redirects de Netlify
│   ├── robots.txt          # Configuración para crawlers
│   └── ...                 # Assets estáticos
├── src/
│   ├── data/              # Datos y schemas JSON-LD
│   │   ├── schemas/       # Structured data para SEO
│   │   └── faqs*.js       # Datos de FAQs
│   ├── images/            # Imágenes optimizadas
│   ├── layouts/
│   │   ├── components/    # Componentes Astro
│   │   │   ├── Cards/
│   │   │   ├── Buttons/
│   │   │   ├── Titles/
│   │   │   └── accordeon/
│   │   ├── partials/      # Header, Footer
│   │   └── Layout.astro   # Layout principal
│   ├── pages/             # Páginas del sitio
│   │   ├── servicios/     # Páginas de servicios
│   │   └── index.astro    # Home
│   └── styles/            # Estilos SCSS
├── .nvmrc                 # Versión de Node.js (20)
├── astro.config.mjs       # Configuración de Astro
├── netlify.toml           # Configuración de Netlify
├── package.json
└── README.md
```

---

## 🛠️ Instalación y Desarrollo

### Requisitos Previos

- **Node.js 20.x** (LTS) - Especificado en `.nvmrc`
- **npm** 9.x o superior

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/new-astracodelab.git
cd new-astracodelab

# Instalar dependencias
npm install
```

### Comandos Disponibles

| Comando              | Acción                                                |
| :------------------- | :---------------------------------------------------- |
| `npm install`        | Instala las dependencias del proyecto                 |
| `npm run dev`        | Inicia servidor de desarrollo en `localhost:4321`     |
| `npm run build`      | Construye el sitio para producción en `./dist/`       |
| `npm run preview`    | Previsualiza el build localmente antes de desplegar   |
| `npm run astro ...`  | Ejecuta comandos CLI de Astro                         |

---

## 🌐 Deployment en Netlify

### Configuración Automática

El sitio está configurado para desplegarse automáticamente en Netlify:

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node Version**: 20 (definido en `.nvmrc` y `netlify.toml`)

### Redirects y Optimizaciones

- ✅ **Trailing Slashes**: Configurado como `always` en `astro.config.mjs`
- ✅ **www → sin www**: Redirects automáticos en `netlify.toml`
- ✅ **HTTP → HTTPS**: Forzado para todas las URLs
- ✅ **URLs antiguas**: Redirects 301 en `public/_redirects`

---

## 🎯 SEO y Optimizaciones

### Funcionalidades SEO

- ✅ **Sitemap XML**: Generado automáticamente con `@astrojs/sitemap`
- ✅ **Robots.txt**: Configurado para permitir crawling
- ✅ **Meta tags**: Title, description, og:image personalizados por página
- ✅ **Structured Data**: JSON-LD schemas para servicios
- ✅ **URLs canónicas**: Trailing slashes consistentes
- ✅ **Accesibilidad**: WCAG 2.1 Level A/AA

### Performance

- ✅ **Fuentes self-hosted**: Roboto con @fontsource (75% reducción vs Google CDN)
- ✅ **Imágenes optimizadas**: Formato WebP/AVIF
- ✅ **CSS optimizado**: Tailwind + SCSS con purge
- ✅ **JavaScript mínimo**: Solo donde es necesario

---

## 📄 Páginas del Sitio

### Páginas Principales
- `/` - Home
- `/sobre-nosotras/` - Sobre AstracodeLAB
- `/contacto/` - Formulario de contacto

### Servicios
- `/servicios/diseno-web/`
- `/servicios/web-corporativa/`
- `/servicios/tienda-online/`
- `/servicios/landing-page/`
- `/servicios/redisenio-web/`
- `/servicios/mantenimiento-web/`
- `/servicios/hosting-dominio/`
- `/servicios/funcionalidades-optimizacion-web/`
- `/servicios/accesibilidad-web/`
- `/servicios/web-multilingue/`
- `/servicios/sistemas-de-reservas/`
- `/servicios/cartas-digitales-restaurantes/`
- `/servicios/portfolios-web/`
- `/servicios/sitios-web-corporativos/`
- `/servicios/web-reservas-de-citas-online/`

### Legal
- `/legal/` - Aviso legal
- `/privacy-policy/` - Política de privacidad
- `/privacy-cookies/` - Política de cookies

---

## 🔧 Configuración

### Astro Config (`astro.config.mjs`)

```javascript
export default defineConfig({
  site: 'https://astracodelab.com/',
  trailingSlash: 'always',
  integrations: [tailwind(), sitemap()],
});
```

### Netlify Config (`netlify.toml`)

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"

# Redirects automáticos para www y HTTPS
```

---

## 📞 Contacto

- **Web**: [astracodelab.com](https://astracodelab.com)
- **Email**: info@astracodelab.com
- **WhatsApp**: +34 623 75 29 40
- **Instagram**: [@astracodelab](https://instagram.com/astracodelab)

---

## 📝 Licencia

© 2025 AstracodeLAB. Todos los derechos reservados.

---

## 🤝 Equipo de Desarrollo

Desarrollado con ❤️ por el equipo de AstracodeLAB en Barcelona, Castellón y Málaga.
