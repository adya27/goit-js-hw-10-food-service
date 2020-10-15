import menu from './menu.json';
import markupTmpl from './templates/menu-cards.hbs';

const menuItem = document.querySelector('.js-menu');

menuItem.insertAdjacentHTML('afterbegin', markupTmpl({ menu }));
