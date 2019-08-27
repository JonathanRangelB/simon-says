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
            .fail(() => {
                reject(id)
            })
    })
}

function onError(id) {
    console.log(`Sucedio un error al intentar conseguir el personaje ${id}`)
}

async function obtenerPersonajes() {
    let ids = [1, 2, 3, 4, 5, 6, 7]
    let promesas = ids.map(id => obtenerPersonaje(id))
    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch (id) {
        onError(id)
    }
}

obtenerPersonajes()