export const SidebarCharacters = [
	{
		text: 'Книга «Персонажи»',
		link: '/characters/',
		items: [
			{
				text: '1. Введение',
				collapsed: true,
				items: [
					{
						text: 'Об Old-School Essentials',
						link: '/characters/introduction/about-the-game',
					},
					{
						text: 'Классическое фэнтези',
						link: '/characters/introduction/classic-fantasy-gaming',
					},
					{
						text: 'Терминология',
						link: '/characters/introduction/terminology',
					},
					{
						text: 'Совместимость правил',
						link: '/characters/introduction/compatibility',
					},
				],
			},
			{
				text: '2. Персонажи игроков',
				collapsed: true,
				items: [
					{
						text: 'Описание атрибутов',
						link: '/characters/player-characters/game-statistics',
					},
					{
						text: 'Создание персонажа',
						link: '/characters/player-characters/creating-character',
					},
					{
						text: 'Характеристики',
						link: '/characters/player-characters/ability-scores',
					},
					{
						text: 'Мировоззрение',
						link: '/characters/player-characters/alignment',
					},
					{
						text: 'Языки',
						link: '/characters/player-characters/languages',
					},
				],
			},
			{
				text: '3. Классы персонажей',
				collapsed: true,
				items: [
					{
						text: 'Воин',
						link: '/characters/character-classes/fighter',
					},
					{
						text: 'Дворф',
						link: '/characters/character-classes/dwarf',
					},
					{
						text: 'Жрец',
						link: '/characters/character-classes/cleric',
					},
					{
						text: 'Маг',
						link: '/characters/character-classes/magic-user',
					},
					{
						text: 'Полурослик',
						link: '/characters/character-classes/halfling',
					},
					{
						text: 'Плут',
						link: '/characters/character-classes/thief',
					},
					{
						text: 'Эльф',
						link: '/characters/character-classes/elf',
					},
				],
			},
			{
				text: '4. Развитие',
				collapsed: true,
				items: [
					{
						text: 'Опыт',
						link: '/characters/advancement/experience',
					},
					{
						text: 'Титулы',
						link: '/characters/advancement/titles',
					},
					{
						text: 'Игра на высоких уровнях',
						link: '/characters/advancement/high-level-play',
					},
					{
						text: 'Богатство',
						link: '/characters/advancement/wealth',
					},
				],
			},
			{
				text: '5. Снаряжение',
				collapsed: true,
				items: [
					{
						text: 'Походное снаряжение',
						link: '/characters/equipment/adventuring-gear',
					},
					{
						text: 'Оружие и доспехи',
						link: '/characters/equipment/weapons-and-armour',
					},
				],
			},
			{
				text: '6. Транспорт',
				collapsed: true,
				items: [
					{
						text: 'Правила транспорта',
						link: '/characters/vehicles-and-mounts/rules-for-vehicles',
					},
					{
						text: 'Вьючный транспорт',
						link: '/characters/vehicles-and-mounts/animals-of-burden',
					},
					{
						text: 'Наземный транспорт',
						link: '/characters/vehicles-and-mounts/land-vehicles',
					},
					{
						text: 'Водный транспорт',
						link: '/characters/vehicles-and-mounts/water-vehicles',
					},
				],
			},
			{
				text: '7. Наёмная помощь',
				collapsed: true,
				items: [
					{
						text: 'Спутники',
						link: '/characters/hired-help/retainers',
					},
					{
						text: 'Наёмники',
						link: '/characters/hired-help/mercenaries',
					},
					{
						text: 'Специалисты',
						link: '/characters/hired-help/specialists',
					},
				],
			},
			{
				text: '8. Крепости',
				collapsed: true,
				items: [
					{
						text: 'Строительство',
						link: '/characters/strongholds/construction',
					},
					{
						text: 'Управление владениями',
						link: '/characters/strongholds/domain-management',
					},
					{
						text: 'Постройки',
						link: '/characters/strongholds/structures',
					},
				],
			},
		],
	},
];

export const SidebarMagic = [
	{
		text: 'Книга «Магия»',
		link: '/magic/',
		activeMatch: '/magic/',
		items: [
			{
				text: '1. Магия',
				collapsed: true,
				items: [
					{
						text: 'Заклинания',
						link: '/magic/magic/spells',
					},
					{
						text: 'Гримуары',
						link: '/magic/magic/spell-books',
					},
					{
						text: 'Магические изыскания',
						link: '/magic/magic/magical-research',
					},
				],
			},
			{
				text: '2. Божественные заклинания',
				collapsed: true,
				items: [
					{
						text: 'Божественные заклинания',
						link: '/magic/divine/divine-spells',
					},
					{
						text: 'Первый круг',
						link: '/magic/divine/divine-spells-1',
					},
					{
						text: 'Второй круг',
						link: '/magic/divine/divine-spells-2',
					},
					{
						text: 'Третий круг',
						link: '/magic/divine/divine-spells-3',
					},
				],
			},
			{
				text: '3. Мистические заклинания',
				collapsed: true,
				items: [
					{
						text: 'Мистические заклинания',
						link: '/magic/arcane/arcane-spells',
					},
					{
						text: 'Первый круг',
						link: '/magic/arcane/arcane-spells-1',
					},
					{
						text: 'Второй круг',
						link: '/magic/arcane/arcane-spells-2',
					},
				],
			},
		],
	},
];

