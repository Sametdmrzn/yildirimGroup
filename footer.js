// footer.js
export function loadFooter() {
  const footerHTML = `<footer class="bg-gray-900 text-white">
  <div class="container mx-auto px-4 py-12">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      
      <!-- Kolon 1: Hakkımızda -->
      <div class="col-span-2">
        <div class="flex items-center mb-4">
          <h3 class="text-xl font-bold text-white">Yıldırım Group</h3>
        </div>
        <p class="text-gray-400 leading-relaxed mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum hendrerit ligula vel interdum. 
          Cras consectetur, ipsum a lacinia elementum, dui velit tincidunt tellus.
        </p>
        <div class="flex items-center space-x-2 text-gray-400">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          <span>İstanbul, Türkiye</span>
        </div>
      </div>

      <!-- Kolon 2: Site Haritası -->
      <div>
        <h3 class="text-lg font-semibold mb-4 text-white">Hızlı Erişim</h3>
        <div class="flex flex-col space-y-3">
          <a href="#index.html" class="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Ana Sayfa</a>
          <a href="#about.js" class="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Hakkımızda</a>
          <a href="#" class="text-gray-400 hover:text-yellow-400 transition-colors duration-300">İletişim</a>
          <a href="#" class="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Şirketlerimiz</a>
        </div>
      </div>

      <!-- Kolon 3: İletişim -->
      <div>
        <h3 class="text-lg font-semibold mb-4 text-white">İletişim</h3>
        <div class="space-y-3 text-gray-400">
          <div class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <span>+90 (212) 123 45 67</span>
          </div>
          <div class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span>info@yildirimgroup.com</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Sosyal Medya -->
    <div class="mt-12 pt-8 border-t border-gray-800">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <h4 class="text-lg font-semibold mb-2 text-white">Bizi Takip Edin</h4>
          <p class="text-gray-400 text-sm">Yeniliklerden haberdar olmak için sosyal medya hesaplarımızı takip edin</p>
        </div>
        
        <div class="flex space-x-6">
          <!-- Twitter -->
          <a href="#" class="bg-gray-800 p-3 rounded-full hover:bg-blue-500 transition-colors duration-300 group">
            <svg class="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          
          <!-- LinkedIn -->
          <a href="#" class="bg-gray-800 p-3 rounded-full hover:bg-blue-700 transition-colors duration-300 group">
            <svg class="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM7 19H4V9h3v10zM5.5 7.7c-1 0-1.8-.8-1.8-1.8S4.5 4 5.5 4s1.8.8 1.8 1.8-.8 1.9-1.8 1.9zM20 19h-3v-5.4c0-1.3-.5-2.2-1.7-2.2-1 0-1.6.7-1.9 1.4-.1.2-.1.5-.1.8V19h-3V9h3v1.4c.4-.7 1.3-1.7 3-1.7 2.2 0 3.7 1.5 3.7 4.7V19z" />
            </svg>
          </a>
          
          <!-- Instagram -->
          <a href="#" class="bg-gray-800 p-3 rounded-full hover:bg-blue-700 transition-colors duration-300 group">
            <svg class="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 2 .2 2.5.4.6.2 1 .5 1.5 1s.8.9 1 1.5c.2.5.4 1.3.4 2.5.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 2-.4 2.5-.2.6-.5 1-1 1.5s-.9.8-1.5 1c-.5.2-1.3.4-2.5.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-2-.2-2.5-.4-.6-.2-1-.5-1.5-1s-.8-.9-1-1.5c-.2-.5-.4-1.3-.4-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-2 .4-2.5.2-.6.5-1 1-1.5s.9-.8 1.5-1c.5-.2 1.3-.4 2.5-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7.1.1 5.8.1 4.7.3 3.8.6 2.9 1 2.1 1.5 1.4 2.2.7 2.9.2 3.7-.1 4.6c-.3.9-.5 2-.5 3.3C-.7 8.3-.7 8.7-.7 12s0 3.7.1 4.9c.1 1.3.3 2.4.6 3.3.4.9.9 1.7 1.6 2.4.7.7 1.5 1.2 2.4 1.6.9.3 2 .5 3.3.6 1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c1.3-.1 2.4-.3 3.3-.6.9-.4 1.7-.9 2.4-1.6.7-.7 1.2-1.5 1.6-2.4.3-.9.5-2 .6-3.3.1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.1-1.3-.3-2.4-.6-3.3-.4-.9-.9-1.7-1.6-2.4-.7-.7-1.5-1.2-2.4-1.6-.9-.3-2-.5-3.3-.6C15.7 0 15.3 0 12 0z" /> <path d="M12 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM18.4 4.6a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    
    <!-- Alt Kısım -->
    <div class="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
      <p>© 2023 Yıldırım Group. Tüm hakları saklıdır.</p>
    </div>
  </div>
</footer>
  `;
  document.body.insertAdjacentHTML('beforeend', footerHTML);

}
