import { defineConfig } from 'vitepress';
import { SidebarCharacters, SidebarAdventures, SidebarMagic, SidebarMonsters, SidebarTreasures, SidebarExtras } from './sidebar.js';
import { Nav } from './nav.js';

export default defineConfig({
	lang: 'ru-RU',
	title: 'OSE SRD',
	description: 'Old School Essentials на русском языке.',
	head: [
		['link', { rel: 'icon', type: 'image/png', href: '/icon.png' }],
		['script', { src: '/_vercel/insights/script.js' }],
	],

	cleanUrls: true,

	locales: {
		root: {
			label: 'Русский',
			lang: 'ru',
		},
	},

	themeConfig: {
		siteTitle: 'OSE SRD',
		logo: '/icon.png',
		sidebar: {
			'/characters/': SidebarCharacters,
			'/magic/': SidebarMagic,
			'/adventures/': SidebarAdventures,
			'/monsters/': SidebarMonsters,
			'/treasures/': SidebarTreasures,
			'/extras/': SidebarExtras,
		},
		nav: Nav,
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/phenomen/ose' },
			{ icon: 'discord', link: 'https://discord.gg/ubQxUs5' },
		],
		footer: {
			message:
				'Old-School Essentials is a trademark of Necrotic Gnome.<br/>The trademark and Old-School Essentials logo are used with permission of Necrotic Gnome, under license',
			copyright: '<a href="/extras/ogl">Open Game Licence 1.0a</a>',
		},
		docFooter: {
			prev: 'Назад',
			next: 'Далее',
		},
		outline: [2, 3],
		outlineTitle: 'На странице',
		darkModeSwitchLabel: 'Оформление',
		sidebarMenuLabel: 'Содержание',
		returnToTopLabel: 'Наверх',
		i18nRouting: false,
		search: {
			provider: 'local',
			options: {
				locales: {
					root: {
						translations: {
							button: {
								buttonText: 'Поиск',
								buttonAriaLabel: 'Поиск',
							},
							modal: {
								noResultsText: 'Ничего не найдено для',
								resetButtonTitle: 'Очистить',
								displayDetails: 'Развёрнутый список',
								footer: {
									selectText: 'выбрать',
									navigateText: 'навигация',
									closeText: 'закрыть',
								},
							},
						},
					},
				},
			},
		},
		//offlineSearch: true,
	},
});
