import { initRouter } from './js/router.js';

const appElement = document.getElementById('app');
const navElement = document.getElementById('site-nav');
const menuToggleButton = document.querySelector('.menu-toggle');

initRouter({ appElement, navElement, menuToggleButton });
