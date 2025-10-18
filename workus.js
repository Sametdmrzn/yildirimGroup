export function loadworkUs() {
  const workUsHTML = `
<section id="contact" class="py-16 md:py-24 bg-gradient-to-br from-[#0a2540] via-[#16509f] to-[#0a2540] relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: linear-gradient(30deg, #60a5fa 12%, transparent 12.5%, transparent 87%, #60a5fa 87.5%, #60a5fa), linear-gradient(150deg, #60a5fa 12%, transparent 12.5%, transparent 87%, #60a5fa 87.5%, #60a5fa), linear-gradient(30deg, #60a5fa 12%, transparent 12.5%, transparent 87%, #60a5fa 87.5%, #60a5fa), linear-gradient(150deg, #60a5fa 12%, transparent 12.5%, transparent 87%, #60a5fa 87.5%, #60a5fa); background-size: 80px 140px; background-position: 0 0, 0 0, 40px 70px, 40px 70px;"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <!-- Header -->
        <div class="text-center mb-16">
            <span class="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-blue-300 text-sm font-semibold rounded-full mb-4 tracking-wide border border-white/20">
                İLETİŞİM
            </span>
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Bizimle Çalışın
            </h2>
            <p class="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto">
                Yeteneklerinizi en iyi şekilde değerlendirebileceğiniz, yenilikçi projelerde yer alabileceğiniz bir kariyer fırsatı sizi bekliyor.
            </p>
        </div>

        <!-- Main Content Grid -->
        <div class="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-16">
            
            <!-- Left: Image -->
            <div class="relative">
                <div class="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-3xl opacity-20 blur-3xl"></div>
                <div class="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                         class="w-full h-[400px] md:h-[500px] object-cover" 
                         alt="İş Görüşmesi">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#0a2540]/60 to-transparent"></div>
                </div>
                <div class="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl">
                    <i class="fas fa-handshake text-white text-3xl"></i>
                </div>
            </div>

            <!-- Right: Content -->
            <div class="space-y-8">
                <!-- Benefits Card -->
                <div class="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl">
                    <h3 class="text-white text-2xl font-bold mb-6 flex items-center">
                        <span class="w-2 h-8 bg-blue-400 rounded-full mr-4"></span>
                        Neden Bizimle Çalışmalısınız?
                    </h3>
                    <ul class="space-y-4">
                        <li class="flex items-start text-blue-50">
                            <div class="flex-shrink-0 w-6 h-6 bg-blue-400/20 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                                <i class="fas fa-check text-blue-300 text-sm"></i>
                            </div>
                            <span>Esnek çalışma saatleri ve uzaktan çalışma imkanı</span>
                        </li>
                        <li class="flex items-start text-blue-50">
                            <div class="flex-shrink-0 w-6 h-6 bg-blue-400/20 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                                <i class="fas fa-check text-blue-300 text-sm"></i>
                            </div>
                            <span>Sürekli öğrenme ve gelişim fırsatları</span>
                        </li>
                        <li class="flex items-start text-blue-50">
                            <div class="flex-shrink-0 w-6 h-6 bg-blue-400/20 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                                <i class="fas fa-check text-blue-300 text-sm"></i>
                            </div>
                            <span>Yenilikçi projelerde liderlik şansı</span>
                        </li>
                        <li class="flex items-start text-blue-50">
                            <div class="flex-shrink-0 w-6 h-6 bg-blue-400/20 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                                <i class="fas fa-check text-blue-300 text-sm"></i>
                            </div>
                            <span>Rekabetçi maaş ve yan haklar paketi</span>
                        </li>
                    </ul>
                </div>

                <!-- Quick Contact -->
                <div class="bg-gradient-to-br from-blue-500/10 to-indigo-600/10 backdrop-blur-md rounded-2xl p-8 border border-blue-400/20">
                    <p class="text-white text-lg mb-4">
                        <i class="fas fa-info-circle text-blue-300 mr-2"></i>
                        Kariyerinizdeki bir sonraki adımı atmaya hazır mısınız?
                    </p>
                    <p class="text-blue-100 text-sm">
                        Ekibimize katılmak için hemen bizimle iletişime geçin.
                    </p>
                </div>
            </div>

        </div>

        <!-- CTA Section -->
        <div class="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div class="p-8 md:p-12">
                <div class="flex flex-col md:flex-row items-center justify-between gap-8">
                    
                    <!-- Left: Text -->
                    <div class="text-center md:text-left">
                        <h3 class="text-2xl md:text-3xl font-bold text-white mb-2">Haydi Başlayalım</h3>
                        <p class="text-blue-100">Sorularınız için bize ulaşın, en kısa sürede yanıt verelim</p>
                    </div>

                    <!-- Right: Actions -->
                    <div class="flex flex-col sm:flex-row items-center gap-4">
                        <!-- Email Button -->
                        <a href="mailto:info@yildirimgroup.site?subject=Kariyer%20Fırsatları&body=Merhaba,%0D%0A%0D%0AYıldırım%20Group'ta%20çalışma%20fırsatları%20hakkında%20bilgi%20almak%20istiyorum.%0D%0A%0D%0AAdım%20Soyadım:%0D%0ATelefon:%0D%0A%0D%0ATeşekkürler." 
                           class="group bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 flex items-center gap-3">
                            <i class="fas fa-envelope text-xl"></i>
                            <div class="text-left">
                                <div class="text-xs opacity-80">Email Gönder</div>
                                <div class="text-sm font-bold">info@yildirimgroup.site</div>
                            </div>
                            <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                        </a>

                        <!-- Social Media -->
                        <div class="flex items-center gap-3">
                            <span class="text-blue-200 text-sm hidden sm:block">veya</span>
                            <div class="flex gap-3">
                                <a href="#" class="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:text-blue-300 transition-all duration-300 hover:scale-110 border border-white/10">
                                    <i class="fab fa-linkedin text-xl"></i>
                                </a>
                                <a href="#" class="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:text-blue-300 transition-all duration-300 hover:scale-110 border border-white/10">
                                    <i class="fab fa-instagram text-xl"></i>
                                </a>
                                <a href="#" class="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:text-blue-300 transition-all duration-300 hover:scale-110 border border-white/10">
                                    <i class="fab fa-twitter text-xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
</section>

    `
  document.body.insertAdjacentHTML('beforeend', workUsHTML);
}