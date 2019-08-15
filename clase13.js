let persona = {
    nombre: 'jonathan',
    apellio: 'rangel',
    edad: 30,
    peso: 90
}

let INCREMENTO_PESO = 0.2
let DIAS_DEL_AÑO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const bajarDePeso = persona => persona.peso -= INCREMENTO_PESO

console.log(`Al INICIO del año ${persona.nombre} pesaba ${persona.peso}kg`)

for (let i = 0; i <= DIAS_DEL_AÑO; i++) {
    var random = Math.random()
    if (random < 0.25) {
        aumentarDePeso(persona)
    } else if (random < 0.5) {
        bajarDePeso(persona)
    }
}

console.log(`Al FINAL del año ${persona.nombre} pesaba ${persona.peso.toFixed(1)}kg`)