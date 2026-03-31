document.addEventListener("DOMContentLoaded", function() {
    // --- 1. LOGIKA POP-UP ---
    const popup = document.getElementById('migrationPopup');
    const closeBtn = document.getElementById('closePopupBtn');
    
    // Cek di Local Storage apakah user sudah pernah menekan tombol OK
    if (popup && closeBtn) { // Safety check agar tidak error jika elemen tidak ada
        if (!localStorage.getItem('moonlightbay_migrated_ok')) {
            setTimeout(() => {
                popup.classList.add('show');
            }, 1000);
        }

        closeBtn.addEventListener('click', function() {
            popup.classList.remove('show');
            localStorage.setItem('moonlightbay_migrated_ok', 'true');
        });
    }
    // Memanggil file navbar.html dari root domain (/)
    fetch('/navbar.html')
    .then(response => response.text())
    .then(data => {
        // Memasukkan isi navbar.html ke dalam div penampung
        document.getElementById('navbar-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error loading navbar:', error));
});

// Fungsi untuk mendeteksi scroll dan menambah class 'scrolled'
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav'); // Pastikan tag navbar kamu adalah <nav>
    if (window.scrollY > 50) { // Jika discroll lebih dari 50px
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
