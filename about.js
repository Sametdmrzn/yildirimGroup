export function loadAbout() {
    const aboutHtml = `
    <div class="flex flex-col md:flex-row bg-[#EDF0F2]">
        <div class="flex-col">
            <div class="about">
            <h2>Yıldırım Group Hakkında</h2>
            </div>
            <div class="about">
                <p>Yıldırım Group olarak, geniş bir yelpazede aracılık ve tedarik hizmetleri sunuyoruz. Başlıca hizmet alanlarımız şunlardır:
Aracılık Hizmetleri: İş ortaklarımızın ihtiyaç duyduğu ürün ve hizmetlerin en uygun şartlarda temin edilmesi için profesyonel aracılık çözümleri sunmaktayız.
Tedarik Zinciri Yönetimi: Tedarik zincirinin her aşamasında etkin çözümler sunarak, maliyetlerinizi düşürmenize ve operasyonel verimliliğinizi artırmanıza yardımcı oluyoruz.
Danışmanlık Hizmetleri: Pazar analizleri, stratejik planlama ve süreç iyileştirme konularında uzman ekibimizle yanınızdayız.</p>
            </div>
        </div>
        <div class="flex-col">
            <div>
                <p>Yıldırım Group Aracılık ve Tedarik Şirketi olarak, sektördeki öncü konumumuzu sağlamlaştırmak ve müşterilerimize en kaliteli hizmeti sunmak amacıyla bu ön yazıyı hazırlamış bulunmaktayız. Firmamız, yılların getirdiği tecrübeyle birlikte güvenilir ve yenilikçi çözümler sunarak, iş ortaklarımızın beklentilerini daima en üst seviyede karşılamayı hedeflemektedir.
</p>
            </div>
            <div>
                <img class="w-96 h-64" src="https://picsum.photos/200/300" alt="">
            </div>
        </div>
    </div>
    `

    document.body.insertAdjacentHTML('beforeend', aboutHtml);


}

