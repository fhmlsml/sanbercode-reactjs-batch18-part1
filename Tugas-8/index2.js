var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise 
function bukuPms(waktu, index) {
    readBooksPromise(waktu, books[index])
    .then(function (sisaWaktu) {
        index++
        if (index < books.length) {
            bukuPms(sisaWaktu, index)
        }
    })
    .catch(function (sisaWaktu) { 
        console.log('~ WAKTU HABIS ~')
    })
}


bukuPms(10000, 0)