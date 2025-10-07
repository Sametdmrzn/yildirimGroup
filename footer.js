// footer.js
export function loadFooter() {
    const footerHTML = `
    <footer class="bg-gray-800 text-white p-6 text-center">
      &copy; 2025 Samet Demo Site
    </footer>
  `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}
