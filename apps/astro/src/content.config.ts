import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const komponenter = defineCollection({
  loader: glob({ pattern: "**/astro/**/*.mdx", base: "../../packages" }),
  schema: z.object({
    title: z.string(),
    id: z.string(),
    package: z.string(),
  }),
});

export const collections = { komponenter };
