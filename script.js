// Contoh sederhana: Alert saat klik link download
document.querySelectorAll('#download a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Ini adalah placeholder. Ganti dengan link download legal!');
    });
});

// Form kontak sederhana (tidak kirim data nyata)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah dikirim (simulasi).');
});