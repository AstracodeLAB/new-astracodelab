// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';


import mdx from '@astrojs/mdx';


export default defineConfig({
  site:'https://astracodelab.com',
  trailingSlash: 'always',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => {
        const excludedPaths = [
          '/servicios/portfolios-web/',
          '/servicios/sitios-web-corporativos/',
          '/servicios/web-reservas-de-citas-online/',
        ];

        return !excludedPaths.includes(new URL(page).pathname);
      },
    }),
    mdx(),
  ],
});
