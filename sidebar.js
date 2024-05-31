export const SidebarCharacters = {
	label: "Книга «Персонажи»",
	collapsed: true,
	items: [
		{ label: "Содержание", link: "/characters/" },
		{
			label: "1. Введение",
			collapsed: true,
			items: [
				{
					label: "Об Old-School Essentials",
					link: "/characters/introduction/about-the-game/",
				},
				{
					label: "Классическое фэнтези",
					link: "/characters/introduction/classic-fantasy-gaming/",
				},
				{
					label: "Терминология",
					link: "/characters/introduction/terminology/",
				},
				{
					label: "Совместимость правил",
					link: "/characters/introduction/compatibility/",
				},
			],
		},
		{
			label: "2. Персонажи игроков",
			collapsed: true,
			items: [
				{
					label: "Описание атрибутов",
					link: "/characters/player-characters/game-statistics/",
				},
				{
					label: "Создание персонажа",
					link: "/characters/player-characters/creating-character/",
				},
				{
					label: "Характеристики",
					link: "/characters/player-characters/ability-scores/",
				},
				{
					label: "Мировоззрение",
					link: "/characters/player-characters/alignment/",
				},
				{
					label: "Языки",
					link: "/characters/player-characters/languages/",
				},
			],
		},
		{
			label: "3. Классы персонажей",
			collapsed: true,
			items: [
				{
					label: "Воин",
					link: "/characters/character-classes/fighter/",
				},
				{
					label: "Дварф",
					link: "/characters/character-classes/dwarf/",
				},
				{
					label: "Жрец",
					link: "/characters/character-classes/cleric/",
				},
				{
					label: "Маг",
					link: "/characters/character-classes/magic-user/",
				},
				{
					label: "Полурослик",
					link: "/characters/character-classes/halfling/",
				},
				{
					label: "Плут",
					link: "/characters/character-classes/thief/",
				},
				{
					label: "Эльф",
					link: "/characters/character-classes/elf/",
				},
			],
		},
		{
			label: "4. Развитие",
			collapsed: true,
			items: [
				{
					label: "Опыт",
					link: "/characters/advancement/experience/",
				},
				{
					label: "Титулы",
					link: "/characters/advancement/titles/",
				},
				{
					label: "Игра на высоких уровнях",
					link: "/characters/advancement/high-level-play/",
				},
				{
					label: "Богатство",
					link: "/characters/advancement/wealth/",
				},
			],
		},
		{
			label: "5. Снаряжение",
			collapsed: true,
			items: [
				{
					label: "Походное снаряжение",
					link: "/characters/equipment/adventuring-gear/",
				},
				{
					label: "Оружие и доспехи",
					link: "/characters/equipment/weapons-and-armour/",
				},
			],
		},
		{
			label: "6. Транспорт",
			collapsed: true,
			items: [
				{
					label: "Правила для транспорта",
					link: "/characters/vehicles-and-mounts/rules-for-vehicles/",
				},
				{
					label: "Вьючный транспорт",
					link: "/characters/vehicles-and-mounts/animals-of-burden/",
				},
				{
					label: "Наземный транспорт",
					link: "/characters/vehicles-and-mounts/land-vehicles/",
				},
				{
					label: "Водный транспорт",
					link: "/characters/vehicles-and-mounts/water-vehicles/",
				},
			],
		},
		{
			label: "7. Наёмная помощь",
			collapsed: true,
			items: [
				{
					label: "Спутники",
					link: "/characters/hired-help/retainers/",
				},
				{
					label: "Наёмники",
					link: "/characters/hired-help/mercenaries/",
				},
				{
					label: "Специалисты",
					link: "/characters/hired-help/specialists/",
				},
			],
		},
		{
			label: "8. Крепости",
			collapsed: true,
			items: [
				{
					label: "Строительство",
					link: "/characters/strongholds/construction/",
				},
				{
					label: "Управление владениями",
					link: "/characters/strongholds/domain-management/",
				},
				{
					label: "Постройки",
					link: "/characters/strongholds/structures/",
				},
			],
		},
	],
};

export const SidebarMagic = {
	label: "Книга «Магия»",
	collapsed: true,
	items: [
		{ label: "Содержание", link: "/magic/" },
		{
			label: "1. Магия",
			collapsed: true,
			items: [
				{
					label: "Заклинания",
					link: "/magic/magic/spells/",
				},
				{
					label: "Гримуары",
					link: "/magic/magic/spell-books/",
				},
				{
					label: "Магические изыскания",
					link: "/magic/magic/magical-research/",
				},
			],
		},
		{
			label: "2. Божественные заклинания",
			collapsed: true,
			items: [
				{
					label: "Список заклинаний",
					link: "/magic/divine/divine-spells/",
				},
				{
					label: "Первый круг",
					link: "/magic/divine/divine-spells-1/",
				},
				{
					label: "Второй круг",
					link: "/magic/divine/divine-spells-2/",
				},
				{
					label: "Третий круг",
					link: "/magic/divine/divine-spells-3/",
				},
			],
		},
		{
			label: "3. Мистические заклинания",
			collapsed: true,
			items: [
				{
					label: "Список заклинаний",
					link: "/magic/arcane/arcane-spells/",
				},
				{
					label: "Первый круг",
					link: "/magic/arcane/arcane-spells-1/",
				},
				{
					label: "Второй круг",
					link: "/magic/arcane/arcane-spells-2/",
				},
			],
		},
	],
};

