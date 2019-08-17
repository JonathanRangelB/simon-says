var jonathan = {
    nombre: 'jonathan',
    apellido: 'Rangel',
    altura: 1.78,
    cantidadDeLibros: 45
}

var elvia = {
    nombre: 'Elvia',
    apellido: 'Uribe',
    altura: 1.50,
    cantidadDeLibros: 120
}

var daniel = {
    nombre: 'Daniel',
    apellido: 'Rangel',
    altura: 1.90,
    cantidadDeLibros: 11
}

//hacemos un arreglo de personas
var personas = [jonathan, elvia, daniel]

/*
lo que hace reducer es: recibe 2 parametros, el primero es nuestro total, se ira sumando con cada iteracion, y el segundo, en este caso es el nombre de persona, que si podemos observar, es para clarificar que es por caa persona dentro del arreglo personas, que es donde originalemte se mando llamar el metodo reduce (personas.reduce()), ojo que dice reduce, no reducer.
*/
const reducer = (acum, { cantidadDeLibros }) => acum += cantidadDeLibros

/*
reduce lo que hace es iterar en todos los elementos de nuestro arreglo, el primer parametro es la funcion a la cual vamos a llamar, en este caso llamada reducer, y como segundo parametro es el valor con el cual queremos iniciar a contar, en este caso 0.
cada iteracion, a ese 0 se va sumando lo que regresa reducer
*/
var totalDeLibros = personas.reduce(reducer, 0)

// var acum = 0
// for (let i = 0; i < personas.length; i++) {
//     acum = acum + personas[i].cantidadDeLibros
// }

console.log(`en total todos tienen ${totalDeLibros} libros`)