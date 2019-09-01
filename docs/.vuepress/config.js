module.exports = {
    docsDir: 'docs',
    title: 'Old-School Essentials',
    description: 'Версия на русском языке',
    themeConfig: {
          sidebar: [{
                title: 'Классическое фэнтези',
                children: [
                    '/classic-fantasy/',
                    '/classic-fantasy/player-characters',
                ]
            },
            {
                title: 'Дополненное фэнтези',
                children: [
                    '/advanced-fantasy/'
                ]
            }
        ]
    }
}
