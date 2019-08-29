module.exports = {
    docsDir: 'docs',
    title: 'Old-School Essentials',
    description: 'Версия на русском языке',
    themeConfig: {
        nav: [{
                text: 'Основные правила',
                link: '/core/'
            },
            {
                text: 'Классическое фэнтези',
                link: '/genre-classic-fantasy/'
            },
            {
                text: 'Заклинания мага и клерика',
                link: '/spells-classic-fantasy/'
            },
            {
                text: 'Классическое фэнтези: Монстры',
                link: '/monsters-classic-fantasy/'
            },
            {
                text: 'Классическое фэнтези: Сокровища',
                link: '/treasures-classic-fantasy/'
            }
            ,
            {
                text: 'Жанровые правила: Дополненное фэнтези',
                link: '/genre-advanced-fantasy/'
            }
            ,
            {
                text: 'Дополненное фэнтези: Заклинания иллюзиониста и друида',
                link: '/spells-advanced-fantasy/'
            }
        ],
        sidebar: [{
                title: 'Основные правила',
                children: [
                    '/core/',
                ]
            },
            {
                title: 'Жанровые правила: Классическое фэнтези',
                children: [
                    '/genre-classic-fantasy/'
                ]
            }
            ,
            {
                title: 'Классическое фэнтези: Заклинания мага и клерика',
                children: [
                    '/spells-classic-fantasy/'
                ]
            }
            ,
            {
                title: 'Классическое фэнтези: Монстры',
                children: [
                    '/monsters-classic-fantasy/'
                ]
            }
            ,
            {
                title: 'Классическое фэнтези: Сокровища',
                children: [
                    '/treasures-classic-fantasy/'
                ]
            }
            ,
            {
                title: 'Жанровые правила: Дополненное фэнтези',
                children: [
                    '/genre-advanced-fantasy/'
                ]
            }
            ,
            {
                title: 'Дополненное фэнтези: Заклинания иллюзиониста и друида',
                children: [
                    '/spells-advanced-fantasy/'
                ]
            }
        ]
    }
}
