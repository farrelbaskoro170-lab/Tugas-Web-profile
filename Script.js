const jadwalKuliah = [
    { id_matkul: 'SI101', nama_matkul: 'Pengembangan Sistem Berbasis Web', hari: 'Senin', sks: 3, status_wajib: true },
    { id_matkul: 'SI102', nama_matkul: 'Basis Data Lanjut', hari: 'Selasa', sks: 3, status_wajib: true },
    { id_matkul: 'SI103', nama_matkul: 'Desain UI/UX', hari: 'Rabu', sks: 2, status_wajib: false },
    { id_matkul: 'SI104', nama_matkul: 'Manajemen Proyek IT', hari: 'Kamis', sks: 3, status_wajib: true },
    { id_matkul: 'SI105', nama_matkul: 'Bahasa Inggris Bisnis', hari: 'Jumat', sks: 2, status_wajib: false }
];


function hitungTotalSksWajib(jadwal) {
    let totalSks = 0;

    
    for (let matkul of jadwal) {
        if (matkul.status_wajib === true) {
            totalSks += matkul.sks;
        }
    }
    return totalSks;
}


function filterMatkulBerat(jadwal, minimalSks) {
    let hasilFilter = [];

    jadwal.forEach(matkul => {
        if (matkul.sks >= minimalSks) {
            hasilFilter.push(matkul);
        }
    });

    return hasilFilter;
}


console.log("%c=== DATA JADWAL MATA KULIAH ===", "color: #0EA5E9; font-weight: bold; font-size: 14px;");
console.log(jadwalKuliah);

console.log("%c\n=== HASIL PERHITUNGAN TOTAL SKS WAJIB ===", "color: #10B981; font-weight: bold; font-size: 14px;");
let total = hitungTotalSksWajib(jadwalKuliah);
console.log(`Total SKS untuk mata kuliah wajib Anda adalah: ${total} SKS`);

console.log("%c\n=== HASIL FILTER MATA KULIAH BERAT (>= 3 SKS) ===", "color: #D946EF; font-weight: bold; font-size: 14px;");
let matkulBerat = filterMatkulBerat(jadwalKuliah, 3);
console.log(matkulBerat);


setTimeout(function() {
    const notif = document.createElement("div");
    notif.innerHTML = " <b>Script.js Eksternal Berhasil Jalan!</b><br>Tekan tombol <b>F12</b> dan buka tab <b>Console</b> untuk melihat hasilnya.";
    notif.style.position = "fixed";
    notif.style.bottom = "25px";
    notif.style.right = "25px";
    notif.style.backgroundColor = "#10B981"; 
    notif.style.color = "#ffffff";
    notif.style.padding = "15px 20px";
    notif.style.borderRadius = "12px";
    notif.style.boxShadow = "0 10px 25px rgba(0,0,0,0.5)";
    notif.style.zIndex = "999999";
    notif.style.fontFamily = "'Plus Jakarta Sans', sans-serif";
    notif.style.fontSize = "0.9rem";
    
    document.body.appendChild(notif);

    setTimeout(() => {
        notif.style.opacity = "0";
        notif.style.transition = "opacity 0.5s ease";
        setTimeout(() => notif.remove(), 500);
    }, 10000);
}, 3500); 
