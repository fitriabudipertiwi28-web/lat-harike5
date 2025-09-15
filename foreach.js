//foreach->hanya looping
let angka = [1,2,3,4,5];
angka.forEach(num =>{
    console.log(num*2);
});


//map -> ,emghasilkan array baru
let hasil =angka.map(num => num*2);
console.log(hasil);
//output array baru hhasil transformasi

let huruf = ['a','b','c','d','e'];
let hasil2 = huruf.map(huruf=>huruf+'aba');
console.log(hasil2);

huruf.forEach(huruf =>{
    console.log(huruf+'aba');
});