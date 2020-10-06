//  ===================== SOAL NOMOR 1 ===================== //
const luasLingkaran = (r) => {
  let hasil = 3.14 * r * r
  return hasil
}

console.log(luasLingkaran(5))

const kelilingLingkaran = (r) => {
  let hasil = 2 * 3.14 * r
  return hasil
}

console.log(kelilingLingkaran(5)) 



console.log('\n')
//  ===================== SOAL NOMOR 2 ===================== //
let kalimat = ""
const addKata = (kata) => {
  if (!kalimat) {
    kalimat = `${kalimat}${kata}`
  } 
  else {
    kalimat = `${kalimat} ${kata}`
  }
}

// Adding Section
addKata("saya")
addKata("adalah")
addKata("seorang")
addKata("frontend")
addKata("developer")
// End

console.log(kalimat)



console.log('\n')
//  ===================== SOAL NOMOR 3 ===================== //
const newFunction = (firstName, lastName) => {
    return {
        firstName,
        lastName,
        fullName: () => {
            console.log(firstName + " " + lastName)
            return
        }
    }
}
newFunction("William", "Imoh").fullName()



console.log('\n')
//  ===================== SOAL NOMOR 4 ===================== //
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const {firstName, lastName, destination, occupation, spell} = newObject

console.log(firstName, lastName, destination, occupation)



console.log('\n')
//  ===================== SOAL NOMOR 5 ===================== //
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west,...east];

console.log(combined)