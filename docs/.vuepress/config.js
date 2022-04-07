module.exports = {
  lang: "ru-RU",
  title: "Old-School Essentials",
  description: "Правила Old-School Essentials на русском языке.",

  themeConfig: {
    favicon: "favicon.png",
    lastUpdated: false,
    contributors: false,
    editLink: false,
    notFound: ["Страница не найдена"],
    backToHome: "Перейти на главную страницу",
    sidebarDepth: 1,
    darkMode: true,
    tip: "",
    danger: "",
    warning: "",
    info: "",
    sidebar: [
      {
        text: "🟨Персонажи",
        collapsible: true,
        link: "/characters/",
        children: [
          {
            text: "1. Вступление",
            children: [
              "/characters/introduction/about-the-game.md",
              "/characters/introduction/classic-fantasy-gaming.md",
              "/characters/introduction/terminology.md",
              "/characters/introduction/compatibility.md",
            ],
          },
          {
            text: "2. Персонажи игроков",
            children: [
              "/characters/player-characters/game-statistics.md",
              "/characters/player-characters/creating-character.md",
              "/characters/player-characters/ability-scores.md",
              "/characters/player-characters/alignment.md",
              "/characters/player-characters/languages.md",
            ],
          },
        ],
      },
      {
        text: "🟪Приключения",
        collapsible: true,
        link: "/adventures/",
        children: [
          {
            text: "1. В приключениях",
            children: [
              "/adventures/adventuring/party-organization.md",
              "/adventures/adventuring/time-weight-and-movement.md",
              "/adventures/adventuring/ability-checks.md",
            ],
          },
        ],
      },
    ],
  },
  markdown: {
    anchor: {
      slugify: function slugify(string) {
        const rControl = /[\u0000-\u001f]/g;
        const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>«»,.?/]+/g;
        const rCombining = /[\u0300-\u036F]/g;

        return string
          .toString()
          .normalize("NFC")
          .replace(rCombining, "")
          .replace(rControl, "")
          .replace(rSpecial, "-")
          .replace(/-{2,}/g, "-")
          .replace(/^-+|-+$/g, "")
          .replace(/^(\d)/, "_$1")
          .toLowerCase();
      },
    },
  },
  plugins: [
    [
      "@vuepress/plugin-container",
      {
        type: "info",
      },
    ],
  ],
};
