// header.js
export function loadHeader() {
    const headerHTML = `
    <header id='header' class="relative flex w-full h-24 bg-[url('assets/header/Tepebanner.jpg')] bg-cover bg-center items-center justify-between px-8">
      <div class="flex items-center">
        <img src="assets/header/logo.png" alt="Yildirim Group" class="h-16">
      </div>
      <button id="menu-btn" class="text-white md:hidden focus:outline-none z-50 text-3xl">&#9776;</button>
    </header>
    <nav id="menu" class="fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform -translate-x-80 transition-transform duration-300
    md:relative md:translate-x-0 md:flex md:items-center md:justify-end md:bg-transparent md:h-20 md:w-full z-40">
      <ul style="font-family:'Mulish',sans-serif;" class="flex flex-col md:flex-row gap-5 p-4 md:p-0 text-[#222222] text-[15px] font-medium font-mulish md:text-black mr-12 mt-4">
        <li><a href="#" class="hover:text-gray-500 transition-colors font-mulish">ABOUT US</a></li>
        <li><a href="#" class="hover:text-gray-500 transition-colors">SUBSIDIARIES</a></li>
        <li><a href="#" class="hover:text-gray-500 transition-colors">SUSTAINABILITY</a></li>
      </ul>
    </nav>
  `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // Hamburger menü davranışı
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('-translate-x-80');
    });
}
