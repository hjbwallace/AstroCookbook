import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const recipes = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/recipes" }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string())
    })
});

export const collections = { recipes: recipes };