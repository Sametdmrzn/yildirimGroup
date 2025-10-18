// header.js
export function loadHeader() {
  const headerHTML = `
<header id="header" class="relative flex flex-wrap w-full h-[650px] bg-[#040a31] bg-cover bg-center content-start justify-between px-4 md:px-0" 
style="background-image: url('assets/images/header/headerbg.png');">
    
    <!-- Üst Satır: Logo ve Navigasyon -->
    <div id="navbar" class="flex w-full items-center justify-between transition-all duration-500 ease-in-out">
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
        const offset = 96; // 96 pixel yukarıda dur
        const targetPosition = aboutSection.getBoundingClientRect().top + window.pageYOffset - offset;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
});
let lastScrollY = window.pageYOffset;
const navbar = document.getElementById('navbar');
const header = document.getElementById('header');
const scrollThreshold = 10; // Kaç pixel scroll'dan sonra sticky olacak

window.addEventListener('scroll', function() {
    const currentScrollY = window.pageYOffset;
    
    if (currentScrollY > scrollThreshold) {
        // Navbar'ı sticky yap
        if (!navbar.classList.contains('navbar-fixed')) {
            navbar.classList.add('navbar-fixed');
            navbar.style.position = 'fixed';
            navbar.style.top = '0';
            navbar.style.left = '0';
            navbar.style.right = '0';
            navbar.style.zIndex = '1000';
            navbar.style.backgroundColor = 'rgba(4, 10, 49, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            navbar.style.padding = '0.5rem 1rem';
            
            // Logo küçült
            const logo = navbar.querySelector('img');
            if (logo) {
                logo.style.height = '2.5rem'; // h-10
            }
        }
    } else {
        // Navbar'ı normale döndür
        if (navbar.classList.contains('navbar-fixed')) {
            navbar.classList.remove('navbar-fixed');
            navbar.style.position = '';
            navbar.style.top = '';
            navbar.style.left = '';
            navbar.style.right = '';
            navbar.style.zIndex = '';
            navbar.style.backgroundColor = '';
            navbar.style.backdropFilter = '';
            navbar.style.boxShadow = '';
            navbar.style.padding = '';
            
            // Logo normal boyut
            const logo = navbar.querySelector('img');
            if (logo) {
                logo.style.height = '3.5rem'; // h-14
            }
        }
    }
    
    lastScrollY = currentScrollY;
});


}
