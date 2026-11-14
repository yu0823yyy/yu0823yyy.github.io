import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    date: z.coerce.date(),
    // public/ に置いた画像のパス（例: /projects/bot.png）
    image: z.string().optional(),
    repo: z.string().optional(),
    demo: z.string().optional(),
    // true にするとトップの一番上に出ます
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
