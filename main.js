// main.js
import { loadHeader } from './header.js';
import { loadFooter } from './footer.js';
import { loadAbout } from './about.js';
// Sayfa yüklendiğinde çalıştır
window.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadAbout();
    loadFooter();

});
