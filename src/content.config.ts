import { defineCollection } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const spellsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/content/spells" }),
  schema: z.object({
    name: z.string(),
    original: z.string(),
    type: z.enum(["arcane", "divine"]),
    level: z.number(),
    duration: z.string(),
    range: z.string(),
  }),
});

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  spells: spellsCollection,
};
