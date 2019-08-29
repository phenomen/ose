module.exports = {
  docsDir: 'docs',
  lang: 'ru-RU',
  title: 'Old-School Essentials',
  description: 'Версия на русском языке',
  themeConfig: {
    nav: [
      { text: 'Основы', link: '/core/' },
      { text: 'Фэнтези', link: '/fantasy/' },
      { text: 'Магия', link: '/magic/' },
      { text: 'Монстры', link: '/monsters/' },
      { text: 'Сокровища', link: '/treasures/' }
    ],
    sidebar: [
      {
        title: 'Классические правила',
        children: [
      '/core/',
      '/fantasy/',
      '/magic/',
      '/monsters/',
      '/treasures/'
                  ]
       },
       {
         title: 'Расширенные правила',
         children: [
       '/advanced-fantasy/',
       '/advanced-magic/'
                   ]
        }

     ]
  }
}
