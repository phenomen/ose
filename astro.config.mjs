import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import {
	SidebarCharacters,
	SidebarAdventures,
	SidebarMonsters,
	SidebarMagic,
	SidebarTreasures,
	SidebarExtras,
} from "./sidebar.js";

// https://astro.build/config
export default defineConfig({
	site: "https://ose.ruleplaying.com",
	integrations: [
		starlight({
			title: "Old-School Essentials",

			social: {
				github: "https://github.com/phenomen/ose",
			},
			defaultLocale: "ru",
			locales: {
				ru: {
					label: "Русский",
				},
			},
			sidebar: [
				SidebarCharacters,
				SidebarAdventures,
				SidebarMagic,
				SidebarTreasures,
				SidebarMonsters,
				SidebarExtras,
			],
			customCss: [
				"./src/styles/custom.css",
				"@fontsource-variable/inter/index.css",
			],
		}),
	],
});
