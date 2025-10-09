import { loadHeader } from './header.js';
import { loadFooter } from './footer.js';
import { loadAbout } from './about.js';
import { loadworkUs } from './workus.js';

window.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadAbout();
    loadworkUs();
    loadFooter();

});
