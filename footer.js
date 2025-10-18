// footer.js
export function loadFooter() {
  const footerHTML = `
<!-- Social Media Section - Footer Öncesi -->
<section class="bg-white py-12 border-t border-gray-200">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-2">Bizi Takip Edin</h3>
                <p class="text-gray-600">Yeniliklerden haberdar olmak için sosyal medya hesaplarımızı takip edin</p>
            </div>
            
            <div class="flex gap-4">
                <a href="#" class="group w-12 h-12 bg-gray-100 hover:bg-[#0077B5] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <i class="fab fa-linkedin text-xl text-gray-600 group-hover:text-white transition-colors"></i>
                </a>
                <a href="#" class="group w-12 h-12 bg-gray-100 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <i class="fab fa-instagram text-xl text-gray-600 group-hover:text-white transition-colors"></i>
                </a>
                <a href="#" class="group w-12 h-12 bg-gray-100 hover:bg-[#1DA1F2] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <i class="fab fa-twitter text-xl text-gray-600 group-hover:text-white transition-colors"></i>
                </a>
                <a href="#" class="group w-12 h-12 bg-gray-100 hover:bg-[#FF0000] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <i class="fab fa-youtube text-xl text-gray-600 group-hover:text-white transition-colors"></i>
                </a>
            </div>
        </div>
    </div>
</section>

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
                        <a href="#" class="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
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
                        <a href="tel:+902121234567" class="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-3">
                            <i class="fas fa-phone text-blue-400"></i>
                            <span>+90 (212) 123 45 67</span>
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

}
