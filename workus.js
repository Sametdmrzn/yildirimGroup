export function loadworkUs() {
  const workUsHTML = `
    <div class="bg-gradient-to-br from-[#C11010] to-[#8B0000] w-full shadow-2xl overflow-hidden">
        <!-- İçerik Bölümü -->
        <div class="flex flex-col md:flex-row items-center p-8 md:p-12">
            <!-- Görsel Bölümü -->
            <div class="flex-shrink-0 mb-8 md:mb-0 md:mr-12">
                <div class="relative">
                    <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                         class="w-64 h-64 md:w-80 md:h-80 rounded-3xl shadow-lg object-cover transition-transform duration-300 hover:scale-105" 
                         alt="İş Görüşmesi">
                    <div class="absolute -bottom-4 -right-4 bg-[#0EB7BF] text-white p-3 rounded-full shadow-lg">
                        <i class="fas fa-handshake text-2xl"></i>
                    </div>
                </div>
            </div>
            
            <!-- Metin Bölümü -->
            <div class="flex-1 text-center md:text-left">
                <h2 class="text-4xl md:text-5xl font-bold text-[#0EB7BF] mb-4 drop-shadow-md">BİZİMLE ÇALIŞIN</h2>
                <p class="text-white text-lg md:text-xl mb-6">Yeteneklerinizi en iyi şekilde değerlendirebileceğiniz, yenilikçi projelerde yer alabileceğiniz bir kariyer fırsatı sizi bekliyor.</p>
                
                <div class="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                    <h3 class="text-white text-xl font-semibold mb-3">Neden Bizimle Çalışmalısınız?</h3>
                    <ul class="text-white/90 space-y-2">
                        <li class="flex items-center">
                            <i class="fas fa-check-circle text-[#0EB7BF] mr-2"></i>
                            <span>Esnek çalışma saatleri ve uzaktan çalışma imkanı</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-check-circle text-[#0EB7BF] mr-2"></i>
                            <span>Sürekli öğrenme ve gelişim fırsatları</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-check-circle text-[#0EB7BF] mr-2"></i>
                            <span>Yenilikçi projelerde liderlik şansı</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Alt Bölüm -->
        <div class="bg-white/10 backdrop-blur-sm border-t border-white/20">
            <div class="flex flex-col md:flex-row justify-between items-center py-6 px-8 md:px-12 text-white">
                <div class="mb-4 md:mb-0">
                    <p class="text-xl font-bold">HAYDİ BAŞLAYALIM</p>
                    <p class="text-white/80 mt-1">Kariyerinizdeki bir sonraki adımı atın</p>
                </div>
                <div class="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6">
                    <a href="mailto:info@yildirimgroup.site" 
                       class="bg-[#0EB7BF] hover:bg-[#0ca8af] text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 flex items-center shadow-lg hover:shadow-xl">
                        <i class="fas fa-envelope mr-2"></i>
                        info@yildirimgroup.site
                    </a>
                    <div class="flex space-x-4">
                        <a href="#" class="text-white hover:text-[#0EB7BF] transition-colors duration-300">
                            <i class="fab fa-linkedin text-2xl"></i>
                        </a>
                        <a href="#" class="text-white hover:text-[#0EB7BF] transition-colors duration-300">
                            <i class="fab fa-instagram text-2xl"></i>
                        </a>
                        <a href="#" class="text-white hover:text-[#0EB7BF] transition-colors duration-300">
                            <i class="fab fa-twitter text-2xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    `
  document.body.insertAdjacentHTML('beforeend', workUsHTML);
}