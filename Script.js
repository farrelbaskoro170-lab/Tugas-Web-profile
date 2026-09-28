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

console.log("%c=== DATA JADWAL MATA KULIAH (Farrel Rafi) ===", "color: #0EA5E9; font-weight: bold; font-size: 14px;");
console.log(jadwalKuliah);

console.log("%c\n=== HASIL PERHITUNGAN TOTAL SKS WAJIB ===", "color: #10B981; font-weight: bold; font-size: 14px;");
let total = hitungTotalSksWajib(jadwalKuliah);
console.log(`Total SKS untuk mata kuliah wajib Anda adalah: ${total} SKS`);

console.log("%c\n=== HASIL FILTER MATA KULIAH BERAT ===", "color: #D946EF; font-weight: bold; font-size: 14px;");
let matkulBerat = filterMatkulBerat(jadwalKuliah, 3);
console.log(matkulBerat);