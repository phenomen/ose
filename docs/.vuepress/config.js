module.exports = {
    docsDir: 'docs',
    title: 'Old-School Essentials',
    description: 'Версия на русском языке',
    themeConfig: {
        docsRepo: 'Phenomen/ose',
        docsDir: 'docs',
        smoothScroll: true,
        editLinks: false,
        activeHeaderLinks: true,
        editLinkText: 'Помогите улучшить эту страницу',
        sidebar: [{
                title: 'Персонажи',
                children: [
                    '/characters/',
                    '/characters/game-statistics',
                    '/characters/creating-character',
                    '/characters/ability-scores',
                    '/characters/alignment',
                    '/characters/languages',
                    '/characters/advancement',
                    '/characters/wealth',

                ]
            },
            {
                title: 'Классы',
                children: [
                    '/classes/fighter',
                    '/classes/dwarf',
                    '/classes/cleric',
                    '/classes/magic-user',
                    '/classes/thief',
                    '/classes/halfling',
                    '/classes/elf',
                ]
            },
            {
                title: 'Снаряжение и услуги',
                children: [
                    '/equipment-services/adventuring-gear',
                    '/equipment-services/weapons-armor',
                    '/equipment-services/vehicles-rules',
                    '/equipment-services/vehicles-mounts',
                    '/equipment-services/vehicles-land',
                    '/equipment-services/vehicles-water',
                    '/equipment-services/retainers',
                    '/equipment-services/mercenaries',
                    '/equipment-services/specialists',
                    '/equipment-services/strongholds',
                ]
            },
            {
                title: 'Приключения',
                children: [
                    '/adventuring/party',
                    '/adventuring/time-weight-movement',
                    '/adventuring/checks-damage-saves',
                    '/adventuring/hazards-challenges',
                    '/adventuring/adventuring-dungeons',
                    '/adventuring/adventuring-wilderness',
                    '/adventuring/adventuring-waterborne',
                    '/adventuring/encounters',
                    '/adventuring/evasion-pursuit',
                    '/adventuring/combat',
                    '/adventuring/morale',
                ]
            },
            {
                title: 'Магия',
                children: [
                    '/magic/magic',
                    '/magic/magical-research',
                    '/magic/arcane',
                    '/magic/divine',
                    '/magic/druid',
                    '/magic/illusion'
                ]
            },
            {
                title: 'Монстры',
                children: [
                    '/monsters/monsters',
                    '/monsters/monsters-list',
                    '/monsters/a',
                    '/monsters/b',
                    '/monsters/v',
                    '/monsters/g',
                    '/monsters/d',
                    '/monsters/e',
                    '/monsters/zh',
                    '/monsters/z',
                    '/monsters/i',
                    '/monsters/j',
                    '/monsters/k',
                    '/monsters/l',
                    '/monsters/m',
                    '/monsters/n',
                    '/monsters/o',
                    '/monsters/p',
                    '/monsters/r',
                    '/monsters/s',
                    '/monsters/t',
                    '/monsters/u',
                    '/monsters/f',
                    '/monsters/h',
                    '/monsters/c',
                    '/monsters/ch',
                    '/monsters/sh',
                    '/monsters/y',
                    '/monsters/eh',
                    '/monsters/yu',
                    '/monsters/ya'
                ]
            },
            {
                title: 'Проведение игры',
                children: [
                    '/referee/referee-basics',
                ]
            },
            {
                title: 'Сокровища',
                children: [
                    '/treasures/placing-treasures',
                    '/treasures/treasure-types',
                    '/treasures/magic-items',
                ]
            },
            {
                title: 'Дополнительные материалы',
                children: [
                    '/other/character-sheet',
                    '/other/adventures',
                    '/other/lexicon',
                    '/other/ogl'
                ]
            }
        ]
    },
    markdown: {
        anchor: {
            level: [1, 2, 3, 4]
        },
        slugify: function(string) {
            const rControl = /[\u0000-\u001f]/g
            const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g

            return string.toString().toLowerCase()
                .replace(rControl, '')
                .replace(rSpecial, '-')
                .replace(/\-{2,}/g, '-')
                .replace(/^\-+|\-+$/g, '')
                .replace(/^(\d)/, '_$1')
        }
    },
    plugins: [
        ['@vuepress/back-to-top'],
        ['reading-progress'],
        [
            'vuepress-plugin-container',
            {
                type: 'tip',
                defaultTitle: ''
            }
        ],
        [
            'vuepress-plugin-container',
            {
                type: 'warning',
                defaultTitle: ''
            }
        ],
        [
            'vuepress-plugin-container',
            {
                type: 'danger',
                defaultTitle: ''
            }
        ],
        [
            'minimal-analytics',
            {
                'ga': 'UA-99747206-6'
            }
        ]
    ]
}