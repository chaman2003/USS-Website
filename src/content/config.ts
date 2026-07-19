import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string(),
    tags: z.array(z.string()),
    category: z.string().optional(),
    draft: z.boolean().default(false),
    ogImage: z.string().optional(),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    industry: z.string(),
    challenge: z.string(),
    approach: z.string(),
    outcome: z.string(),
    url: z.string().url().optional(),
    tech: z.array(z.string()),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    // Rich detail-page fields
    status: z.enum(['live', 'in-progress', 'delivered']).default('live'),
    year: z.string().optional(),
    summary: z.string().optional(),
    overview: z.array(z.string()).optional(),
    objectives: z.array(z.string()).optional(),
    techGroups: z
      .array(
        z.object({
          label: z.string(),
          items: z.array(z.string()),
        }),
      )
      .optional(),
    modules: z
      .array(
        z.object({
          title: z.string(),
          features: z.array(z.string()),
        }),
      )
      .optional(),
    // Optional grouped module architecture (e.g. multi-system platforms)
    systems: z
      .array(
        z.object({
          name: z.string(),
          tagline: z.string(),
          modules: z.array(
            z.object({
              title: z.string(),
              features: z.array(z.string()),
            }),
          ),
        }),
      )
      .optional(),
    workflow: z.array(z.string()).optional(),
    order: z.number().default(0),
  }),
});

export const collections = { blog, work };
