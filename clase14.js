let persona = {
    nombre: 'jonathan',
    apellio: 'rangel',
    edad: 30,
    peso: 90
}

let INCREMENTO_PESO = 0.2
let DIAS_DEL_AÑO = 365
let dias = 0

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const bajarDePeso = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4
const META = persona.peso - 3

console.log(`Al INICIO del año ${persona.nombre} pesaba ${persona.peso}kg`)

while (persona.peso > META) {
    let random = Math.random()
    persona.peso -= random
    if (comeMucho()) {
        persona.peso += INCREMENTO_PESO
    }
    if (realizaDeporte()) {
        persona.peso -= INCREMENTO_PESO
    }
    dias++
}

console.log(`Pasaron ${dias} dias hasta que ${persona.nombre} bajo de peso`)

console.log(`Al FINAL del año ${persona.nombre} pesaba ${persona.peso.toFixed(1)}kg`)