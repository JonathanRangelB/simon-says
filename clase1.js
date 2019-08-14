let nombre = 'Jonathan',
    apellio = 'Rangel'

nombre = nombre.toUpperCase()
apellio = apellio.toLowerCase()

let primeraLetrDelNombre = nombre.charAt(2)
let cantidaDeLetrasNombre = nombre.length

let nombreCompleto = nombre + ' ' + apellio
    //interpolacion de texto
let nombreCompletoInterpolado = `${nombre} ${apellio.toUpperCase()}` //se pueden agregar funciones dentro de las llaves

let str = nombre.substr(1, 2) //a partir de la posicion 1,

console.log(nombre.charAt(nombre.length - 1))