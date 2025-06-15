import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const recipes = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/recipes" }),
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      image: z.string().optional(),
      tags: z.array(z.string()),
      ingredients: z.array(z.string()).optional(),
      steps: z.array(z.string()).optional(),
      notes: z.array(z.string()).optional(),
      details: z.object({
        time: z.number().optional(),
        preheatTemperature: z.number().optional(),
        servings: z.union([z.string(), z.number()]).optional(),
      }).optional(),
      subRecipes: z.array(
        z.object({
          title: z.string(),
          ingredients: z.array(z.string()).optional(),
          steps: z.array(z.string()).optional(),
        })
      ).optional(),
      variations: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
        })
      ).optional(),
      createdDate: z.date(),
      updatedDate: z.date().optional(),
    })
});

export const collections = { recipes: recipes };