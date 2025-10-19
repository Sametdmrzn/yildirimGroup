// footer.js
export function loadFooter() {
  const footerHTML = `
<!-- Footer -->
<footer class="bg-[#0a2540] text-white">
    <div class="max-w-7xl mx-auto px-6 md:px-12 py-12">
        
        <!-- Main Footer Content -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-white/10">
            
            <!-- Company Info -->
            <div class="md:col-span-2">
                <h3 class="text-2xl font-bold mb-4">Yıldırım Group</h3>
                <p class="text-gray-300 leading-relaxed mb-6 max-w-md">
                    Yıldırım Group olarak, sektördeki öncü konumumuzu sağlamlaştırmak ve müşterilerimize en kaliteli hizmeti sunmak için çalışıyoruz.
                </p>
                <div class="flex items-start gap-2 text-gray-300">
                    <i class="fas fa-map-marker-alt mt-1"></i>
                    <span>İstanbul, Türkiye</span>
                </div>
            </div>

            <!-- Quick Links -->
            <div>
                <h4 class="text-lg font-semibold mb-4">Hızlı Erişim</h4>
                <ul class="space-y-3">
                    <li>
                        <a href="#header" id='homePageDirection' class="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                            <i class="fas fa-chevron-right text-xs"></i>
                            Ana Sayfa
                        </a>
                    </li>
                    <li>
                        <a href="#about" class="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                            <i class="fas fa-chevron-right text-xs"></i>
                            Hakkımızda
                        </a>
                    </li>
                    <li>
                        <a href="#contact" class="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                            <i class="fas fa-chevron-right text-xs"></i>
                            İletişim
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Contact Info -->
            <div>
                <h4 class="text-lg font-semibold mb-4">İletişim</h4>
                <ul class="space-y-4">
                    <li>
                        <a href="tel:+905319006605" class="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-3">
                            <i class="fas fa-phone text-blue-400"></i>
                            <span>+90 (531) 900 66 05</span>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:info@yildirimgroup.site" class="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-3">
                            <i class="fas fa-envelope text-blue-400"></i>
                            <span>info@yildirimgroup.site</span>
                        </a>
                    </li>
                </ul>
            </div>

        </div>

        <!-- Copyright -->
        <div class="pt-8 text-center">
            <p class="text-gray-400 text-sm">
                © 2025 Yıldırım Group. Tüm hakları saklıdır.
            </p>
        </div>

    </div>
</footer>
  `;
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Tüm # ile başlayan linkleri seç
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

}
