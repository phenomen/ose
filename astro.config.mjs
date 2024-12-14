import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
//import starlightLinksValidator from "starlight-links-validator";
//import starlightMultiSidebar from "@lorenzo_lewis/starlight-multi-sidebar";

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
			plugins: [],
			title: "Old-School Essentials",
			social: {
				github: "https://github.com/phenomen/ose",
			},
			defaultLocale: "root",
			locales: {
				root: {
					label: "Русский",
					lang: 'ru',
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