export const SidebarAdventures = {
	label: "Книга «Приключения»",
	collapsed: true,
	items: [
		{ label: "Содержание", link: "/adventures/" },
		{
			label: "1. В приключениях",
			collapsed: true,
			items: [
				{
					label: "Организация группы",
					link: "/adventures/adventuring/party-organization/",
				},
				{
					label: "Время, вес и передвижение",
					link: "/adventures/adventuring/time-weight-and-movement/",
				},
				{
					label: "Проверки характеристик",
					link: "/adventures/adventuring/ability-checks/",
				},
				{
					label: "Урон, лечение и смерть",
					link: "/adventures/adventuring/damage-healing-and-death/",
				},
				{
					label: "Испытания",
					link: "/adventures/adventuring/saving-throws/",
				},
				{
					label: "Опасности и затруднения",
					link: "/adventures/adventuring/hazards-and-challenges/",
				},
				{
					label: "Приключения в подземельях",
					link: "/adventures/adventuring/dungeon-adventuring/",
				},
				{
					label: "Приключения в дикой местности",
					link: "/adventures/adventuring/wilderness-adventuring/",
				},
				{
					label: "Приключения на воде",
					link: "/adventures/adventuring/waterborne-adventuring/",
				},
			],
		},
		{
			label: "2. В столкновениях",
			collapsed: true,
			items: [
				{
					label: "Столкновения",
					link: "/adventures/encounters/encounters/",
				},
				{
					label: "Побег и погоня",
					link: "/adventures/encounters/evasion-and-pursuit/",
				},
				{
					label: "Бой",
					link: "/adventures/encounters/combat/",
				},
				{
					label: "Ситуативные правила боя",
					link: "/adventures/encounters/other-combat-issues/",
				},
				{
					label: "Боевой дух",
					link: "/adventures/encounters/morale/",
				},
				{
					label: "Таблицы для боя",
					link: "/adventures/encounters/combat-tables/",
				},
			],
		},
		{
			label: "3. Проведение игры",
			collapsed: true,
			items: [
				{
					label: "Роль рефери",
					link: "/adventures/running-adventures/the-referees-role/",
				},
				{
					label: "Подход к игрокам",
					link: "/adventures/running-adventures/handling-pcs/",
				},
				{
					label: "Ведение игры",
					link: "/adventures/running-adventures/running-the-game/",
				},
				{
					label: "Чудовища и персонажи рефери",
					link: "/adventures/running-adventures/monsters-and-npcs/",
				},
				{
					label: "Сценарии приключений",
					link: "/adventures/running-adventures/adventure-scenarios/",
				},
				{
					label: "Создание подземелий",
					link: "/adventures/running-adventures/designing-a-dungeon/",
				},
				{
					label: "Создание дикой местности",
					link: "/adventures/running-adventures/designing-a-wilderness/",
				},
				{
					label: "Создание стартового города",
					link: "/adventures/running-adventures/designing-a-base-town/",
				},
				{
					label: "Награждение пунктами опыта",
					link: "/adventures/running-adventures/awarding-xp/",
				},
			],
		},
	],
};

export const SidebarMonsters = {
	label: "Книга «Чудовища»",
	collapsed: true,
	items: [
		{ label: "Содержание", link: "/monsters/" },
		{
			label: "1. Чудовища",
			collapsed: true,
			items: [
				{
					label: "Атрибуты чудовищ",
					link: "/monsters/monsters/game-statistics/",
				},
				{ label: "КЗ < 1", link: "/monsters/monsters/monsters-hd-0/" },
				{ label: "КЗ 1", link: "/monsters/monsters/monsters-hd-1/" },
				{ label: "КЗ 2", link: "/monsters/monsters/monsters-hd-2/" },
			],
		},
		{
			label: "2. Столкновения с чудовищами",
			collapsed: true,
			items: [
				{
					label: "Столкновения в подземельях",
					link: "/monsters/encounter-tables/dungeons/",
				},
				{
					label: "Столкновения в дикой местности",
					link: "/monsters/encounter-tables/wilderness/",
				},
			],
		},
		{
			label: "3. Столкновения с персонажами",
			collapsed: true,
			items: [
				{
					label: "Конкурирующие группы авантюристов",
					link: "/monsters/npc-encounters/adventuring-parties/",
				},
				{
					label: "Столкновения в крепостях",
					link: "/monsters/npc-encounters/strongholds/",
				},
			],
		},
	],
};

export const SidebarTreasures = {
	label: "Книга «Сокровища»",
	collapsed: true,
	items: [
		{ label: "Содержание", link: "/treasures/" },
	],
};

export const SidebarExtras = {
	label: "Дополнительно",
	collapsed: true,
	items: [
		{ label: "Бланки персонажей", link: "/extras/character-sheet/" },
		{ label: "Словарь", link: "/extras/glossary/" },
		{ label: "Авторы перевода", link: "/extras/translators/" },
		{ label: "Open Game License", link: "/extras/ogl/" },
	],
};