export const SidebarAdventures = [
	{
		text: 'Книга «Приключения»',
		link: '/adventures/',
		items: [
			{
				text: '1. В приключениях',
				collapsed: true,
				items: [
					{
						text: 'Организация группы',
						link: '/adventures/adventuring/party-organization',
					},
					{
						text: 'Время, вес и передвижение',
						link: '/adventures/adventuring/time-weight-and-movement',
					},
					{
						text: 'Проверки характеристик',
						link: '/adventures/adventuring/ability-checks',
					},
					{
						text: 'Урон, лечение и смерть',
						link: '/adventures/adventuring/damage-healing-and-death',
					},
					{
						text: 'Испытания',
						link: '/adventures/adventuring/saving-throws',
					},
					{
						text: 'Опасности и затруднения',
						link: '/adventures/adventuring/hazards-and-challenges',
					},
					{
						text: 'Приключения в подземельях',
						link: '/adventures/adventuring/dungeon-adventuring',
					},
					{
						text: 'Приключения в дикой местности',
						link: '/adventures/adventuring/wilderness-adventuring',
					},
					{
						text: 'Приключения на воде',
						link: '/adventures/adventuring/waterborne-adventuring',
					},
				],
			},
			{
				text: '2. В столкновениях',
				collapsed: true,
				items: [
					{
						text: 'Столкновения',
						link: '/adventures/encounters/encounters',
					},
					{
						text: 'Побег и погоня',
						link: '/adventures/encounters/evasion-and-pursuit',
					},
					{
						text: 'Бой',
						link: '/adventures/encounters/combat',
					},
					{
						text: 'Ситуативные правила боя',
						link: '/adventures/encounters/other-combat-issues',
					},
					{
						text: 'Боевой дух',
						link: '/adventures/encounters/morale',
					},
					{
						text: 'Таблицы для боя',
						link: '/adventures/encounters/combat-tables',
					},
				],
			},
			{
				text: '3. Проведение игры',
				collapsed: true,
				items: [
					{
						text: 'Роль рефери',
						link: '/adventures/running-adventures/the-referees-role',
					},
					{
						text: 'Подход к игрокам',
						link: '/adventures/running-adventures/handling-pcs',
					},
					{
						text: 'Проведение игры',
						link: '/adventures/running-adventures/running-the-game',
					},
					{
						text: 'Чудовища и персонажи рефери',
						link: '/adventures/running-adventures/monsters-and-npcs',
					},
					{
						text: 'Создание сценариев',
						link: '/adventures/running-adventures/adventure-scenarios',
					},
					{
						text: 'Создание подземелий',
						link: '/adventures/running-adventures/designing-a-dungeon',
					},
					{
						text: 'Создание дикой местности',
						link: '/adventures/running-adventures/designing-a-wilderness',
					},
					{
						text: 'Создание поселений',
						link: '/adventures/running-adventures/designing-a-base-town',
					},
					{
						text: 'Награждение пунктами опыта',
						link: '/adventures/running-adventures/awarding-xp',
					},
				],
			},
		],
	},
];

export const SidebarMonsters = [
	{
		text: 'Книга «Чудовища»',
		link: '/monsters/',
		items: [
			{
				text: '1. Чудовища',
				collapsed: true,
				items: [
					{ text: 'Атрибуты чудовищ', link: '/monsters/monsters/game-statistics' },
					{ text: 'КЗ < 1', link: '/monsters/monsters/monsters-hd-0' },
					{ text: 'КЗ 1', link: '/monsters/monsters/monsters-hd-1' },
					{ text: 'КЗ 2', link: '/monsters/monsters/monsters-hd-2' },
				],
			},
			{
				text: '2. Столкновения с чудовищами',
				collapsed: true,
				items: [
					{
						text: 'Столкновения в подземельях',
						link: '/monsters/encounter-tables/dungeons',
					},
					{
						text: 'Столкновения в дикой местности',
						link: '/monsters/encounter-tables/wilderness',
					},
				],
			},
			{
				text: '3. Столкновения с персонажами',
				collapsed: true,
				items: [
					{
						text: 'Другие группы авантюристов',
						link: '/monsters/npc-encounters/adventuring-parties',
					},
					{
						text: 'Столкновения в крепостях',
						link: '/monsters/npc-encounters/strongholds',
					},
				],
			},
		],
	},
];

export const SidebarTreasures = [
	{
		text: 'Книга «Сокровища»',
		link: '/treasures/',
		items: [],
	},
];

export const SidebarExtras = [
	{
		text: 'Другое',
		items: [
			{ text: 'Open Game License', link: '/extras/ogl' },
			{ text: 'Бланки персонажей', link: '/extras/character-sheet' },
			{ text: 'Словарь перевода', link: '/extras/glossary' },
			{ text: 'Модули приключений', link: '/extras/adventures' },
		],
	},
];
