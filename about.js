export function loadAbout() {
    const aboutHTML = `
<div id="about" class="flex flex-col md:flex-row bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-10 gap-8 md:gap-12 rounded-2xl shadow-lg">
    <!-- Sol taraf: Metin -->
    <div class="flex flex-col md:w-1/2 space-y-6">
        <div class="space-y-2">
            <h2 class="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">Yıldırım Group Hakkında</h2>
            <div class="h-1.5 w-24 bg-blue-600 rounded-full"></div>
        </div>
        <div class="about text-gray-700 space-y-4">
            <p class="text-lg leading-relaxed">
                Yıldırım Group olarak, geniş bir yelpazede aracılık ve tedarik hizmetleri sunuyoruz. Başlıca hizmet alanlarımız şunlardır:
            </p>
            <ul class="space-y-4">
                <li class="flex items-start">
                    <div class="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 mr-3">
                        <svg class="h-3 w-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div>
                        <strong class="text-gray-900">Aracılık Hizmetleri:</strong> İş ortaklarımızın ihtiyaç duyduğu ürün ve hizmetlerin en uygun şartlarda temin edilmesi için profesyonel aracılık çözümleri sunmaktayız.
                    </div>
                </li>
                <li class="flex items-start">
                    <div class="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 mr-3">
                        <svg class="h-3 w-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div>
                        <strong class="text-gray-900">Tedarik Zinciri Yönetimi:</strong> Tedarik zincirinin her aşamasında etkin çözümler sunarak, maliyetlerinizi düşürmenize ve operasyonel verimliliğinizi artırmanıza yardımcı oluyoruz.
                    </div>
                </li>
                <li class="flex items-start">
                    <div class="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 mr-3">
                        <svg class="h-3 w-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div>
                        <strong class="text-gray-900">Danışmanlık Hizmetleri:</strong> Pazar analizleri, stratejik planlama ve süreç iyileştirme konularında uzman ekibimizle yanınızdayız.
                    </div>
                </li>
            </ul>
        </div>
    </div>

    <!-- Sağ taraf: Metin + Görsel -->
    <div class="flex flex-col md:w-1/2 space-y-6">
        <div class="bg-white p-6 rounded-xl shadow-md">
            <p class="text-gray-700 text-lg leading-relaxed">
                Yıldırım Group Aracılık ve Tedarik Şirketi olarak, sektördeki öncü konumumuzu sağlamlaştırmak ve müşterilerimize en kaliteli hizmeti sunmak amacıyla bu ön yazıyı hazırlamış bulunmaktayız. Firmamız, yılların getirdiği tecrübeyle birlikte güvenilir ve yenilikçi çözümler sunarak, iş ortaklarımızın beklentilerini daima en üst seviyede karşılamayı hedeflemektedir.
            </p>
        </div>
        <div class="relative overflow-hidden rounded-xl shadow-lg">
            <img class="w-full h-64 md:h-80 object-cover transition-transform duration-500 hover:scale-105" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Yıldırım Group">
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
                <div class="p-4 text-white">
                    <p class="text-sm font-medium">20+ Yıllık Deneyim</p>
                    <p class="text-xs">Güvenilir Çözümler</p>
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    document.body.insertAdjacentHTML('beforeend', aboutHTML);
}
