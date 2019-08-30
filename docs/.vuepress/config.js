module.exports = {
    docsDir: 'docs',
    title: 'Old-School Essentials',
    description: 'Версия на русском языке',
    themeConfig: {
          sidebar: [{
                title: 'Основные правила',
                children: [
                    '/core/',
                ]
            },
            {
                title: 'Классическое фэнтези: Правила жанра',
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
                title: 'Дополненное фэнтези: Правила жанра',
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
