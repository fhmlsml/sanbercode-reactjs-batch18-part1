//  ===================== SOAL NOMOR 1 ===================== //

// Realease 0
class Animal {
    constructor(name, legs=4, cold_blooded=false){
        this.AnimalName = name
        this.AnimalLegs = legs
        this.AnimalCb = cold_blooded
    }

    get name(){
        return this.AnimalName
    }
    
    get legs(){
        return this.AnimalLegs
    }
  
    get cold_blooded(){
        return this.AnimalCb
    }
}

var sheep = new Animal("shaun")
 
console.log(sheep.name)
console.log(sheep.legs)
console.log(sheep.cold_blooded)


// Realease 1
class Ape extends Animal{
    constructor(name, legs=2){
        super(name)
        this.AnimalLegs = legs
    }

    yell(){
        return 'Auooo'
    }
}

var sungokong = new Ape("kera sakti")
console.log(sungokong.yell())

class Frog extends Animal{
    constructor(name, legs=4, cold_blooded=false){
        super(name)
        this.AnimalLegs = legs
        this.AnimalCb = cold_blooded
    }

    jump(){
        return 'hop hop'
    }
}
 
var kodok = new Frog("buduk")
console.log(kodok.jump())



console.log('/n')
//  ===================== SOAL NOMOR 2 ===================== //

class Clock {
    constructor({template}) {
        this.template = template
        this.timer = null
    }

    render() {
        const date = new Date()

        let hours = date.getHours()
        if (hours < 10) hours = '0' + hours

        let mins = date.getMinutes()
        if (mins < 10) mins = '0' + mins

        let secs = date.getSeconds()
        if (secs < 10) secs = '0' + secs

        let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs)

        console.log(output)
    }

    stop() {
        clearInterval(this.timer)
    }

    start() {
        this.render()
        this.timer = setInterval( () => this.render(), 1000)
    }
}

var clock = new Clock({template: 'h:m:s'})
clock.start()
// clock.stop()