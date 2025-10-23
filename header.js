// header.js
export function loadHeader() {
   const headerHTML = `
<header id="header" class="relative flex flex-wrap w-full h-[650px] bg-[#040a31] bg-cover bg-center content-start justify-between px-4 md:px-0  scroll-mt-20 md:scroll-mt-24" 
style="background-image: url('relaseassets/bg.jpg');">
    
    <!-- Üst Satır: Logo ve Navigasyon -->
<div id="navbar" class="flex w-full items-center justify-between transition-all duration-500 ease-in-out fixed top-0 left-0 right-0 z-[1000] bg-[rgba(4,10,49,0.95)] ">
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
        
<nav id="menu" class="fixed md:static top-0 right-0 h-screen bg-[rgba(4,10,49,0.95)] md:h-auto w-80 md:w-auto md:bg-transparent transform translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out z-40 md:mr-8 lg:mr-12 shadow-2xl md:shadow-none">
    <ul class="flex flex-col md:flex-row items-stretch md:items-center gap-0 md:gap-1 text-white text-base md:text-sm lg:text-base font-medium pt-24 md:pt-0 px-0 md:px-0">
        
        <!-- Ana Sayfa -->
        <li class="relative group">
            <a href="#header" class="menu-link flex items-center justify-start md:justify-center gap-3 px-8 py-5 md:px-6 md:py-4 lg:px-8 lg:py-4 transition-all duration-300 border-l-4 md:border-l-0 md:border-b-2 border-transparent hover:border-[#2563eb] hover:bg-gray-50 md:hover:bg-transparent relative">
                <span class="font-semibold tracking-wide">Ana Sayfa</span>
                <!-- Desktop hover indicator -->
                <div class="hidden md:block absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563eb] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </a>
        </li>
        
        <!-- Hakkımızda -->
        <li class="relative group border-t border-gray-100 md:border-0">
            <a href="#about" class="menu-link flex items-center justify-start md:justify-center gap-3 px-8 py-5 md:px-6 md:py-4 lg:px-8 lg:py-4 transition-all duration-300 border-l-4 md:border-l-0 md:border-b-2 border-transparent hover:border-[#2563eb] hover:bg-gray-50 md:hover:bg-transparent relative">
                <span class="font-semibold tracking-wide">Hakkımızda</span>
                <!-- Desktop hover indicator -->
                <div class="hidden md:block absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563eb] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </a>
        </li>
        <!-- İletişim -->
        <li class="relative group border-t border-gray-100 md:border-0">
            <a href="#contact" class="menu-link flex items-center justify-start md:justify-center gap-3 px-8 py-5 md:px-6 md:py-4 lg:px-8 lg:py-4 transition-all duration-300 border-l-4 md:border-l-0 md:border-b-2 border-transparent hover:border-[#2563eb] hover:bg-gray-50 md:hover:bg-transparent relative">
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

  // Bizi Keşfedin Butonu
  document.getElementById('discoverBtn').addEventListener('click', () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
          const offset = 96;
          const targetPosition = aboutSection.getBoundingClientRect().top + window.pageYOffset - offset;
          
          window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
          });
      }
  });

  // Hamburger Menü Toggle
  const menuToggle = document.getElementById('menuToggle');
  const menu = document.getElementById('menu');
  const menuOverlay = document.getElementById('menuOverlay');
  const hamburgerLines = menuToggle.querySelectorAll('.hamburger-line');

  function toggleMenu() {
      const isOpen = !menu.classList.contains('translate-x-full');
      
      if (isOpen) {
          // Menüyü kapat
          menu.classList.add('translate-x-full');
          menuOverlay.classList.add('hidden');
          document.body.style.overflow = '';
          
          // Hamburger animasyonunu geri al
          hamburgerLines[0].style.transform = '';
          hamburgerLines[1].style.opacity = '';
          hamburgerLines[2].style.transform = '';
      } else {
          // Menüyü aç
          menu.classList.remove('translate-x-full');
          menuOverlay.classList.remove('hidden');
          document.body.style.overflow = 'hidden';
          
          // Hamburger'ı X'e çevir
        hamburgerLines[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        hamburgerLines[1].style.opacity = '0';
        hamburgerLines[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
      }
  }

  // Hamburger butonuna tıklama
  menuToggle.addEventListener('click', toggleMenu);

  // Overlay'e tıklama
  menuOverlay.addEventListener('click', toggleMenu);

  // Menü linklerine tıklama (mobilde menüyü kapat)
  const menuLinks = document.querySelectorAll('.menu-link');
  menuLinks.forEach(link => {
      link.addEventListener('click', () => {
          if (window.innerWidth < 768) {
              toggleMenu();
          }
      });
  });

  // Ekran boyutu değiştiğinde menüyü kapat
  window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
          menu.classList.add('translate-x-full');
          menuOverlay.classList.add('hidden');
          document.body.style.overflow = '';
          
          hamburgerLines[0].style.transform = '';
          hamburgerLines[1].style.opacity = '';
          hamburgerLines[2].style.transform = '';
      }
  });
}