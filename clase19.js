var jonathan = {
    nombre: 'jonathan',
    apellido: 'Rangel',
    altura: 1.78
}

var elvia = {
    nombre: 'Elvia',
    apellido: 'Uribe',
    altura: 1.50
}

var daniel = {
    nombre: 'Daniel',
    apellido: 'Rangel',
    altura: 1.90
}

//hacemos un arreglo de personas
var personas = [jonathan, elvia, daniel]

//funcionalidad de las personas altas
const esAlta = ({ altura }) => altura >= 1.8
var personasAltas = personas.filter(esAlta)
console.log(personasAltas)

//funcionalidad de las personas bajas
const esBaja = ({ altura }) => altura < 1.6
var personasBajas = personas.filter(esBaja)
console.log(personasBajas)


//nueva manera de regresar valores con una arrow fuction, debemos de poner entre parentesis el nuevo objeto
const pasarAlturaACms = persona => ({
        ...persona,
        altura: persona.altura * 100
    })
    // esta manera es equivalente a la anterior
    // const pasarAlturaACms = persona => {
    //     return {...persona,
    //         altura: persona.altura * 100
    //     }
    // }

var personasCms = personas.map(pasarAlturaACms)

console.log(personasCms)