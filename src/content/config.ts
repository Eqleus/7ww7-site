import { defineCollection, z } from "astro:content";

const ideas = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    tag: z.string().optional(),
    featured: z.boolean().optional(),
  }),
});

export const collections = { ideas };
