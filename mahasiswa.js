const prompt = require('prompt-sync')();

let mahasiswa = [

    { nama : "Budi", nilai: 85},
    { nama : "Siti", nilai: 92},
    { nama : 'Andi', nilai: 58},
    { nama : 'Dewi', nilai: 68}
];
// 1. Data Mahasiswa
console.log("\nDaftar Nilai Mahasiswa:");
mahasiswa.forEach(mhs => {
    if (mhs.nilai >= 60){
        console.log(`${mhs.nama} - Nilai : ${mhs.nilai} - Lulus`);
    }else{
        console.log(`${mhs.nama} - Nilai : ${mhs.nilai} - Tidak Lulus`);
    }
});

// 2. Array baru mahasiswa
let daftarNama = mahasiswa.map (mhs => mhs.nama)
console.log("\nDaftar Nilai Mahasiswa:", daftarNama);

// 3. Urutan berdasarkan nilai tertinggi
let urutNilai = [... mahasiswa].sort((a,b)=> b.nilai - a.nilai);
console.log("\Urutan Berdasarkan Nilai Tertingi->Terendah):");
urutNilai.forEach(mhs => console.log (`${mhs.nama} - ${mhs.nilai}`));

// 4. Cari mahasiswa berdasarkan nama
do{
let cariNama = prompt("Masukan nama mahasiswa yang dicari:")
let hasilCari = mahasiswa.find (mhs => mhs.nama.toLowerCase() ===cariNama.toLowerCase());

if (hasilCari){
        console.log(`\nDitemukan: ${hasilCari.nama} - Nilai: ${hasilCari.nilai} - Lulus`) ;
    }else {
        console.log("\nMahasiswa tidak ditemukan.");
}
//tanyakan apakah ingin mencari lagi
var ulang = prompt("\n Apakah ingin mencari nama mahasiswa lain? (y/n):").toLowerCase();
}while (ulang.toLowerCase()=== 'y');
    console.log("\nTerimakasih! Program Selesai. ");
    