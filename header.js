// header.js
export function loadHeader() {
   const headerHTML = `
<header id="header" class="relative flex flex-wrap w-full h-[650px] bg-[#040a31] bg-cover bg-center content-start justify-between px-4 md:px-0" 
style="background-image: url('relaseassets/bg.jpg');">
    
    <!-- Üst Satır: Logo ve Navigasyon -->
    <div id="navbar" class="flex w-full items-center justify-between transition-all duration-500 ease-in-out">
<!-- Logo - Solda -->
<div class="flex h-[100px] items-center md:ml-[200px] ml-4"> 
    <img src="assets/reallogo.png" 
        alt="Yildirim Group" 
        class="h-28 md:h-32 lg:h-36 w-auto">
</div>
        
        <!-- Hamburger Menu Button - Mobile Only -->
        <button id="menuToggle" class="md:hidden mr-4 z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 relative">
            <span class="hamburger-line w-6 h-0.5 bg-white transition-all duration-300 rounded-full"></span>
            <span class="hamburger-line w-6 h-0.5 bg-white transition-all duration-300 rounded-full"></span>
            <span class="hamburger-line w-6 h-0.5 bg-white transition-all duration-300 rounded-full"></span>
        </button>
        
        <nav id="menu" class="fixed md:static top-0 right-0 h-screen md:h-20 w-72 md:w-auto bg-[#0a2540]/95 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none transform translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out z-40 md:mr-8 lg:mr-12 shadow-2xl md:shadow-none">
            <ul class="flex flex-col md:flex-row text-white md:text-[#16509f] text-base md:text-sm lg:text-base font-medium gap-0 md:gap-2 pt-24 md:pt-0 px-4 md:px-0 mt-2">
                
                <!-- Ana Sayfa -->
                <li class="md:bg-white transition-all duration-300 hover:bg-white/10 md:hover:bg-gray-200 md:hover:shadow-md border-b border-white/10 md:border-0 md:min-w-[120px] lg:min-w-[140px]">
                    <a href="#header" class="flex items-center justify-start md:justify-center hover:text-blue-300 md:hover:text-gray-600 transition-colors whitespace-nowrap tracking-wide w-full p-4 md:p-4 lg:p-5">
                        ANA SAYFA
                    </a>
                </li>
                
                <!-- Hakkımızda -->
                <li class="md:bg-white transition-all duration-300 hover:bg-white/10 md:hover:bg-gray-200 md:hover:shadow-md border-b border-white/10 md:border-0 md:min-w-[120px] lg:min-w-[140px]">
                    <a href="#about" class="flex items-center justify-start md:justify-center hover:text-blue-300 md:hover:text-gray-600 transition-colors whitespace-nowrap tracking-wide w-full p-4 md:p-4 lg:p-5">
                        HAKKIMIZDA
                    </a>
                </li>
                
                <!-- İletişim -->
                <li class="md:bg-white transition-all duration-300 hover:bg-white/10 md:hover:bg-gray-200 md:hover:shadow-md border-b border-white/10 md:border-0 md:min-w-[120px] lg:min-w-[140px]">
                    <a href="#contact" class="flex items-center justify-start md:justify-center hover:text-blue-300 md:hover:text-gray-600 transition-colors whitespace-nowrap tracking-wide w-full p-4 md:p-4 lg:p-5">
                        İLETİŞİM
                    </a>
                </li>
                
            </ul>
        </nav>


        <!-- Overlay - Mobile Menu Açıkken -->
        <div id="menuOverlay" class="hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"></div>
    </div>

    <!-- Bizi Keşfedin Butonu - En Alt Sol -->
    <div class="absolute bottom-0 right-0 w-full md:w-auto">
        <button id="discoverBtn" class="flex items-center justify-between bg-[#27293d] w-full md:w-[400px] lg:w-[600px] text-white font-bold px-6 md:px-8 py-4 md:py-6 transition-all duration-300 hover:shadow-xl md:hover:scale-105 group">
            <span class="text-sm md:text-base lg:text-lg tracking-wide">BİZİ KEŞFEDİN</span>
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

const navbar = document.getElementById('navbar');
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
        }
    }
});
}
