module.exports = {
    docsDir: 'docs',
    title: 'Old-School Essentials',
    description: 'Версия на русском языке',
    themeConfig: {
        docsRepo: 'Phenomen/ose',
        docsDir: 'docs',
        activeHeaderLinks: false,
        editLinks: true,
        editLinkText: 'Помогите улучшить эту страницу',
        sidebar: [{
                title: 'Классическое фэнтези',
                children: [
                    '/classic-fantasy/',
                    '/classic-fantasy/player-characters',
                    '/classic-fantasy/character-classes',
                    '/classic-fantasy/advancement',
                    '/classic-fantasy/equipment',
                    '/classic-fantasy/vehicles-mounts',
                    '/classic-fantasy/magic',
                    '/classic-fantasy/adventuring',
                    '/classic-fantasy/areas',
                    '/classic-fantasy/encounters',
                    '/classic-fantasy/combat',
                    '/classic-fantasy/hired-help',
                    '/classic-fantasy/strongholds',
                    '/classic-fantasy/monsters',
                    '/classic-fantasy/running-adventures',
                    '/classic-fantasy/treasures',
                    '/classic-fantasy/magic-items'
                ]
            },
            {
                title: 'Дополненное фэнтези',
                children: [
                    '/advanced-fantasy/'
                ]
            },
            {
                title: 'Заклинания',
                children: [
                    '/spells/arcane',
                    '/spells/divine',
                    '/spells/druid',
                    '/spells/illusion'
                ]
            },
            {
                title: 'Бестиарий',
                children: [
                    '/bestiary/',
                    '/bestiary/monsters-0',
                    '/bestiary/monsters-1',
                    '/bestiary/monsters-2'
                ]
            },
            {
                title: 'Дополнительные материалы',
                children: [
                    '/other/adventures',
                    '/other/lexicon'
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
            '@vuepress/google-analytics',
            {
                'ga': 'UA-99747206-6'
            }
        ]
    ]
}