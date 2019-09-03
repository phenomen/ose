module.exports = {
    docsDir: 'docs',
    navbar: false,
    title: 'Old-School Essentials',
    description: 'Версия на русском языке',
    themeConfig: {
        sidebar: [{
                title: 'Классическое фэнтези',
                children: [
                    '/classic-fantasy/',
                    '/classic-fantasy/player-characters',
                    '/classic-fantasy/character-classes',
                ]
            },
            {
                title: 'Дополненное фэнтези',
                children: [
                    '/advanced-fantasy/'
                ]
            }
        ]
    },
    markdown: {
        anchor: {
            level: [1, 2, 3]
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
    }
}
