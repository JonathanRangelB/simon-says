let persona = {
    nombre: 'jonathan',
    apellio: 'rangel',
    edad: 10,
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

/*
1.- En las arrow functions si la funcion tiene un solo parametro, podemos obviar los parentesis, y por ende, podemos removerlos, si tuviera mas de 2 argumentos, el uso de los parentesis es obligatorio

2.- es buena practica declarar como constantes las funciones en lugar de var y let

3.- si el cuerpo de la arrow function solo retorna algo, poedmos omitir el return y remover las llaves del cuerpo de la funcion

4.- tambien podemos hacer uso ed la destructuracion de un objeto en los parametros de la funcion, y en este caso, como mencionamos, es ed un solo parametro y retiramos los parentesis, pero si queremos solo usar un atributo del objeto por medio de destructuracion, entonces debemos de colocar si o si los parentesis y su llave correspondiente ({ atributo1, atributo2 })
*/
// const esMayorDeEdad = (persona) => {
//     return persona.edad >= MAYORIA_DE_EDAD
// }

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD