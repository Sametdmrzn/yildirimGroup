// header.js
export function loadHeader() {
  const headerHTML = `
<header id="header" class="relative flex w-full h-24 bg-[url('assets/images/header/Tepebanner.jpg')] bg-cover bg-center items-center justify-between px-8">
  <div class="flex items-center"> 
    <img src="assets/images/header/logo.png" alt="Yildirim Group" class="h-16">
  </div>

  <button id="menu-btn" class="text-white md:hidden focus:outline-none z-50 text-3xl">&#9776;</button>

  <nav id="menu" class="fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform -translate-x-80 transition-transform duration-300
    md:relative md:translate-x-0 md:flex md:items-center md:justify-end md:bg-transparent md:h-20 md:w-full z-40">
    <ul style="font-family:'Mulish',sans-serif;" class="flex flex-col md:flex-row gap-5 p-4 md:p-0 text-[#222222] text-[15px] font-medium font-mulish text-black md:text-white mr-12 mt-4">
      <li class="flex">
        <a href="#" class="hover:text-gray-500 transition-colors font-mulish">ABOUT US</a>
        <svg class="w-5 h-5 ml-2 transition-transform duration-300 md:hidden" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
        </svg>
      </li>
      <li class='flex'>
        <a href="#" class="hover:text-gray-500 transition-colors">SUBSIDIARIES</a>
                <svg class="w-5 h-5 ml-2 transition-transform duration-300 md:hidden" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
        </svg>
      </li>
      <li class='flex'>
        <a href="#" class="hover:text-gray-500 transition-colors">SUSTAINABILITY</a>
                <svg class="w-5 h-5 ml-2 transition-transform duration-300 md:hidden" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
        </svg>
      </li>
    </ul>
  </nav>
</header>




  `;
  document.body.insertAdjacentHTML('afterbegin', headerHTML);

  // Hamburger menü davranışı
  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');
  const icons = document.querySelectorAll("#menu li svg"); // tüm svg'ler

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('-translate-x-80');
    icons.forEach(icon => icon.classList.toggle("rotate-90"));
  });

}
