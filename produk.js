const prompt = require('prompt-sync')();

let produk = [
    { nama: "Laptop", harga: 12000000 },
    { nama: "HP", harga: 3500000 },
    { nama: "Tablet", harga: 5000000 },
    { nama: "Smartwatch", harga: 1500000 }
];

// 1. Data Produk
console.log("\nDaftar Harga Produk:");
produk.forEach(pdk => {
    console.log(`${pdk.nama} - harga ${pdk.harga}`);
    });

// 2. Array baru produk
let daftarProduk = produk.map (pdk => pdk.nama)
console.log("\nDaftar Harga Produk:", daftarProduk);

// 3. Urutan berdasarkan harga tertinggi
let urutHarga = [... produk].sort((a,b)=> b.harga - a.harga);
console.log("\Urutan Berdasarkan Harga Tertingi->Terendah):");
urutHarga.forEach(pdk => console.log (`${pdk.nama} - ${pdk.harga}`));

// 4. Cari produk berdasarkan nama
do{
let cariNama = prompt("Masukan nama produk yang dicari:")
let hasilCari = produk.find (pdk => pdk.nama.toLowerCase() ===cariNama.toLowerCase());

if (hasilCari){
        console.log(`\nDitemukan: ${hasilCari.nama} dengan harga ${hasilCari.harga}`) ;
    }else {
        console.log("\nProduk tidak ditemukan.");
}
//tanyakan apakah ingin mencari lagi
var ulang = prompt("\n Apakah ingin mencari nama produk lain? (y/n):").toLowerCase();
}while (ulang.toLowerCase()=== 'y');
    console.log("\nTerimakasih! Program Selesai. ");