const prompt = require("prompt-sync")({ sigint: true });

let dataSiswa=[{
    nama : 'Fitria',
    alamat : 'garut',
    telepon : '089656906165'
},
{
    nama : 'Siti',
    alamat : 'Leles',
    telepon : '0895412545265'
}];

let menu;
//1. Tampilan Data
do { console.log('Pilihan menu : 1= Tambah Data, 2= Tampilan Data, 3= Hapus Data, 4= Cari Data');
    menu = prompt('Masukan no sesuai menu yang ingin dipilih : ');
    switch (menu){
        case '1':
    let nama = prompt('Massukan nama siswa : ');
    let alamat = prompt('Massukan alamat : ');
    let telepon = prompt('Massukan telepon : ')

    dataSiswa.push({nama, alamat, telepon});
    console.log(dataSiswa);
break;

//2. Tambah data
case '2':
    console.log('\nData siswa');
    dataSiswa.forEach(ds => {
    console.log(`${ds.nama} beralamat di ${ds.alamat} dengan no telepon ${ds.telepon}`);

    });
break;

//3. Hapus data
case '3':

//4. Cari data
case '4':
    let cariNama= prompt('Masukan nama')
