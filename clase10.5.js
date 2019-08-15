let persona = {
    nombre: 'jonathan',
    apellio: 'rangel',
    edad: 10,
    ingeniero: true,
    cocinero: false,
    guitarrista: false,
    vuelaDrones: false
}

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
    let mensaje = persona.edad > 18 ? 'Es mayor de edad' : 'Es menor de edad'
    console.log(mensaje)
}