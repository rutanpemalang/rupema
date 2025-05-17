// ID Form Google
const FORM_ID = '190YcBr-pyfTB1g2IWwdi5XRlr5R2SQN5MOgefzX4pTI';
const API_URL = `https://docs.google.com/forms/d/${FORM_ID}/formResponse`;

// Cek status form
fetch(API_URL)
    .then(response => {
        if (response.status === 200) {
            document.getElementById("status-title").textContent = "Form Terbuka";
            document.getElementById("status-message").textContent = "Pengisian data sedang dibuka. Silakan isi form.";
        } else {
            document.getElementById("status-title").textContent = "Form Ditutup";
            document.getElementById("status-message").textContent = "Pengisian data sudah ditutup. Silakan cek kembali nanti.";
        }
    })
    .catch(error => {
        document.getElementById("status-title").textContent = "Form Tidak Ditemukan";
        document.getElementById("status-message").textContent = "Terjadi kesalahan saat memeriksa status form. Coba lagi nanti.";
    });

// Fungsi untuk menutup popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}
