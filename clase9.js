var persona = {
    nombre: 'Jonathan',
    apellio: 'Rangel',
    edad: 28
}

//los objetos se pasan por referencia, en esta funcion si moificamos atributos del objeto, el objeto va a cambiar
function cumpleanos(persona) {
    persona.edad++
}

//si no queremos modificar el objeto que mandamos por referencia, podemos devolver un nuevo objeto con la misma estructura del recibido pero con los atributos que queramos, cambiados.
function cumpleanos(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}

/*
el tripme dot ... es muy interesante y fue introucido en ES6,
1.- Sirve para clonar objetos, como en la funcion cumpleaños
2.- Para N parametros en funciones, ejemplo: si tengo una funcion myFunc(a,b,...args) inica que por fuerza debe recibir 2 parametros, pero mas de 2 parametros tambien se podria, hasta n parametros. conocios como "Rest Parameter"
3.- Para arreglos, los desempaqueta y los coloca en una 'lista', ejemplo:
function myFunc(...[x, y, z]) {
  return x * y* z;
}
aqui la funcion puede acceder a los elementos del arreglo como si fueran variables, tambien conocio como "spread operator"

mas info en este link: https://dev.to/sagar/three-dots---in-javascript-26ci

*/