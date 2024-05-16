import { z, defineCollection } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

const spellsCollection = defineCollection({
	type: "content",
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
	docs: defineCollection({ schema: docsSchema() }),
	spells: spellsCollection,
};
