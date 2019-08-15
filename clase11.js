let persona = {
    nombre: 'jonathan',
    apellio: 'rangel',
    edad: 30,
    ingeniero: true,
    cocinero: false,
    guitarrista: false,
    vuelaDrones: false
}

//POR BUENA PRACTICA SE TIENEN QUE PONER LAS CONSTANTES EN MAYUSCULAS
const MAYORIA_DE_EDAD = 18

function imprimirPofesiones(persona) {
    console.log(`${persona.nombre} es:`)
    if (persona.ingeniero) {
        console.log(`Ingeniero`)
    } else {
        console.log("no es ingeniero")
    }
    if (persona.cocinero) {
        console.log(`Cocinero`)
    } else {
        console.log("no es cocinero")
    }
    if (persona.guitarrista) {
        console.log(`Guitarrista`)
    } else {
        console.log("no guitarrista")
    }
    if (persona.vuelaDrones) {
        console.log(`Vuela Drone`)
    } else {
        console.log("no vuela drones")
    }
}

function imprimirSiEsMayorDeEdad(persona) {
    let mensaje = esMayorDeEdad(persona) ? 'Es mayor de edad' : 'Es menor de edad'
    console.log(mensaje)
}

function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}