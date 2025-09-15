const prompt = require("prompt-sync")();

let mahasiswa = [
    {nama: "budi", nilai: 85},
    {nama: "Siti", nilai: 92},
    {nama: "Andi", nilai: 76},
    {nama: "Dewi", nilai: 55},
];

let mhs = mahasiswa;

//data mahasiswa
console.log('Daftar nilai mahasiswa :');
mahasiswa.forEach(mhs => {
    if (mhs.nilai>=60) {
        console.log(`${mhs.nama}-nilai:${mhs.nilai}-(lulus)`);
    } else {
        console.log(`${mhs.nama}-nilai:${mhs.nilai}-(tidak lulus)`);
    }
});

//array baru mahasiswa
let daftarNama = mahasiswa.map(mhs=>mhs.nama);
console.log("\nDaftar nama mahasiswa :", daftarNama);
let urutanNilai =[...mahasiswa].sort((a,b)=> b.nilai-a.nilai);
console.log("\nUrurtan Berdasarkan Nilai(tertinggi->terendah):");
urutanNilai.forEach(mhs => console.log(`${mhs.nama}-${mhs.nilai}`));

let lanjut = 'y';
while (lanjut.toLocaleLowerCase() === 'y') {
    //cari mahasiswa berdasarkan nama
    let cariNama = prompt("masukan nama mahasiswa yang dicari:");
    let hasilCari = mahasiswa.find(mhs=>mhs.nama.toLowerCase()===cariNama.toLocaleLowerCase());
    if (hasilCari) {
        if (mhs.nilai>=60) {
            console.log(`\nDitemukan : ${hasilCari.nama} dengan hasil ${hasilCari.nilai} yang berarti lulus`);
        } else {
            console.log(`\nDitemukan : ${hasilCari.nama} dengan hasil ${hasilCari.nilai} yang berarti tidak lulus`);
        }
    } else {
    console.log("\nMahasiswa tidak ditemukan");
    }
    lanjut = prompt("mau mencari lagi(Y/N):");
}
/*
if (lanjut='Y') {
    let cariNama = prompt("masukan nama mahasiswa yang dicari:");
    let hasilCari = mahasiswa.find(mhs=>mhs.nama.toLowerCase()===cariNama.toLocaleLowerCase());
    if (hasilCari) {
        if (mhs.nilai>=60) {
            console.log(`\nDitemukan : ${hasilCari.nama} dengan hasil ${hasilCari.nilai} yang berarti lulus`);
        } else {
            console.log(`\nDitemukan : ${hasilCari.nama} dengan hasil ${hasilCari.nilai} yang berarti tidak lulus`);
        }
    } else {
        console.log("\nMahasiswa tidak ditemukan");
    }
} else {
    console.log("Terima Kasih!!");
}*/