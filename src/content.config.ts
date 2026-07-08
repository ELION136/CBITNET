import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title:    z.string(),
    subtitle: z.string().optional(),
    excerpt:  z.string(),
    category: z.string(),
    tag:      z.string().optional(),
    date:     z.date(),
    image:    z.string().optional(),
    featured: z.boolean().default(false),
    author:   z.string().default('CBTFI'),
    type:     z.enum(['news', 'ad']).default('news'),  // 'ad' = publicidad/anuncio
    link:     z.string().optional(),
  }),
});

export const collections = { news };