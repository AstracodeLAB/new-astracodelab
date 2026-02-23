import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    excerpt: z.string(),
    cover: image(),
    coverAlt: z.string(),
    date: z.date(),
  }),
});

export const collections = { blog }