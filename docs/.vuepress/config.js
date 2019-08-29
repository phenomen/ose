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
        ],
        sidebar: [{
                title: 'Основные правила',
                children: [
                    '/core/',
                    '/core/introduction',
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
                title: 'Расширенное фэнтези',
                children: [
                    '/advanced-fantasy/'
                ]
            }
            ,
            {
                title: 'Расширенная магия',
                children: [
                    '/advanced-fantasy/'
                ]
            }
        ]
    }
}
