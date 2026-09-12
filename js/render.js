import { about, guides, heroes, items } from './data.js';

function normalize(value) {
    return value.trim().toLowerCase();
}

function escapeHtml(value) {
    return String(value ?? '')
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
}

function renderHeroCards(query) {
    const filtered = heroes.filter((hero) => normalize(hero.name).includes(normalize(query)));

    if (!filtered.length) {
        return '<p class="empty-state">Ничего не найдено. Попробуйте другой запрос.</p>';
    }

    return `<div class="grid">${filtered
        .map(
            (hero) => `
                <article class="card media-card">
                    <img src="${hero.image}" alt="${hero.name}">
                    <h3>${hero.name}</h3>
                    <p>Оптимальная линия: ${hero.lane}</p>
                    <div class="card-meta">
                        <span class="pill">${hero.type}</span>
                        <span class="pill">Сложность: ${hero.complexity}</span>
                    </div>
                </article>`,
        )
        .join('')}</div>`;
}

function renderItemCards(query, category) {
    const normalizedQuery = normalize(query);
    const filtered = items.filter((item) => {
        const matchQuery = normalize(item.name).includes(normalizedQuery);
        const matchCategory = category === 'all' || item.category === category;
        return matchQuery && matchCategory;
    });

    if (!filtered.length) {
        return '<p class="empty-state">Нет предметов под такие параметры поиска.</p>';
    }

    return `<div class="grid">${filtered
        .map(
            (item) => `
                <article class="card">
                    <h3>${item.name}</h3>
                    <p>Рекомендуемый тайминг: ${item.timing}</p>
                    <div class="card-meta">
                        <span class="pill">${item.category}</span>
                        <span class="pill">${item.cost} золота</span>
                    </div>
                </article>`,
        )
        .join('')}</div>`;
}

export function renderPage(route, state) {
    if (route === 'heroes') {
        return `
            <section>
                <header class="section-header">
                    <h1>Герои Dota 2</h1>
                    <p>Подборка популярных героев с базовыми характеристиками по роли и сложности.</p>
                </header>
                <div class="filters">
                    <label>
                        <span class="visually-hidden">Поиск по героям</span>
                        <input id="hero-search" type="search" placeholder="Найти героя (например, Invoker)" value="${escapeHtml(state.heroQuery)}">
                    </label>
                </div>
                ${renderHeroCards(state.heroQuery)}
            </section>`;
    }

    if (route === 'items') {
        const categories = ['all', ...new Set(items.map((item) => item.category))];

        return `
            <section>
                <header class="section-header">
                    <h1>Предметы</h1>
                    <p>Базовый справочник по предметам с фильтрацией по категории и названию.</p>
                </header>
                <div class="filters">
                    <label>
                        <span class="visually-hidden">Поиск по предметам</span>
                        <input id="item-search" type="search" placeholder="Найти предмет" value="${escapeHtml(state.itemQuery)}">
                    </label>
                    <label>
                        <span class="visually-hidden">Фильтр категорий</span>
                        <select id="item-category">
                            ${categories
                                .map(
                                    (category) =>
                                        `<option value="${category}" ${state.itemCategory === category ? 'selected' : ''}>${
                                            category === 'all' ? 'Все категории' : category
                                        }</option>`,
                                )
                                .join('')}
                        </select>
                    </label>
                </div>
                ${renderItemCards(state.itemQuery, state.itemCategory)}
            </section>`;
    }

    if (route === 'guides') {
        return `
            <section>
                <header class="section-header">
                    <h1>Роли и гайды</h1>
                    <p>Короткие рекомендации по каждой позиции для удобного старта.</p>
                </header>
                <div class="grid">
                    ${guides
                        .map(
                            (guide) => `
                                <article class="card">
                                    <h3>${guide.role}</h3>
                                    <p>${guide.summary}</p>
                                </article>`,
                        )
                        .join('')}
                </div>
            </section>`;
    }

    if (route === 'about') {
        return `
            <section>
                <header class="section-header">
                    <h1>О Dota 2</h1>
                    <p>${about.lead}</p>
                </header>
                <div class="map-block">
                    <img src="${about.mapImage}" alt="Карта Dota 2">
                    <div class="card">
                        <h2>Ключевые факты</h2>
                        <ul>
                            ${about.facts.map((fact) => `<li>${fact}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </section>`;
    }

    return `
        <section>
            <header class="section-header">
                <h1>Dota 2 Wiki</h1>
                <p>Современный справочник по игре: герои, предметы, роли, базовые гайды и карта.</p>
            </header>
            <div class="grid">
                <article class="card media-card">
                    <img src="images/dota2_preview.jpeg.webp" alt="Арт Dota 2">
                    <h2>Быстрый старт</h2>
                    <p>Выберите раздел в меню и используйте фильтры, чтобы быстро найти нужную информацию.</p>
                </article>
                <article class="card">
                    <h2>Что внутри Wiki</h2>
                    <p>Справочник по героям, предметам, игровым ролям и основам карты в едином стиле.</p>
                </article>
                <article class="card">
                    <h2>Архитектура</h2>
                    <p>Проект разделён на модули данных, рендера и роутинга для простого расширения.</p>
                </article>
            </div>
        </section>`;
}
