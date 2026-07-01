import { defineConfig, svgoOptimizer } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightSidebarTopics from "starlight-sidebar-topics";
//import starlightLinksValidator from "starlight-links-validator";

import {
  TopicCharacters,
  TopicAdventures,
  TopicMonsters,
  TopicMagic,
  TopicTreasures,
  TopicExtras,
} from "./sidebar.js";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://ose.ruleplaying.com",
  experimental: {
    svgOptimizer: svgoOptimizer(),
  },
  integrations: [
    starlight({
      plugins: [
        starlightSidebarTopics([
          TopicCharacters,
          TopicAdventures,
          TopicMagic,
          TopicTreasures,
          TopicMonsters,
          TopicExtras,
        ]),
      ],
      title: "Old-School Essentials",
      components: {
        Sidebar: "./src/components/Sidebar.astro",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/phenomen/ose",
        },
      ],
      defaultLocale: "root",
      locales: {
        root: {
          label: "Русский",
          lang: "ru",
        },
      },
      customCss: ["./src/styles/global.css"],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
