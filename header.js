// header.js
export function loadHeader() {
   const headerHTML = `
<header id="header" class="relative flex flex-wrap w-full h-[650px] bg-[#040a31] bg-cover bg-center content-start justify-between px-4 md:px-0  scroll-mt-20 md:scroll-mt-24" 
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
        
<nav id="menu" class="fixed md:static top-0 right-0 h-screen md:h-auto w-80 md:w-auto bg-white md:bg-transparent transform translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out z-40 md:mr-8 lg:mr-12 shadow-2xl md:shadow-none">
    <ul class="flex flex-col md:flex-row items-stretch md:items-center gap-0 md:gap-1 text-[#1e293b] text-base md:text-sm lg:text-base font-medium pt-24 md:pt-0 px-0 md:px-0">
        
        <!-- Ana Sayfa -->
        <li class="relative group">
            <a href="#header" class="flex items-center justify-start md:justify-center gap-3 px-8 py-5 md:px-6 md:py-4 lg:px-8 lg:py-4 transition-all duration-300 border-l-4 md:border-l-0 md:border-b-2 border-transparent hover:border-[#2563eb] hover:bg-gray-50 md:hover:bg-transparent relative">
                <i class="fas fa-home text-lg text-[#2563eb] md:hidden"></i>
                <span class="font-semibold tracking-wide">Ana Sayfa</span>
                <!-- Desktop hover indicator -->
                <div class="hidden md:block absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563eb] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </a>
        </li>
        
        <!-- Hakkımızda -->
        <li class="relative group border-t border-gray-100 md:border-0">
            <a href="#about" class="flex items-center justify-start md:justify-center gap-3 px-8 py-5 md:px-6 md:py-4 lg:px-8 lg:py-4 transition-all duration-300 border-l-4 md:border-l-0 md:border-b-2 border-transparent hover:border-[#2563eb] hover:bg-gray-50 md:hover:bg-transparent relative">
                <i class="fas fa-building text-lg text-[#2563eb] md:hidden"></i>
                <span class="font-semibold tracking-wide">Hakkımızda</span>
                <!-- Desktop hover indicator -->
                <div class="hidden md:block absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563eb] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </a>
        </li>
        
        <!-- Hizmetlerimiz -->
        <li class="relative group border-t border-gray-100 md:border-0">
            <a href="#services" class="flex items-center justify-start md:justify-center gap-3 px-8 py-5 md:px-6 md:py-4 lg:px-8 lg:py-4 transition-all duration-300 border-l-4 md:border-l-0 md:border-b-2 border-transparent hover:border-[#2563eb] hover:bg-gray-50 md:hover:bg-transparent relative">
                <i class="fas fa-briefcase text-lg text-[#2563eb] md:hidden"></i>
                <span class="font-semibold tracking-wide">Hizmetlerimiz</span>
                <!-- Desktop hover indicator -->
                <div class="hidden md:block absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563eb] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </a>
        </li>
        
        <!-- İletişim -->
        <li class="relative group border-t border-gray-100 md:border-0">
            <a href="#contact" class="flex items-center justify-start md:justify-center gap-3 px-8 py-5 md:px-6 md:py-4 lg:px-8 lg:py-4 transition-all duration-300 border-l-4 md:border-l-0 md:border-b-2 border-transparent hover:border-[#2563eb] hover:bg-gray-50 md:hover:bg-transparent relative">
                <i class="fas fa-envelope text-lg text-[#2563eb] md:hidden"></i>
                <span class="font-semibold tracking-wide">İletişim</span>
                <!-- Desktop hover indicator -->
                <div class="hidden md:block absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563eb] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
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

            const navLinks = navbar.querySelectorAll('nav ul li a span');

            navLinks.forEach(link => {
                link.style.color='#ffffff'
            })
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

            const navLinks = navbar.querySelectorAll('nav ul li a span');
            
                        navLinks.forEach(link => {
                link.style.color='#1e293b'
            })
        }
    }
});
}
