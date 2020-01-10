module.exports = {
    docsDir: 'docs',
    title: 'Old-School Essentials',
    description: 'Версия на русском языке',
    themeConfig: {
        docsRepo: 'Phenomen/ose',
        docsDir: 'docs',
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
                    '/classic-fantasy/combat',
                    '/classic-fantasy/hired-help'
                ]
            },
            {
                title: 'Дополненное фэнтези',
                children: [
                    '/advanced-fantasy/'
                ]
            },
            {
                title: 'Божественные заклинания',
                children: [
                    '/divine-spells/'
                ]
            },
            {
                title: 'Мистические заклинания',
                children: [
                    '/arcane-spells/'
                ]
            },
            {
                title: 'Монстры',
                children: [
                    '/monsters/'
                ]
            },
            {
                title: 'Волшебные предметы',
                children: [
                    '/magic-items/'
                ]
                ,
                {
                    title: 'Англо-русский словарь',
                    children: [
                        'dictionary'
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
    [
      'vuepress-plugin-container',
      {
        type: 'tip',
        defaultTitle: '',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'warning',
        defaultTitle: '',
      },
    ],
  ]
}
