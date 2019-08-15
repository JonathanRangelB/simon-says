let persona = {
    nombre: 'Jonathan',
    apellio: 'Rangel',
    edad: 28
}

function imprimirNombreEnMayusculas(persona) {
    //asi se escribe de la primera y tradicional forma
    //let nombre = persona.nombre
    //asi se escribe en JS, es equivalente a la linea anterior, nos crea una variable nombre estraida del atributo nombre
    let { nombre } = persona
    console.log(nombre.toUpperCase())
}

// function imprimirNombreEnMayusculas({ nombre, edad }) {
//     console.log(`${nombre.toUpperCase()} ${edad}`)
// }

imprimirNombreEnMayusculas(persona)

imprimirNombreEnMayusculas({ nombre: 'Elvia' })

function imprimirNombreYEdad({ nombre, edad }) {
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años de edad`)
}

imprimirNombreYEdad(persona)