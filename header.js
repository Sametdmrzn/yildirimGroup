// header.js
export function loadHeader() {
  const headerHTML = `
<header id="header" class="relative flex flex-wrap w-full h-[650px] bg-[#040a31] bg-cover bg-center content-start justify-between px-4 md:px-0" 
style="background-image: url('assets/images/header/headerbg.png');">
    
    <!-- Üst Satır: Logo ve Navigasyon -->
    <div class="flex w-full items-center justify-between">
        <!-- Logo - Solda -->
        <div class="flex h-[80px] items-center md:ml-[200px] ml-4"> 
            <img src="" alt="Yildirim Group" class="h-14 w-auto">
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
    </div>

<!-- Bizi Keşfedin Butonu - En Alt Sol -->
<div class="absolute bottom-0 left-0 w-full md:w-auto">
    <button id="discoverBtn" class="flex items-center justify-between bg-[#27293d] w-full md:w-[400px] lg:w-[600px] text-white font-semibold px-6 md:px-8 py-4 md:py-6 transition-all duration-300 hover:shadow-xl md:hover:scale-105 group">
        <span href="#" class="text-sm md:text-base lg:text-lg tracking-wide">BİZİ KEŞFEDİN</span>
        <div class="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white rounded-full transition-transform duration-300 group-hover:translate-x-2">
            <i class="fa fa-angle-right text-black text-base md:text-lg"></i>
        </div>
    </button>
</div>
</header>




  `;
  document.body.insertAdjacentHTML('afterbegin', headerHTML);

  document.getElementById('discoverBtn').addEventListener('click', () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });

}
