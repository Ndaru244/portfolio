/* assets/js/scripts.js */

window.addEventListener("load", function () {
    // 1. Setup Loader
    const loader = document.getElementById("loader");
    if (loader) {
        setTimeout(() => {
            loader.style.display = "none";
            // TANDAI BAHWA LOADING SELESAI
            document.body.classList.add('loaded');
        }, 2200);
    } else {
        // Jika tidak ada loader (jaga-jaga), langsung tandai loaded
        document.body.classList.add('loaded');
    }

    // 2. Cek Tema Tersimpan
    const savedTheme = localStorage.getItem('portfolio-theme');
    const themeLink = document.getElementById('theme-style');

    if (savedTheme && themeLink) {
        themeLink.href = savedTheme;
    }
});

// 3. Fungsi Ganti Tema
function toggleTheme() {
    const themeLink = document.getElementById('theme-style');
    if (!themeLink) return;

    const currentTheme = themeLink.getAttribute('href');
    let newTheme = '';

    if (currentTheme.includes('styles.css')) {
        newTheme = 'assets/css/styles-2.css';
    } else {
        newTheme = 'assets/css/styles.css';
    }

    themeLink.href = newTheme;
    localStorage.setItem('portfolio-theme', newTheme);
}