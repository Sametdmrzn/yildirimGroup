// footer.js
export function loadFooter() {
  const footerHTML = `
    <footer class="bg-gray-800 text-white p-6 text-center">
      <div class='flex w-full bg-black p-4'>
        <div class='grid grid-cols-1 md:grid-cols-4 gap-8 mb-4'>
          <div class='col-span-2'>
            <h3 class='font-bold'>Yıldırım Group</h3>
            <p class='text-gray-500 leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue mi et.</p>
          </div>
          <div>
             <a href="#" class="text-gray-300 hover:text-white transition-colors duration-200">
              <svg <?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1227" viewBox="0 0 1200 1227" fill="none"><g clip-path="url(#clip0_1_2)"><path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="black"/></g><defs><clipPath id="clip0_1_2"><rect width="1200" height="1227" fill="white"/></clipPath></defs></svg>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  `;
  document.body.insertAdjacentHTML('beforeend', footerHTML);

}
