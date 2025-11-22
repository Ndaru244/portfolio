window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.display = "none";
  }, 2200);
});

/* assets/js/scripts.js */
document.addEventListener("DOMContentLoaded", function() {
    const savedTheme = localStorage.getItem('portfolio-theme');
    const themeLink = document.getElementById('theme-style');
    
    // Jika ada tema tersimpan dan elemen link ditemukan
    if (savedTheme && themeLink) {
        themeLink.href = savedTheme;
    }
});

// 2. Fungsi Ganti Theme (Dipanggil saat tombol diklik)
function toggleTheme() {
    const themeLink = document.getElementById('theme-style');
    
    if (!themeLink) {
        console.error("Error: Element dengan id 'theme-style' tidak ditemukan di HTML.");
        return;
    }

    const currentTheme = themeLink.getAttribute('href');
    let newTheme = '';

    // Logika penukaran (Pastikan path file CSS sesuai folder Anda)
    // Asumsi: Default adalah 'style-fallout.css', Alternatif 'style-new.css'
    if (currentTheme.includes('styles.css')) {
        newTheme = 'assets/css/styles-2.css'; // Ganti ke tema Sci-Fi/Baru
    } else {
        newTheme = 'assets/css/styles.css'; // Balik ke tema Fallout
    }

    // Terapkan & Simpan
    themeLink.href = newTheme;
    localStorage.setItem('portfolio-theme', newTheme);
    
    console.log("Theme Switched to: " + newTheme);
}