/*
Promesas!
*/
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id) {
    //retornamos directamente la promesa
    //esta es la sintaxis de la promesa, tiene como parametros las 2 funciones que tiene que ejecutar, resolve y reject
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $.get(url, opts, function(data) { //hacemos uso de jquery nuevamente
                //aqui mandamos llamar a la funcion resolve cuando es exitosa la llamada
                resolve(data)
            })
            .fail(function() {
                reject(id)
            })
    })
}

function onError(id) {
    console.log(`Sucedio un error al intentar conseguir el personaje ${id}`)
}

obtenerPersonaje(1)
    .then(personaje => {
        console.log(`Hola mi nombre es: ${personaje.name} y mi altura es ${personaje.height}`)
        return obtenerPersonaje(2)
    })
    .then(personaje => {
        console.log(`Hola mi nombre es: ${personaje.name} y mi altura es ${personaje.height}`)
        return obtenerPersonaje(3)
    })
    .then(personaje => {
        console.log(`Hola mi nombre es: ${personaje.name} y mi altura es ${personaje.height}`)
        return obtenerPersonaje(4)
    })
    .then(personaje => {
        console.log(`Hola mi nombre es: ${personaje.name} y mi altura es ${personaje.height}`)
        return obtenerPersonaje(5)
    })
    .then(personaje => {
        console.log(`Hola mi nombre es: ${personaje.name} y mi altura es ${personaje.height}`)
        return obtenerPersonaje(6)
    })
    .then(personaje => {
        console.log(`Hola mi nombre es: ${personaje.name} y mi altura es ${personaje.height}`)
    })
    .catch(onError)