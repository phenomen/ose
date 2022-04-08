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
    tip: " ",
    danger: " ",
    warning: " ",
    info: " ",
    sidebar: [
      {
        text: "🟨Персонажи",
        collapsible: true,
        link: "/characters/",
        children: [
          {
            text: "1. Вступление",
            collapsible: true,
            children: [
              "/characters/introduction/about-the-game.md",
              "/characters/introduction/classic-fantasy-gaming.md",
              "/characters/introduction/terminology.md",
              "/characters/introduction/compatibility.md",
            ],
          },
          {
            text: "2. Персонажи игроков",
            collapsible: true,
            children: [
              "/characters/player-characters/game-statistics.md",
              "/characters/player-characters/creating-character.md",
              "/characters/player-characters/ability-scores.md",
              "/characters/player-characters/alignment.md",
              "/characters/player-characters/languages.md",
            ],
          },
          {
            text: "3. Классы персонажей",
            collapsible: true,
            children: [
              "/characters/character-classes/fighter.md",
              "/characters/character-classes/dwarf.md",
              "/characters/character-classes/cleric.md",
              "/characters/character-classes/magic-user.md",
              "/characters/character-classes/halfling.md",
              "/characters/character-classes/thief.md",
              "/characters/character-classes/elf.md",
            ],
          },
          {
            text: "4. Развитие",
            collapsible: true,
            children: [
              "/characters/advancement/experience.md",
              "/characters/advancement/titles.md",
              "/characters/advancement/high-level-play.md",
              "/characters/advancement/wealth.md",
            ],
          },
          {
            text: "5. Снаряжение",
            collapsible: true,
            children: [
              "/characters/equipment/adventuring-gear.md",
              "/characters/equipment/weapons-and-armour.md",
            ],
          },
          {
            text: "6. Транспорт",
            collapsible: true,
            children: [
              "/characters/vehicles-and-mounts/rules-for-vehicles.md",
              "/characters/vehicles-and-mounts/animals-of-burden.md",
              "/characters/vehicles-and-mounts/land-vehicles.md",
              "/characters/vehicles-and-mounts/water-vehicles.md",
            ],
          },
          {
            text: "7. Наёмная помощь",
            collapsible: true,
            children: [
              "/characters/hired-help/retainers.md",
              "/characters/hired-help/mercenaries.md",
              "/characters/hired-help/specialists.md",
            ],
          },
          {
            text: "8. Крепости",
            collapsible: true,
            children: [
              "/characters/strongholds/construction.md",
              "/characters/strongholds/domain-management.md",
              "/characters/strongholds/structures.md",
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
            collapsible: true,
            children: [
              "/adventures/adventuring/party-organization.md",
              "/adventures/adventuring/time-weight-and-movement.md",
              "/adventures/adventuring/ability-checks.md",
              "/adventures/adventuring/saving-throws.md",
              "/adventures/adventuring/hazards-and-challenges.md",
              "/adventures/adventuring/dungeon-adventuring.md",
              "/adventures/adventuring/wilderness-adventuring.md",
              "/adventures/adventuring/waterborne-adventuring.md",
            ],
          },
          {
            text: "2. В столкновениях",
            collapsible: true,
            children: [
              "/adventures/encounters/encounters.md",
              "/adventures/encounters/evasion-and-pursuit.md",
              "/adventures/encounters/combat.md",
              "/adventures/encounters/other-combat-issues.md",
              "/adventures/encounters/morale.md",
              "/adventures/encounters/combat-tables.md",
            ],
          },
          {
            text: "3. Проведение приключений",
            collapsible: true,
            children: [
              "/adventures/running-adventures/the-referees-role.md",
              "/adventures/running-adventures/handling-pcs.md",
              "/adventures/running-adventures/running-the-game.md",
              "/adventures/running-adventures/monsters-and-npcs.md",
              "/adventures/running-adventures/adventure-scenarios.md",
              "/adventures/running-adventures/designing-a-dungeon.md",
              "/adventures/running-adventures/designing-a-wilderness.md",
              "/adventures/running-adventures/designing-a-base-town.md",
              "/adventures/running-adventures/awarding-xp.md",
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
