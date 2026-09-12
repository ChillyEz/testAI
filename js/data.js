export const routes = {
    home: 'Главная',
    heroes: 'Герои',
    items: 'Предметы',
    guides: 'Роли и гайды',
    about: 'О игре',
};

export const heroes = [
    { name: 'Invoker', lane: 'Mid', type: 'Дальний бой', complexity: 'Высокая', image: 'images/dota2_preview.jpeg.webp' },
    { name: 'Axe', lane: 'Offlane', type: 'Ближний бой', complexity: 'Низкая', image: 'images/icon.png' },
    { name: 'Crystal Maiden', lane: 'Support', type: 'Дальний бой', complexity: 'Средняя', image: 'images/icon.png' },
    { name: 'Juggernaut', lane: 'Carry', type: 'Ближний бой', complexity: 'Средняя', image: 'images/icon.png' },
    { name: 'Puck', lane: 'Mid', type: 'Дальний бой', complexity: 'Высокая', image: 'images/icon.png' },
    { name: 'Mars', lane: 'Offlane', type: 'Ближний бой', complexity: 'Средняя', image: 'images/icon.png' },
];

export const items = [
    { name: 'Blink Dagger', cost: 2250, category: 'Инициация', timing: '10-18 мин' },
    { name: 'Black King Bar', cost: 4050, category: 'Защита', timing: '18-28 мин' },
    { name: 'Aghanim’s Scepter', cost: 4200, category: 'Усиление', timing: '20-32 мин' },
    { name: 'Glimmer Cape', cost: 2150, category: 'Поддержка', timing: '12-20 мин' },
    { name: 'Manta Style', cost: 4650, category: 'Carry', timing: '20-30 мин' },
    { name: 'Lotus Orb', cost: 3850, category: 'Защита', timing: '18-30 мин' },
];

export const guides = [
    {
        role: 'Carry',
        summary: 'Фокус на фарме, безопасном позиционировании и выходе в ключевые артефакты к 20-25 минуте.',
    },
    {
        role: 'Mid',
        summary: 'Контроль рун, быстрый темп и активные перемещения по карте после 6 уровня.',
    },
    {
        role: 'Offlane',
        summary: 'Создание пространства, инициация драки и сбор предметов на выживаемость/ауру.',
    },
    {
        role: 'Soft Support',
        summary: 'Ротации, вижен, работа с темпом игры и помощь по линиям.',
    },
    {
        role: 'Hard Support',
        summary: 'Стабильный вижен, сейв ключевого кора и контроль нейтральных объектов.',
    },
];

export const about = {
    lead: 'Dota 2 — соревновательная MOBA 5 на 5, где успех зависит от командной синергии, грамотной экономики и таймингов.',
    facts: [
        'Матч проходит на одной карте с тремя линиями и лесом для каждой стороны.',
        'Цель игры — уничтожить вражеский Ancient.',
        'Ключевые объекты: Roshan, башни, аванпосты и руны.',
    ],
    mapImage: 'images/dota2_map.png',
};
