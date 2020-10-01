
//  ===================== SOAL NOMOR 1 ===================== //
//variabel tidak saya ditambahi space, saya sesuaikan dengan soal
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";


var upper1stLetterKedua = kataKedua.charAt(0).toUpperCase(); //S
kataKedua = upper1stLetterKedua + kataKedua.slice(1); // Senang
kataKeempat = kataKeempat.toUpperCase(); // JAVASCRIPT
var hasil = kataPertama+' '.concat(kataKedua, ' ', kataKetiga, ' ', kataKeempat);
console.log(hasil); 




//  ===================== SOAL NOMOR 2 ===================== //
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";


kataPertama = Number(kataPertama);
kataKedua = Number(kataKedua);
kataKetiga = Number(kataKetiga);
kataKeempat = Number(kataKeempat);
console.log(kataPertama + kataKedua + kataKetiga + kataKeempat);




//  ===================== SOAL NOMOR 3 ===================== //
var kalimat = 'wah javascript itu keren sekali'; 
var kataPertama = kalimat.substring(0, 3); 
var kataKedua; // do your own! 
var kataKetiga; // do your own! 
var kataKeempat; // do your own! 
var kataKelima; // do your own! 


kataKedua = kalimat.substring(4, 14)
kataKetiga = kalimat.substring(15, 18)
kataKeempat = kalimat.substring(19, 24)
kataKelima = kalimat.substring(25, 31)
console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);




//  ===================== SOAL NOMOR 4 ===================== //
var nilai;
nilai = -10;


if (nilai >= 80) {
    console.log("A")
} else if (nilai >= 70 && nilai < 80) {
    console.log("B")
} else if (nilai >= 60 && nilai < 70) {
    console.log("C")
} else if (nilai >= 50 && nilai < 60) {
    console.log("D")
} else {
    console.log("F")
}




//  ===================== SOAL NOMOR 5 ===================== //
var tanggal = 19;
var bulan = 4;
var tahun = 1999;


switch(bulan) {
    case 1: {
        bulan = ' Januari '
        console.log(tanggal + bulan + tahun);
        break;
    }
    case 2: {
        bulan = ' Februari '
        console.log(tanggal + bulan + tahun);
        break;
    }
    case 3: {
        bulan = ' Maret '
        console.log(tanggal + bulan + tahun);
        break;
    }
    case 4: {
        bulan = ' April '
        console.log(tanggal + bulan + tahun);
        break;
    }
    case 5: {
        bulan = ' Mei '
        console.log(tanggal + bulan + tahun);
        break;
    }
    case 6: {
        bulan = ' Juni '
        console.log(tanggal + bulan + tahun);
        break;
    }
    case 7: {
        bulan = ' Juli '
        console.log(tanggal + bulan + tahun);
        break;
    }
    case 8: {
        bulan = ' Agustus '
        console.log(tanggal + bulan + tahun);
        break;
    }
    case 9: {
        bulan = ' September '
        console.log(tanggal + bulan + tahun);
        break;
    }
    case 10: {
        bulan = ' Oktober '
        console.log(tanggal + bulan + tahun);
        break;
    }
    case 11: {
        bulan = ' November '
        console.log(tanggal + bulan + tahun);
        break;
    }
    case 12: {
        bulan = ' Desember '
        console.log(tanggal + bulan + tahun);
        break;
    }
    default: {
        console.log('Lho he lho he..');
    }
}


