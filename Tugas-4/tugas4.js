
//  ===================== SOAL NOMOR 1 ===================== //
// menggunakan 1 while loop meskipun output sama
var kondisi = 'mulai'
var i = 0

while (true){
    if (kondisi == 'mulai'){
        console.log('Looping Pertama')
        kondisi = 'naik'
    } if (i >= 0 && kondisi == 'naik' && i < 20){
        i += 2
        console.log(i + ' - I love coding')
    } else if (i == 20 && kondisi == 'naik'){
        console.log("Looping Kedua")
        kondisi = 'turun'
    } if (i <= 20 && kondisi == 'turun'){
        console.log(i + ' - I want to become a frontend developer')
        i -= 2
        if (i == 0){
            break
        }
    }
}



console.log('\n')
//  ===================== SOAL NOMOR 2 ===================== //
for (i = 1; i <= 20; i++){
    if (i % 2 == 0){
        console.log(i + ' - Berkualitas')
    } else if (i % 3 == 0){
        console.log(i + ' - i love coding')
    } else {
        console.log(i + ' - santai')
    }
}



console.log('\n')
//  ===================== SOAL NOMOR 3 ===================== //
for (i = 1; i <= 7; i++){
    var anu = ''
    for (a = 1; a <= i; a++){
      anu += '#'
    }
    console.log(anu)
}



console.log('\n')
//  ===================== SOAL NOMOR 4 ===================== //
var kalimat = "saya sangat senang belajar javascript"

var anu = kalimat.split(' ')
console.log(anu)



console.log('\n')
//  ===================== SOAL NOMOR 5 ===================== //
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggwur", "4. Semangka", "1. Mangga"]

var _sorted = daftarBuah.sort()

for (i = 0; i < _sorted.length; i++){
  console.log(_sorted[i])
}





