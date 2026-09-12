import { routes } from './data.js';
import { renderPage } from './render.js';

function normalizeRoute(hashValue) {
    const route = hashValue.replace('#', '').trim();

    if (route === 'map') {
        return 'about';
    }

    return route || 'home';
}

export function initRouter({ appElement, navElement, menuToggleButton }) {
    const state = {
        route: 'home',
        heroQuery: '',
        itemQuery: '',
        itemCategory: 'all',
    };

    function setActiveNav() {
        const links = navElement.querySelectorAll('.nav-link');
        links.forEach((link) => {
            const isActive = link.dataset.route === state.route;
            if (isActive) {
                link.setAttribute('aria-current', 'page');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    }

    function render() {
        appElement.innerHTML = renderPage(state.route, state);
        setActiveNav();
    }

    function syncRoute() {
        const nextRoute = normalizeRoute(window.location.hash);
        state.route = routes[nextRoute] ? nextRoute : 'home';
        render();
    }

    appElement.addEventListener('input', (event) => {
        if (event.target.id === 'hero-search') {
            state.heroQuery = event.target.value;
            render();
            return;
        }

        if (event.target.id === 'item-search') {
            state.itemQuery = event.target.value;
            render();
        }
    });

    appElement.addEventListener('change', (event) => {
        if (event.target.id === 'item-category') {
            state.itemCategory = event.target.value;
            render();
        }
    });

    menuToggleButton.addEventListener('click', () => {
        const isOpen = navElement.dataset.open === 'true';
        navElement.dataset.open = String(!isOpen);
        menuToggleButton.setAttribute('aria-expanded', String(!isOpen));
    });

    navElement.addEventListener('click', (event) => {
        if (!(event.target instanceof HTMLElement) || !event.target.classList.contains('nav-link')) {
            return;
        }

        navElement.dataset.open = 'false';
        menuToggleButton.setAttribute('aria-expanded', 'false');
    });

    window.addEventListener('hashchange', syncRoute);

    syncRoute();
}
