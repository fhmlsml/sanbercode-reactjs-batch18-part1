// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// Tulis code untuk memanggil function readBooks di sini
function bacaBuku(waktu, index) {
    readBooks(waktu, books[index], function (sisaWaktu) {
        if (sisaWaktu > 0) {
            bacaBuku(sisaWaktu, index+1)
        }
    })
}

bacaBuku(10000, 0)