
//  ===================== SOAL NOMOR 1 ===================== //
function halo(){
  return 'Halo Sanbers!'
}

 
console.log(halo()) // "Halo Sanbers!" 



console.log('\n')
//  ===================== SOAL NOMOR 2 ===================== //
function kalikan(x, y){
  return x * y
}
 
var num1 = 12
var num2 = 4
 
var hasilKali = kalikan(num1, num2)
console.log(hasilKali) // 48



console.log('\n')
//  ===================== SOAL NOMOR 3 ===================== //
function introduce(nama, umur, alamat, hobi){
  return 'Nama saya ' + nama +', umur saya ' + umur + ' tahun, alamat saya di ' + alamat + ', dan saya punya hobby yaitu ' + hobi + '!'
}
 
var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di jalan belum jadi, dan saya punya hobby yaitu Gaming!" 



console.log('\n')
//  ===================== SOAL NOMOR 4 ===================== //
function convert(key, data) {
  var dict = {}
  for (var i = 0; i < data.length; ++i){
    dict[key[i]] = data[i]
  }
  return dict

}

var key = ['nama', 'jenis_kelamin', 'hobi', 'tahun_lahir']
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]

console.log(convert(key, arrayDaftarPeserta))



console.log('\n')
//  ===================== SOAL NOMOR 5 ===================== //
var data = [
  {
    nama: 'strawberry',
    warna: 'merah',
    adaBijinya: 'tidak',
    harga: 9000
  },
  {
    nama: 'jeruk',
    warna: 'oranye',
    adaBijinya: 'ada',
    harga: 8000
  },
  {
    nama: 'Semangka',
    warna: 'Hijau & Merah',
    adaBijinya: 'ada',
    harga: 10000
  },
  {
    nama: 'Pisang',
    warna: 'Kuning',
    adaBijinya: 'tidak',
    harga: 5000
  }
]

console.log(data[0])



console.log('\n')
//  ===================== SOAL NOMOR 6 ===================== //
var dataFilm = []
function addData(obj) {
    dataFilm.push(obj)
}


//Adding Data Srction
addData(
  {
    nama:'Bawang',
    durasi: '1 detik',
    genre: 'horor',
    tahun: 1945
  }
)

// End Section
console.log(dataFilm)







