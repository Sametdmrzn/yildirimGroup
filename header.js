// header.js
export function loadHeader() {
  const headerHTML = `
<header id="header" class="relative flex w-full h-[650px] bg-[#040a31] bg-cover bg-center items-start justify-between px-4 md:px-0" 
style="background-image: url('assets/header.png');">
    <!-- Logo - Solda -->
    <div class="flex h-[80px] items-center md:ml-[200px] ml-4"> 
        <img src="assets/logo.png" alt="Yildirim Group" class="h-14 w-auto">
    </div>
    
<!-- Navigasyon - Desktop Optimized -->
<nav id="menu" class="flex items-center justify-end bg-transparent h-20 w-auto mr-4 md:mr-8 lg:mr-12">
    <ul class="flex flex-row text-[#16509f] text-xs md:text-sm lg:text-base font-medium gap-1 md:gap-2">
        <li class="flex items-center justify-center bg-white transition-all duration-300 hover:bg-gray-200 hover:shadow-md p-3 md:p-4 lg:p-5 min-w-[88px] md:min-w-[120px] lg:min-w-[140px]">
            <a href="#" class="hover:text-gray-600 transition-colors whitespace-nowrap tracking-wide">ANA SAYFA</a>
        </li>
        <li class="flex items-center justify-center bg-white transition-all duration-300 hover:bg-gray-200 hover:shadow-md p-3 md:p-4 lg:p-5 min-w-[88px] md:min-w-[120px] lg:min-w-[140px]">
            <a href="#" class="hover:text-gray-600 transition-colors whitespace-nowrap tracking-wide">HAKKIMIZDA</a>
        </li>
        <li class="flex items-center justify-center bg-white transition-all duration-300 hover:bg-gray-200 hover:shadow-md p-3 md:p-4 lg:p-5 min-w-[88px] md:min-w-[120px] lg:min-w-[140px]">
            <a href="#" class="hover:text-gray-600 transition-colors whitespace-nowrap tracking-wide">İLETİŞİM</a>
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
