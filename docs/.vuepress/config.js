module.exports = {
    docsDir: 'docs',
    lang: 'ru-RU',
    title: 'Old-School Essentials',
    description: 'Версия на русском языке',
    themeConfig: {
        nav: [{
                text: 'Основные правила',
                link: '/core/'
            },
            {
                text: 'Фэнтези',
                link: '/fantasy/'
            },
            {
                text: 'Магия',
                link: '/magic/'
            },
            {
                text: 'Монстры',
                link: '/monsters/'
            },
            {
                text: 'Сокровища',
                link: '/treasures/'
            }
            ,
            {
                text: 'Дополненное фэнтези',
                link: '/treasures/'
            }
            ,
            {
                text: 'Дополненная магия',
                link: '/treasures/'
            }
        ],
        sidebar: [{
                title: 'Основные правила',
                children: [
                    '/core/',
                ]
            },
            {
                title: 'Фэнтези',
                children: [
                    '/fantasy/'
                ]
            }
            ,
            {
                title: 'Магия',
                children: [
                    '/magic/'
                ]
            }
            ,
            {
                title: 'Монстры',
                children: [
                    '/monsters/'
                ]
            }
            ,
            {
                title: 'Сокровища',
                children: [
                    '/treasures/'
                ]
            }
            ,
            {
                title: 'Дополненное фэнтези',
                children: [
                    '/advanced-fantasy/'
                ]
            }
            ,
            {
                title: 'Дополненная магия',
                children: [
                    '/advanced-fantasy/'
                ]
            }
        ]
    }
}
