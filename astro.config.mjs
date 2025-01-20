// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';


export default defineConfig({
    // site: 'http://localhost:3000/',
    // base: '/',
    integrations: [tailwind()],
});


